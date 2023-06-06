import { Observable } from 'rxjs';
import { Post } from './../../models/posts.model';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../state/posts.selectors';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
  posts: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id:string){
    if(confirm("Are you sure youn want to delete.")){
      this.store.dispatch(deletePost({id}));
    }
  }

}
