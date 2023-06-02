import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, changeChannelName } from '../state/counter.action';
import { getName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  value: number;
  Name$:Observable<string>;

  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void{

    this.Name$ = this.store.select(getName);
     
  }

  onAdd(){
  
   this.store.dispatch(customIncrement({count: +this.value}));
  }

  onChangeName(){
    this.store.dispatch(changeChannelName());
  }

}
