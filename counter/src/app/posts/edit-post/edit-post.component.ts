import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selectors';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy{
  post:Post;
  postForm:FormGroup;
  postSubscription:Subscription;
  constructor(private router:ActivatedRoute, private store:Store<AppState>){}

  ngOnInit(): void {
      this.router.paramMap.subscribe((params)=>{
        const id = params.get('id');
        this.store.select(getPostById, {id}).subscribe((data)=>{
          this.post = data;
          this.createForm();
        });
      });
  }

  createForm(){
    this.postForm = new FormGroup({
      title:new FormControl(this.post.title,[
        Validators.required,
         Validators.minLength(6),
        ]),
        description:new FormControl(this.post.description,[
          Validators.required,
          Validators.minLength(10),

        ])
    });
  }

  ngOnDestroy(): void {
      if(this.postSubscription){
        this.postSubscription.unsubscribe();
      }
  }

}
