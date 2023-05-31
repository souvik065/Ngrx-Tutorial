import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, changeChannelName } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  value: number;
  Name:string;

  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void{

    this.store.select('counter').subscribe(data=>{
      console.log("Name Observable Called");
      this.Name = data.name
    })
  }

  onAdd(){
  
   this.store.dispatch(customIncrement({count: +this.value}));
  }

  onChangeName(){
    this.store.dispatch(changeChannelName());
  }

}
