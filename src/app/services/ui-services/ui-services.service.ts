import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiServicesService {
  private showAddTasks: boolean = false;
  private subject = new Subject<any>();
  // subscription: Subscription;

  // constructor(
  //   private uiService: UiServicesService
  // ) {
  //   this.subscription = this.uiService
  //   .onToggle()
  //   .subscribe((value) => (this.showAddTasks = value )) ; 
  // }

  toggleAddTask() {
    this.showAddTasks = !this.showAddTasks;
    this.subject.next(this.showAddTasks);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
