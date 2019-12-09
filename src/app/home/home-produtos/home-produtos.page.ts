import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../shared/home.service';
import { CarrinhoService } from 'src/app/pedidos/shared/carrinho.service';
import { ProdutosService } from 'src/app/produtos/shared/produtos.service';

@Component({
  selector: 'app-home-produtos',
  templateUrl: './home-produtos.page.html',
  styleUrls: ['./home-produtos.page.scss'],
})
export class HomeProdutosPage implements OnInit {
  produtos: Observable<any[]>;
  carrinhoPossuiItens: boolean = false;
  categorias: Observable<any[]>;

  constructor(private router: Router,
              private sharedService: HomeService,
              private produtosService: ProdutosService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.produtos = this.sharedService.getAll();
    this.categorias = this.produtosService.getCategoriasAll();
    this.carrinhoService.carrinhoPossuiItens().subscribe((existemItens: boolean) => {
      this.carrinhoPossuiItens = existemItens;
    });
  }

  adicionarProduto(produtoKey: string) {
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }
}
