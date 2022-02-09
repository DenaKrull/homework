import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostsInfo } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostsInfo[]> {
    return this.httpClient.get<PostsInfo[]>(`https://jsonplaceholder.typicode.com/posts?userId=1`)
      .pipe(map(posts => {
        return posts.map(post => {
          return {
            title: post.title,
            body: post.body
          }
        }
        )
      }
      )
      )
  }
}
