import { Injectable } from '@angular/core';
import { TodoStore } from './todo.store';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ENTITIES } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private todoStore: TodoStore,
              private http: HttpClient) {
  }

  get() {
    return of(ENTITIES).pipe(tap(entities => this.todoStore.set(entities)));
  }
}
