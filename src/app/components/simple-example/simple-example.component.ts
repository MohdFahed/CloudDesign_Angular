import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { nameChange } from 'src/app/shared/store/counter.action';
import { NameModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css'],
})
export class SimpleExampleComponent {
  displayName: string = '';
  constructor(private store: Store<{ names: NameModel }>) {
    this.store.select('names').subscribe((res) => {
      console.log(res);
      this.displayName = res.name;
    });
  }
  changeName() {
    this.store.dispatch(
      nameChange({ value: 'Rahman From Murtizapur', age: 34 })
    );
  }
}
