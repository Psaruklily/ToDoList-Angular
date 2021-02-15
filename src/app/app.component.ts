
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
  @ViewChild('btnSave', {static: false}) public buttonSave: ElementRef;
  @ViewChild('btnUpdate', {static: false}) public buttonUpdate: ElementRef;
  
  componentRef: any;
  newTask: TemplateForTask = new TemplateForTask();
  taskList: any;
  currentTaskReadyForUpdate: any;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.displayTasks();
  }

  saveTask(): void {
   // this.newTask.date = new Date();
    this.newTask.done = false;
    this.tasksService.createTask(this.newTask);
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

  updateCurrentTask(item):void{
    this.currentTaskReadyForUpdate = item;
    this.input.nativeElement.value = item.task;
    this.buttonUpdate.nativeElement.classList.remove('display');
    this.buttonSave.nativeElement.classList.add('display');
  }

  updateTask(currentTaskReadyForUpdate: any):void{
    this.tasksService.updateTask(currentTaskReadyForUpdate.key, this.input.nativeElement.value);
    this.buttonUpdate.nativeElement.classList.add('display');
    this.buttonSave.nativeElement.classList.remove('display');
    this.input.nativeElement.value = '';
  }
}
