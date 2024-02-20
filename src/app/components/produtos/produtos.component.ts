import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../../produtos';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private rotaAtiva: ActivatedRoute){}

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();

    this.getSearchProducts();
  }

  getSearchProducts(): void{
    this.rotaAtiva.queryParamMap.subscribe(param => {
      const descricao = param.get('descricao')?.toLocaleLowerCase();

      if(descricao){
        return this.produtos = this.produtos?.filter(produto => produto.descricao.toLowerCase().includes(descricao));
      }

      return this.produtos = this.produtos;
    })
  }

}
