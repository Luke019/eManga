import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'forma-pagamento', loadChildren: './pedidos/forma-pagamento/forma-pagamento.module#FormaPagamentoPageModule' },
  { path: 'detalhes-produtos', loadChildren: './produtos/detalhes-produtos/detalhes-produtos.module#DetalhesProdutosPageModule' },
  { path: 'lista-pedido', loadChildren: './pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule' },
  { path: 'sobre-usuarios', loadChildren: './usuarios/sobre-usuarios/sobre-usuarios.module#SobreUsuariosPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
