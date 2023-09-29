import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksItemsComponent } from './tasks-items.component';

describe('TasksItemsComponent', () => {
  let component: TasksItemsComponent;
  let fixture: ComponentFixture<TasksItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksItemsComponent]
    });
    fixture = TestBed.createComponent(TasksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
