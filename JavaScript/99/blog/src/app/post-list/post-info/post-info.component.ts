import { Component, Input, OnInit } from '@angular/core';
import { PostsInfo } from 'src/app/shared/Post';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  @Input() postInfo!: PostsInfo;


}
