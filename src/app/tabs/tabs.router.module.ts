import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-produtos',
        children: [
          {
            path: '',
            loadChildren: '../home/home-produtos/home-produtos.module#HomeProdutosPageModule'
          }
        ]
      },
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
          }
        ]
      },
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
        path: '',
        redirectTo: '/tabs/home-produtos',
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
      },
      {
        path: 'sobre-usuarios',
        loadChildren: '../usuarios/sobre-usuarios/sobre-usuarios.module#SobreUsuariosPageModule'
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
      },
      {
        path: 'produtos/:key',
        loadChildren: '../pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule'
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
    redirectTo: '/tabs/home-produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
