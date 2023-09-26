import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task-item',
  templateUrl: './add-task-item.component.html',
  styleUrls: ['./add-task-item.component.css']
})
export class AddTaskItemComponent {
 
  text!: string;
  Taskschedule!: string;
  reminder: boolean = false;


}
