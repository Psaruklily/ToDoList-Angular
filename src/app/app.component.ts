
import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from './tasks.service';
import { TemplateForTask } from './template-for-task';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('list', { read: ViewContainerRef }) list: ViewContainerRef;
  @ViewChild('input', { static: false }) public input: ElementRef;

  componentRef: any;
  newTask: TemplateForTask = new TemplateForTask();
  taskList: any;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.displayTasks();
  }

  saveTask(): void {
    this.tasksService.createTask(this.newTask);
    console.log(this.newTask);
    this.input.nativeElement.value = '';
    this.newTask = new TemplateForTask;
  }

  displayTasks() {
    this.tasksService.getTaskList().snapshotChanges().pipe(
      map(changes =>
        changes.map(t =>
          ({ key: t.payload.key, ...t.payload.val() })
        )
      )
    ).subscribe(tasks => {
      this.taskList = tasks;
      console.log(this.taskList)
    })
  }
}
