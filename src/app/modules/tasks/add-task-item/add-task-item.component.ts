import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UiServicesService } from 'src/app/services/ui-services/ui-services.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-task-item',
  templateUrl: './add-task-item.component.html',
  styleUrls: ['./add-task-item.component.css'],
})
export class AddTaskItemComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  Taskschedule!: string;
  reminder: boolean = false;
  showAddTasks: boolean = false;
  subscription!: Subscription;

  constructor(
    private uiService: UiServicesService,
    private toastr: ToastrService
    
    ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTasks = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      setTimeout(() => {
        this.toastr.warning('','Task Feilds Empty', {
          timeOut: 2000,
          closeButton: true,
        });
      });
     return;
    }

    const newTask = {
      text: this.text,
      day: this.Taskschedule,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.text = '';
    this.Taskschedule = '';
    this.reminder = false;
  }

}
