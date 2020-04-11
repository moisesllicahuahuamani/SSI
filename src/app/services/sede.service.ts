import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Sede } from '../interfaces/sede';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private sedeBd: AngularFireList<Sede>;
  constructor(private bd: AngularFireDatabase) {
    this.sedeBd = this.bd.list('./sede', ref => ref.orderByChild('departamentos'));
}
getSede(): Observable<Sede[]>{
return this.sedeBd.snapshotChanges().pipe(
  map(changes => {
    return changes.map(c => ({$key: c.payload.key, ...c.payload.val()}));
  })
);
}
addSede(sede: Sede){
return this.sedeBd.push(sede);
}
deleteSede(id: string){
  this.bd.list('/sede').remove(id);
}
editSede(newDataSede){
  const $key = newDataSede.$key;
  delete(newDataSede.$key);
  this.bd.list('/sede').update($key, newDataSede);
}
}
