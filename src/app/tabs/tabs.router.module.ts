import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
          }
        ]
      },
      // {
      //   path: 'pedidos',
      //   loadChildren: '../pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule'
      // },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../usuarios/perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: 'enderecos',
        loadChildren: '../enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule'
      },
      {
        path: 'endereco/novo',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      },
      {
        path: 'enderecos/editar/:key',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      },
      {
        path: 'lista-pedido',
        loadChildren: '../pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule'
      }
    ]
  },
  {
    path: 'pedido',
    children: [
      {
        path: 'carrinho/novo-item/:key',
        loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
      },
      {
        path: 'carrinho',
        loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
      },
      {
        path: 'forma-pagamento',
        loadChildren: '../pedidos/forma-pagamento/forma-pagamento.module#FormaPagamentoPageModule'
      }
    ]
  },
  {
    path: 'produto',
    children: [
      {
        path: 'detalhes-produtos/',
        loadChildren: '../produtos/detalhes-produtos/detalhes-produtos.module#DetalhesProdutosPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
