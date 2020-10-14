import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from '../../actions/Todo.actions'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;

  /** ``todosRedModule`` - This name should be same what we mentioned in 
   * app.module.ts => StoreModule.forRoot({ todosRedModule: TodoReducer })
   * */
  constructor(private store: Store<{ todosRedModule: Todo[] }>) {
    debugger;
    store.pipe(select('todosRedModule'))
      .subscribe(data => {
        // console.log(data);
        let dsd: any;
        dsd = data;
        this.todos = dsd;
      })
  }
  removeItem = (ItemIndex: number) => {
    this.store.dispatch(new TodoRemove(ItemIndex))
  }
  ngOnInit(): void {
  }

}
