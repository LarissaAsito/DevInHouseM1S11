import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {
  task:string="";
  lista:string[] = [];

  addItem(task:string) {
    this.lista.push(task);
  }
}
