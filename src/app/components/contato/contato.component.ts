import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  //(doc máscaras) https://consolelog.com.br/como-aplicar-uma-mascara-input-telefone-cpf-ip-data-com-ngx-mask-angular/#:~:text=Em%20projetos%20Angular%2C%20podemos%20recorrer%20a%20uma%20biblioteca,telefone%2C%20datas%2C%20CPFs%2C%20entre%20outros%2C%20em%20formul%C3%A1rios%20web.

  //Grupo de atributos de formulário que pode ser validado
  protected formContato = this.fb.group({
    //atributo: [valorInicial], [configuracoes]
    nome: ['', [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ['', [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ['', [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    mensagem: ['', [
      Validators.minLength(10),
      Validators.required
    ]]
  });

  protected produtos: IProduto[] = [];

  constructor(private fb: FormBuilder, private prods: ProdutosService){}

  ngOnInit(): void {
    this.produtos = this.prods.getAll();
  }

}
