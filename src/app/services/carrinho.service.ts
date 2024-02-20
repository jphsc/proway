import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho): void{

    let elemento = this.itens.filter(pr => pr.id == produto.id);

    if(elemento.length > 0){
      let qtdItens = elemento.reduce((prev, curr) => prev + (curr.quantidade), 0);
      produto.quantidade += qtdItens;

      const newArray = this.itens.filter(pr => pr.id !== produto.id);

      this.itens = newArray;
      this.itens.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(this.itens));

    } else {
      this.itens.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
  }

  limparCarrinho(): void{
    this.itens = [];
    localStorage.removeItem('carrinho');
  }

  removerProdutoCarrinho(id: number): void{
    this.itens = this.itens.filter(item=> item.id !== id)
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }
}
