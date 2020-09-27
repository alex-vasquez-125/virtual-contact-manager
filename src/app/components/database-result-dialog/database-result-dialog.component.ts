import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatabaseResult } from '../../pojos/database-result';

@Component({
  selector: 'app-database-result-dialog',
  templateUrl: './database-result-dialog.component.html',
  styleUrls: ['./database-result-dialog.component.css']
})
export class DatabaseResultDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DatabaseResult,
    public databaseResultDialogRef: MatDialogRef<DatabaseResultDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.databaseResultDialogRef.close('');
  }
}
