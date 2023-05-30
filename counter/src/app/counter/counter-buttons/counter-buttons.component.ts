import { Component, EventEmitter, Output } from '@angular/core';
import {Store} from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {

  constructor(private store: Store<{counter:CounterState}>) {}

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();


  onIncrement(){
    this.store.dispatch(increment());

  }
  onDecrement(){
    this.store.dispatch(decrement());

  }

  onReset(){
    this.store.dispatch(reset());

  }

  
  
}
