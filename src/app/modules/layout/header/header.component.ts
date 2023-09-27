import { Component } from '@angular/core';
import { UiServicesService } from 'src/app/services/ui-services/ui-services.service';
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showAddTasks: boolean = false;
  subscription!: Subscription;

  constructor(
    private uiService: UiServicesService,
    private router:Router
  ){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTasks = value )) ;
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
