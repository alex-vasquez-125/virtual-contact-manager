import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseResultDialogComponent } from './database-result-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DatabaseResultDialogComponent', () => {
  let component: DatabaseResultDialogComponent;
  let fixture: ComponentFixture<DatabaseResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseResultDialogComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {},
        },
        {
          provide: MatDialogRef, useValue: {}
        }
      ]
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
