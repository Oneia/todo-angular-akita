import { Component, EventEmitter, OnDestroy, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Todo } from 'src/app/todo';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnDestroy, OnInit {

  @Output() toDoChange = new EventEmitter<Partial<Todo>>();

  task: FormControl;

  ngOnDestroy() { }

  ngOnInit() {
    this.task = new FormControl();
    this.task.valueChanges
      .pipe(debounceTime(200), untilDestroyed(this))
      .subscribe(value => this.toDoChange.emit({ task: value }));
  }

}