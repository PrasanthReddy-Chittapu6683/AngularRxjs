import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo.reducer';
import { TodoComponent } from './component/todo/todo.component'
import { FormsModule } from '@angular/forms';
import { Todo2Component } from './component/todo2/todo2.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Todo2Component,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ todosRedModule: TodoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
