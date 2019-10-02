import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/todo';
import { MatCheckboxChange } from '@angular/material';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {

  @Input() todo: Todo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

}
