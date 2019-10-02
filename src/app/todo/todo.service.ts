import { ID, guid } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TodoStore } from './todo.store';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ENTITIES, Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private todoStore: TodoStore) {
  }

  get() {
    return of(ENTITIES).pipe(tap(entities => this.todoStore.set(entities)));
  }

  completeTodo(id: ID): void {
    this.todoStore.update(id, {complete: true});
  }

  inCompleteTodo(id: ID): void {
    this.todoStore.update(id, {complete: false});
  }

  addTodo(todo: Partial<Todo>): void {
    this.todoStore.upsert(guid(), todo);
  }
}
