import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseResultDialogComponent } from './database-result-dialog.component';

describe('DatabaseResultDialogComponent', () => {
  let component: DatabaseResultDialogComponent;
  let fixture: ComponentFixture<DatabaseResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
