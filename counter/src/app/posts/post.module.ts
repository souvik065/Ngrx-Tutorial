import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes,RouterModule, Route } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";

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
      ReactiveFormsModule

    ],
   
  })
  export class PostModule { }