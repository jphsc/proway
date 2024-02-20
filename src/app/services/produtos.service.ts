import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos } from '../produtos';
import { NotificacaoService } from './notificacao.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  // private produtos: IProduto[] = produtos;
  private produtos: IProduto[] = []
  protected produto!: IProduto;

  constructor(private notificar: NotificacaoService) { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => {
      if(produto.id == produtoId){
        return produto
      } else {
        return this.produto;
      }
    })
  }

  obterQuantidadeEstoque(qtd: any, idProduto: any): number{
    let quantidade: number = qtd;
    const produto = this.getOne(idProduto);

    if(quantidade > Number(produto?.estoque)){
      this.notificar.notificar('Informe a quantidade menor ou igual ao estoque')
      return quantidade = Number(produto?.estoque);
    } else {
      return quantidade;
    }
  }

  initSetAll():void {
    localStorage.setItem('db_pdts', JSON.stringify(produtos));
    this.produtos = JSON.parse(localStorage.getItem('db_pdts') || '[]');
  }
}
