import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{

postForm:FormGroup;

constructor(){}

ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
         Validators.minLength(6),
        ]),
        description:new FormControl(null,[
          Validators.required,
          Validators.minLength(10),

        ])

  })

}

showDescriptionErrors(){
  const desccriptionForm = this.postForm.get('description');
  if(desccriptionForm?.touched && !desccriptionForm.valid){

    if(desccriptionForm?.errors?.['required']){
      return 'Description is required';
    }
  
    if(desccriptionForm?.errors?.['minlength']){
      return 'Description should be of minimum 10 characters length';
    }

  }
  return null;

}

onAddPost(){
  if(!this.postForm.valid){
    return;
  }
  
}

}
