import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-usuarios',
  templateUrl: './sobre-usuarios.page.html',
  styleUrls: ['./sobre-usuarios.page.scss'],
})
export class SobreUsuariosPage implements OnInit {
  usuarios: Observable<any[]>;

  constructor(private router: Router
              ) { }

  ngOnInit() {

  }

  getUsuarioText(usuario: any) {
    let usuarioText: '';
    usuarioText = usuario.nome;
    usuarioText += usuario.email;
    return usuarioText;
  }

  editar() {
    this.router.navigate(['usuarios/sobre/editar']);
  }
}
