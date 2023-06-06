import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selectors';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy{
  post:Post;
  postForm:FormGroup;
  postSubscription:Subscription;
  constructor(
    private route:ActivatedRoute,
    private store:Store<AppState>,
    private router:Router
     ){}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params)=>{
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


  onSubmit(){
    if (!this.postForm.valid){
      return
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post:Post={
      id:this.post.id,
      title,
      description,
    }

    //Dispatch the action
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['post']);
  }

  ngOnDestroy(): void {
      if(this.postSubscription){
        this.postSubscription.unsubscribe();
      }
  }

}
