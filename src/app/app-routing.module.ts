import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: 'carrinho', loadChildren: () => import('./components/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./components/contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: NaoEncontradoComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
