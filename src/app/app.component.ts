import { TodoQuery } from './todo/todo.query';
import { TodoService } from './todo/todo.service';
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

  completeTodos$: Observable<Todo[]>;

  incompleteTodos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private todoQuery: TodoQuery,
  ) {}

  ngOnInit() {
    this.todoService.get().subscribe();
    this.completeTodos$ = this.todoQuery.selectComplete();
    this.incompleteTodos$ = this.todoQuery.selectIncomplete();
  }

  addTodo(value: string): void {
    this.todoService.addTodo({task: value});
  }

  onCompleteTodo(todo: Todo): void {
    this.todoService.completeTodo(todo.id);
  }

  onIncompleteTodo(todo: Todo): void {
    this.todoService.inCompleteTodo(todo.id);
  }
}
