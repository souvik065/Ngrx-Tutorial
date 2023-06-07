import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes,RouterModule, Route } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { postReducer } from "./state/posts.reducer";
import { StoreModule } from "@ngrx/store";
import { POST_STATE_NAME } from "./state/posts.selectors";

const routes: Routes = [
    {
        path:'',
        component:PostsListComponent,
        children:[
          {path:'add', component:AddPostComponent},
          {path:'edit/:id', component:EditPostComponent}
        ]
      }
];

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      StoreModule.forFeature(POST_STATE_NAME,postReducer)
    ],
   
  })

  export class PostModule { }