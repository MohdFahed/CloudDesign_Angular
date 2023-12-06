import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import {
  CounterReducer,
  nameChageReducer,
} from './shared/store/counter.reducer';
import { SimpleExampleComponent } from './components/simple-example/simple-example.component';
import { BlogComponent } from './components/blog/blog.component';
import { blogReducer } from './shared/blog/blog.reducer';
import { HomeComponent } from './components/home/home.component';
import { DailLogBoxComponent } from './components/dail-log-box/dail-log-box.component';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { HttpClientModule } from '@angular/common/http';
import { BLogEffect } from './shared/blog/blog.effect';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationComponent } from './registration/registration.component';
import { regReducer } from './shared/registration/reg.reducer';
import { RegDisplayComponent } from './reg-display/reg-display.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterDisplayComponent,
    SimpleExampleComponent,
    BlogComponent,
    HomeComponent,
    DailLogBoxComponent,
    RegistrationComponent,
    RegDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: CounterReducer,
      names: nameChageReducer,
      blog: blogReducer,
      reg: regReducer,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([BLogEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
