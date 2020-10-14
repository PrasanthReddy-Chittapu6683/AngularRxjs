import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoAdd } from '../../actions/Todo.actions'
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<{ todo: Todo[] }>) { }

  AddTodo = (NewTodo: string) => {
    const newTodo = new Todo();
    newTodo.title = NewTodo;
    this.store.dispatch(new TodoAdd(newTodo))
  }
  ngOnInit(): void {
  }

}
