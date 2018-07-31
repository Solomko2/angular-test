import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Post} from './Post.model';
import {Cacheable, CacheBuster} from 'ngx-cacheable';


const productNotifier = new Subject();

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  @Cacheable({
    cacheBusterObserver: productNotifier
  })
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  @CacheBuster({
    cacheBusterNotifier: productNotifier
  })
  public addPost(post: Post): Observable<any> {
    return this.http.post('http://localhost:3000/posts', post);
  }

  constructor(private http: HttpClient) { }
}
