import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adicionarProduto(produtoKey: string) {
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }
}
