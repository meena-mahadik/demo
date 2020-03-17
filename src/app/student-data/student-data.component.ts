import {Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import {StudentDataService} from "../student-form/student-data.service";
import {MatDialog} from "@angular/material";
import {StudentDataEditComponent} from "../student-data-edit/student-data-edit.component";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  public data;
  numbers: number;

  constructor(private _router: Router,
              private studentDataService: StudentDataService,
              public dialog: MatDialog,
              private changeDetectorRef: ChangeDetectorRef) {
    this.data = studentDataService.getOption();

    console.log(this.data);
  }

  openDialog(abc: any, i) {
    if (abc.adminPermission === true) {
      const dialogRef = this.dialog.open(StudentDataEditComponent, {
        width: '500px',
        data: {
          data: this.data[i],
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed' + result);
        if (result) {
          this.data[i] = result;
        }
      });
    }
  }

  ngOnInit() {
  }

  deleteRow(rowNumber: number) {
    this.data.splice(rowNumber, 1);
  }

  gotoReport(student: any) {
    this.studentDataService.setAdmin(student.adminPermission);
    this._router.navigate(['/report']);
  }

}

