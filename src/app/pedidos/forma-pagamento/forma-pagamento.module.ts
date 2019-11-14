import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormaPagamentoPage } from './forma-pagamento.page';
import { SharedModule } from 'src/app/core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FormaPagamentoPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormaPagamentoPage]
})
export class FormaPagamentoPageModule {}
