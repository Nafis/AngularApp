import { Component } from '@angular/core';
import { Apifake } from '../apifake';
import { PostsType, RecupBody } from '../model';

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.html',
  styleUrls: ['./page1.css'],
})
export class Page1 {
  constructor(public fakeSrv: Apifake) { }
  doGetPosts(): void {
    this.fakeSrv.getPosts().subscribe({
      next: (value: RecupBody) => {
        console.log('Post received:', value);
      },
      error: (err: any) => {
        console.error('Error fetching posts:', err);
      }
    });
  }


}
