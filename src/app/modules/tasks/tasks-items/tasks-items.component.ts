import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskServicesService } from 'src/app/services/tasks/task-services.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['../task-style/styles.css', './tasks-items.component.css'],
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor(
    private tasksService: TaskServicesService,
    private toastr: ToastrService
  ) {}
  faTimes = faTrashCan;
  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  onToggle(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  onDelete(task: Task): void {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id! === task.id);
      setTimeout(() => {
        this.toastr.success('','Task Deleted Successfully', {
          timeOut: 2000,
          closeButton: true,
        });
       this.getTasks();
      },500);
    });
  }

  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((task) =>  
    this.tasks.push(task));
    setTimeout(() => {
      this.toastr.success('','Task Add Successfully', {
        timeOut: 2000,
        closeButton: true,
      });
    });
  }
}
