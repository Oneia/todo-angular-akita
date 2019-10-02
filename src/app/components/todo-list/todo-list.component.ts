import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/todo';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {

  @Input() todos: Todo[];

  @Output() todoChange = new EventEmitter<Todo>();

  constructor() { }

  onCompleteChange(toDo: Todo, change: MatCheckboxChange) {
    this.todoChange.emit({
      ...toDo,
      complete: change.checked
    });
  }

}
