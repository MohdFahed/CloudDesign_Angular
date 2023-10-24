import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent {
  counterDisplay: any;
  counterData$!: Observable<any>;
  constructor(private store: Store<{ counter: { counter: Number } }>) {
    // this.store.select('counter').subscribe((data) => {
    //   this.counterDisplay = data.counter;
    //   console.log(this.counterDisplay);
    // });

    this.counterData$ = this.store.select('counter');
  }
}
