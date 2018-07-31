import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FancyModule} from 'fancy';
import { FetchComponent } from './fetch/fetch.component';
import {HttpClientModule} from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { LabeledComponent } from './labeled/labeled.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    InputComponent,
    LabeledInputComponent,
    LabeledComponent
  ],
  imports: [
    BrowserModule,
    FancyModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
