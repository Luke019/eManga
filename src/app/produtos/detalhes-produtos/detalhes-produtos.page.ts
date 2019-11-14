import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebasePath } from 'src/app/core/firebase-path';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {
  produtos: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

  }
  getByKey(key: string) {
    // 'produtos/'+'-L5sWLlqdjxFeH6a19Q-'
    //  path ='produtos/-L5sWLlqdjxFeH6a19Q-'
      const path = `${FirebasePath.PRODUTOS}${key}`;
      return this.db.object(path).snapshotChanges().pipe(
        map(change => {
      return ({ key: change.key, ...change.payload.val() });
        })
      );
    }

}
