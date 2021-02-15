import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() item: any;
  @Output() currentTask = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  valueTask(item: any): void {
    this.currentTask.emit(item);
  }

  onChange(item, id):void{
    this.tasksService.toggleDone(item, id);
  }

}
