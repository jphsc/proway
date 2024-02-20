import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho, produtos } from 'src/app/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit{
  protected produto: IProduto | undefined;
  protected quantidade: number = 1;

  constructor(
    private rota: ActivatedRoute,
    private service: ProdutosService,
    private notif: NotificacaoService,
    private carrinho: CarrinhoService){}

  ngOnInit(): void {
    const routeParams = this.rota.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));

    this.produto = this.service.getOne(productId);

    // this.obterQuantidadeEstoque(this.quantidade, productId);
  }

  adicionarAoCarrinho(){
    const produto: IProdutoCarrinho = {...this.produto!, quantidade: this.quantidade}
    this.carrinho.adicionarAoCarrinho(produto)
    this.notif.notificar('O produto foi adicionado ao carrinho.');
  }

  obterQuantidadeEstoque(qtd: any, idProduto: any): void{
    this.quantidade = this.service.obterQuantidadeEstoque(qtd, idProduto)
  }
}
