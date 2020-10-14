import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component implements OnInit {
  todos2: Observable<Todo[]>;

  constructor(private store: Store<{ todosRedModule: Todo[] }>) {
    debugger;
    store.pipe(select('todosRedModule'))
      .subscribe(data => {
        // console.log(data);
        let dsd: any;
        dsd = data;
        this.todos2 = dsd;
      })
  }

  ngOnInit(): void {
  }

}
