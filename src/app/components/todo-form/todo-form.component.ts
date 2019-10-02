import { Component, EventEmitter, OnDestroy, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnDestroy, OnInit {

  @Output() addTodo = new EventEmitter<string>();

  task: FormControl;

  ngOnDestroy() { }

  ngOnInit() {
    this.task = new FormControl();
  }

  onAddTodo(): void {
    this.addTodo.emit(this.task.value);
    this.task.reset();
  }
}
