import { Component, OnInit, Input } from '@angular/core';
import{ TasksService } from '../tasks.service';

@Component({
  selector: 'app-btn-del',
  templateUrl: './btn-del.component.html',
  styleUrls: ['./btn-del.component.scss']
})
export class BtnDelComponent implements OnInit {

  @Input() item: any;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  deleteTask(): void{
    this.tasksService.deleteTask(this.item.key)
  }

}
