import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { PostModel } from '../../models/post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(public postSrvObj: PostsService) {}

  ngOnInit(): void {
    this.postSrvObj.getAllPosts().subscribe((response: any) => {
      this.posts = response;
      // const myModal = new bootstrap.Modal('#myModal', {
      //   keyboard: false,
      // });
    });
  }
}
