// import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sobre-usuarios',
  templateUrl: './sobre-usuarios.page.html',
  styleUrls: ['./sobre-usuarios.page.scss'],
})
export class SobreUsuariosPage implements OnInit {
  // formUsuario: FormGroup;
  // usuarios: Observable<any[]>;

  constructor(
              // private router: Router
              ) { }

  ngOnInit() {

  }

  // getUsuarioText(usuario: any) {
  //   let usuarioText: '';
  //   usuarioText = usuario.nome;
  //   usuarioText += usuario.email;
  //   return usuarioText;
  // }

  // editar(key: string) {
  //   this.router.navigate(['/usuarios/usuarios/editar', key]);
  // }

}
