import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebasePath } from 'src/app/core/firebase-path';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              ) { }

  getUsuarioPath() {
    const path = `${FirebasePath.USUARIOS}${this.afAuth.auth.currentUser.uid}`;
    return path;
    }

  getUsuarioRef() {
    const path = this.getUsuarioPath();
    return this.db.list(path);
  }

  criarConta(usuario: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((userCredential: firebase.auth.UserCredential) => {
          userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
          userCredential.user.sendEmailVerification();
          this.logout();
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        .then((userCredential: firebase.auth.UserCredential) => {
          if (userCredential.user.emailVerified) {
            resolve();
          } else {
            this.logout();
            reject('Seu e-mail ainda não foi verificado. Por favor verifique seu e-mail.');
          }
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }

  update(usuario: any, key: string) {
    return this.save(usuario, key);
  }
  private save(usuario: any, key: string) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( ( resolve, reject) => {
      const usuarioRef = this.getUsuarioRef();
      if (key) {
        usuarioRef.update(key, usuario)
          .then( () => resolve(key) )
          .catch( () => reject());
      } else {
        usuarioRef.push(usuario)
          .then( (result: any) => resolve(result.key) );
    }
  });
}

  enviarEmailResetarSenha(email: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getDadosUsuario() {
    const user = { name: '', email: ''};
    if (this.afAuth.auth.currentUser) {
      user.name = this.afAuth.auth.currentUser.displayName;
      user.email = this.afAuth.auth.currentUser.email;
    }
    return user;
  }

  getAuth() {
    return this.afAuth.auth;
  }

    handlerError(error: any) {
      let mensagem = '';
      if (error.code == 'auth/email-already-in-use') {
        mensagem = 'O e-mail informado já está sendo usado.';
      } else if (error.code == 'auth/invalid-email') {
        mensagem = 'O e-mail informado é inválido.';
      } else if (error.code == 'auth/operation-not-allowed') {
        mensagem = 'A autenticação por email e senha não está habilitada';
      } else if (error.code == 'auth/weak-password') {
        mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
      } else if (error.code == 'auth/user-disabled') {
        mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
      } else if (error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
        mensagem = 'O usuario/senha inválido(s)';
      }

      return mensagem;
  }
}
