import { Component, OnInit } from '@angular/core';

type tTask = {
  id: number;
  title: string;
  description: string;
  openAt: string;
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Array<tTask> = new Array();

  ids: number = 0;

  constructor() {}

  doubleClick(event: any, id: number): void {
    event.target.disabled = !event.target.disabled;
    event.target.focus();
    event.path[2].style.borderColor = '#70e858';
  }

  onBlur(event: any, id: number): void {
    event.target.disabled = true;
    event.path[2].style.borderColor = '#e5e7eb';
  }

  addTask(): void {
    this.ids = this.ids + 1;
    this.tasks.push({
      id: this.ids,
      title: '',
      description: '',
      openAt: new Date().getHours() + ':' + new Date().getMinutes() + 'h',
    });
    console.log('Task added' + this.ids);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  ngOnInit(): void {}
}
