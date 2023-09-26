import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { TasksItemsComponent } from './modules/tasks-items/tasks-items.component';
import { AddButtonComponent } from './Shared/components/add-button/add-button.component';
import { TasksComponent } from './modules/tasks/tasks.component';
import { AddTaskItemComponent } from './modules/add-task-item/add-task-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksItemsComponent,
    AddButtonComponent,
    TasksComponent,
    AddTaskItemComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
