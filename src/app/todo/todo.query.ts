import { Todo } from 'src/app/todo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState> {

  constructor(protected store: TodoStore) {
    super(store);
  }

  public selectIncomplete(): Observable<Todo[]> {
    return this.selectAll({filterBy: entity => !entity.complete});
  }

  public selectComplete(): Observable<Todo[]> {
    return this.selectAll({filterBy: entity => entity.complete});
  }
}
