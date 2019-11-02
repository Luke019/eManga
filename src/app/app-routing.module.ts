import { AuthGuard } from './usuarios/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]
  },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'forma-pagamento', loadChildren: './pedidos/forma-pagamento/forma-pagamento.module#FormaPagamentoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
