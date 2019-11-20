import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
import { UsuariosService } from './shared/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: UsuariosService,
               private router: Router ) { }

    canActivate(): Promise<boolean> {
            return new Promise(resolve => {
            this.authService.getAuth().onAuthStateChanged(user => {
              if (!user) { this.router.navigate(['login']); }
              resolve(user ? true : false);
            });
          });
        }

}
