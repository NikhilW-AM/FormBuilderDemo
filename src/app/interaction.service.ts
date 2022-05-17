import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _formField = new Subject();
  fields$ = this._formField.asObservable();
  constructor() { }

  sendFBData(value: any) {
    this._formField.next(value)
  }
}
