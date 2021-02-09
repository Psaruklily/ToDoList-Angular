import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { TemplateForTask } from './template-for-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private dbPath = '/items';

  tasksRef: AngularFireList<TemplateForTask> = null;

  constructor(public db: AngularFireDatabase) {
    this.tasksRef = db.list(this.dbPath);
  }

  createTask(newTask: TemplateForTask):void{
    this.tasksRef.push(newTask);
  }

  getTaskList(): AngularFireList<TemplateForTask>{
    return this.tasksRef;
  }
}
