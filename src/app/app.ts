import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Uncmp } from './uncmp/uncmp';
import { Lesrv } from './lesrv';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Uncmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helloang');

  message: string = 'message from app component';

  constructor( public srv: Lesrv, public router: Router) {

  }  

  doClickBt() : void {
    this.message = new Date().toISOString();
    this.srv.plus(10);
  }

  doGetPage(targetPage:string) : void {
    console.log(`go to page ${targetPage}`); 
    this.router.navigate([targetPage]);
  }




}
