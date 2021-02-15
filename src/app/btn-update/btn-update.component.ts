import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-update',
  templateUrl: './btn-update.component.html',
  styleUrls: ['./btn-update.component.scss']
})
export class BtnUpdateComponent implements OnInit {

  @Input() item: any;
  @Output() currentTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  replaseTaskInInput(item: any): void {
    this.currentTask.emit(item);
  }
}
