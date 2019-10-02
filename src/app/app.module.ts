import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    AkitaNgDevtools.forRoot(),
  ],
  declarations: [ AppComponent, TodoComponent, TodoListComponent, TodoFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
