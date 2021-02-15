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

  deleteTask(key: string): Promise<void>{
    return this.tasksRef.remove(key);
  }

  updateTask(key: string, value:any): Promise<void>{
    return this.db.object('/items/' + key).update({task: value})
  }

  getTaskList(): AngularFireList<TemplateForTask>{
    return this.tasksRef;
  }

  toggleDone(newTask: TemplateForTask, key: string): Promise<void>{
    return this.db.object('/items/' + key).update({done: !newTask.done, task: newTask.task})
  }
}
