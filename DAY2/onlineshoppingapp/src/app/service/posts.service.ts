import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(public httpClient: HttpClient) {}

  getAllPosts() {
    // AJAX request !
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
