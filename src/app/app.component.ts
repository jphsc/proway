import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './services/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'proway_computers';

  constructor(private produtoService: ProdutosService){}

  ngOnInit(): void {

    this.produtoService.initSetAll();

    // this.achar('an')
    // console.clear()
    // do {
    //   console.log(`Pagina: ${this.page}`);
    //   this.page++;
    // } while (this.ttPage >= this.page)

    // while (this.ttPage >= this.page) {
    //   console.log(`Pagina: ${this.page}`);
    //   this.page++;
    // }
  }

  // frutas = ['limao','banana', 'morango', 'caju', 'kiwi', 'banana', 'abacaxi'];
  // indexArray: any[] = [];

  // achar(texto: string){
  //   for(let i=0; i<this.frutas.length; i++){
  //     if(texto == this.frutas[i] || this.frutas[i].includes(texto)){
  //       this.indexArray.push(this.frutas.indexOf(this.frutas[i]))
  //     }
  //   }

  //   console.log(this.frutas)
  //   console.log(`Busca: ${texto}`)
  //   console.log('Palavras que possuem o valor da busca')

  //   this.indexArray.forEach(index =>{
  //     console.log(`Index: ${index} - Valor: ${this.frutas[index]}`)
  //   })
  // }


  // page: number = 1;
  // ttPage = 6;


}
