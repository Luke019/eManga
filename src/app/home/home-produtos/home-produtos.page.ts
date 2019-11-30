import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home-produtos',
  templateUrl: './home-produtos.page.html',
  styleUrls: ['./home-produtos.page.scss'],
})
export class HomeProdutosPage implements OnInit {
  produtos: Observable<any[]>;

  constructor(private router: Router,
              private sharedService: HomeService) { }

  ngOnInit() {
    this.produtos = this.sharedService.getAll();
  }

  adicionarProduto(produtoKey: string) {
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }
}
