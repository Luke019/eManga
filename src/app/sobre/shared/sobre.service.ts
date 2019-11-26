import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SobreService {
  sobreRef: AngularFireList< any>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage){
    this .sobreRef = this .db.list('usuarios/');
   }

    getByKey(key: string) {
    const path = 'usuarios/' + key;
    return this .db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );
  }

  update(usuarios: any, key: string) {
    // return this .save(usuarios, key);
   }

   uploadImg(key: string, file: File) {
    const filePath = 'produtos/'+key;
    const ref = this .storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize( () => {
        ref.getDownloadURL().subscribe(url => {
          this .sobreRef.update(key, {img: url, filePath: filePath });
        });
      })
    ).subscribe();
  }
}
