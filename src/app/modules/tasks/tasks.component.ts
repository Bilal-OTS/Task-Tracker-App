import { Component, OnInit } from '@angular/core';
// import { TaskServicesService } from 'src/app/services/tasks/task-services.service';
// import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // tasks: Task[] = [];

  // constructor(private tasksService: TaskServicesService) {}

  ngOnInit(): void {
    // this.getTasks();
  }
  // getTasks() {
  //   this.tasksService.getTask().subscribe((tasks) => (this.tasks = tasks));
  // }

  // deleteTask(task: Task): void {
  //   this.tasksService
  //     .deleteTask(task)
  //     .subscribe(
  //       () => (this.tasks = this.tasks.filter((t) => t.id! === task.id))
  //     );
  //   setTimeout(() => {
  //     this.getTasks();
  //   });
  // }

  // toggleReminder(task: Task) {
  //   task.reminder = !task.reminder;
  //   this.tasksService.updateTaskReminder(task).subscribe();
  // }
}
