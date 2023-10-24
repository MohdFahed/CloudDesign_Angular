import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  customCounter,
  decrement,
  increment,
  proccedCustomCounter,
  reset,
} from 'src/app/shared/store/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css'],
})
export class CounterbuttonComponent implements OnInit {
  disabledBtn: boolean = false;
  actionType = 'add';
  counterValue: any;
  constructor(private store: Store<{ counter: { counter: Number } }>) {}
  ngOnInit() {
    this.disabledConditionCheck();
  }
  incrementCounter() {
    this.disabledConditionCheck();
    this.store.dispatch(increment());
  }
  decrementCounter() {
    this.disabledConditionCheck();
    this.store.dispatch(decrement());
  }
  resetCounter() {
    this.disabledConditionCheck();
    this.store.dispatch(reset());
  }
  customeCounter() {
    this.disabledConditionCheck();
    this.store.dispatch(customCounter({ value: +2 }));
  }

  disabledConditionCheck() {
    this.store.select('counter').subscribe((res: any) => {
      if (res.counter <= 0) {
        this.disabledBtn = true;
      } else {
        this.disabledBtn = false;
      }
    });
  }
  ProccedAction() {
    this.store.dispatch(
      proccedCustomCounter({
        value: this.counterValue,
        actionType: this.actionType,
      })
    );
  }
}
