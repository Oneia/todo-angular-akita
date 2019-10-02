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

  @Input() toDos: Todo[];

  @Output() toDoChange = new EventEmitter<Todo>();

  constructor() { }

  onCompleteChange(toDo: Todo, change: MatCheckboxChange) {
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked
    });
  }

}