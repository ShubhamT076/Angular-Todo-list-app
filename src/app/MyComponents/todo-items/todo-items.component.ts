import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Todo} from "src/app/Todo";
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit{
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoFinish: EventEmitter<Todo> = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void {
      
  }

  OnClick(todo: Todo)
  {
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggred")
  }

  OnClickfinish(todo:Todo)
  {
    console.log(todo)
    this.todoFinish.emit(todo);
  }
}
