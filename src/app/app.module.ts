import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { StoreModule } from '@ngrx/store';
import {
  CounterReducer,
  nameChageReducer,
} from './shared/store/counter.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SimpleExampleComponent } from './components/simple-example/simple-example.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterDisplayComponent,
    SimpleExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: CounterReducer, names: nameChageReducer }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
