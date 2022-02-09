import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsInfo } from '../shared/Post';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Observable<PostsInfo[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
