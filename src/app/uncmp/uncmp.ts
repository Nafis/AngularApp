import { Component, OnInit} from '@angular/core';
import { Lesrv } from '../lesrv';

@Component({
  selector: 'app-uncmp',
  imports: [],
  templateUrl: './uncmp.html',
  styleUrl: './uncmp.css',
})
export class Uncmp implements OnInit {
  constructor(public srv: Lesrv) {}  
  ngOnInit(): void {
    console.log('OnInit Uncmp');
  }

}
