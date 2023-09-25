import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskServicesService } from 'src/app/services/tasks/task-services.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css'],
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor(private tasksService: TaskServicesService) {}
  faTimes = faTrashCan;
  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }
  // onToggle(task: any) {
  //   this.onToggleReminder.emit(task);
  // }

  onToggle(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

}
