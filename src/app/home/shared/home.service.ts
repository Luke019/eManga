import { FirebasePath } from './../../core/firebase-path';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(FirebasePath.PRODUTOS, q => {
      return q.orderByChild('produtoDestaque').equalTo('sim');
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    );
  }
}
