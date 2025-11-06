import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsType, RecupBody } from './model';

@Injectable({
  providedIn: 'root',
})
export class Apifake {
  private http = inject(HttpClient);

  getPosts(): Observable<RecupBody> {
    return this.http.get<PostsType[]>('http://localhost:3000/posts').pipe(
      map((data: PostsType[]): RecupBody => {
        const temp = new RecupBody();
        
        temp.dateRecup = new Date().toISOString();
        temp.payload = data;
        return temp;
      })
    );
  }

}
