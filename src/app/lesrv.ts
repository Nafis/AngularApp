import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Lesrv {

  total:number = 0;
  plus(x:number):void {
    this.total += x;
  }
}
