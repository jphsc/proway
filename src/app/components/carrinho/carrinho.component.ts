import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  protected itensCarrinho: IProdutoCarrinho[] = [];
  total: any = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private rota: Router,
    private prd: ProdutosService){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal(): void{
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerItem(idItem: number): void{
    this.carrinhoService.removerProdutoCarrinho(idItem);
    this.itensCarrinho = this.itensCarrinho.filter(item=> item.id !== idItem);
    this.calcularTotal();
  }

  comprar(): void{
    let carrinho = this.carrinhoService.obtemCarrinho();

    for(let produtoAll of this.prd.getAll()){
      carrinho.map(productCart => {
        if(productCart.id == produtoAll.id){
          produtoAll.estoque -= productCart.quantidade;
        }
      })
    }

    this.carrinhoService.limparCarrinho();
    alert('Parabéns, você finalizou a sua compra!');
    this.rota.navigate(['/'])
  }

  atualizar(qtd: number, id: number):void{
    const prd = this.itensCarrinho.filter(item => item.id == id)
    prd[0].quantidade = this.prd.obterQuantidadeEstoque(qtd, id);
    this.calcularTotal();
  }
}
