import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  completeToDos: Observable<Todo[]>;

  incompleteToDos: Observable<Todo[]>;

  ngOnInit() {

  }

  addToDo() {
  }

  onAddToDoChange(toDo: Partial<Todo>) {
  }

  onCompleteToDo(toDo: Todo) {
  }

  onIncompleteToDo(toDo: Todo) {
  }
}
