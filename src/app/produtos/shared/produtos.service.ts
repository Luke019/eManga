import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { FirebasePath } from 'src/app/core/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private db: AngularFireDatabase) { }

  getAll(categoriaKey: string = null) {
    return this.db.list(FirebasePath.PRODUTOS, q => {
      if (categoriaKey) {
        // listar por categoria
        return q.orderByChild('categoriaKey').equalTo(categoriaKey);
      } else {
        return q.orderByChild('nome');
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByCustomers(produtos: string) {
    return this.db.list(FirebasePath.PRODUTOS, q => q.orderByChild('nome').startAt(produtos).endAt(produtos+'\uf88f'))
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }))
        })
      )
}
  getCategoriasAll() {
    return this.db.list(FirebasePath.CATEGORIAS)
    .snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  // Buscar Produtos por uma Key
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
