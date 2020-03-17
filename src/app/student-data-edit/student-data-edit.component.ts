import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentInfo} from "../student-form/student-info.model";
import {falseIfMissing} from "protractor/built/util";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-data-edit',
  templateUrl: './student-data-edit.component.html',
  styleUrls: ['./student-data-edit.component.css']
})
export class StudentDataEditComponent{

  //private dialogRef: any;
  newStudent : StudentInfo;
  constructor(
    private router : Router,
    private route : ActivatedRoute,
    public dialogRef: MatDialogRef<StudentDataEditComponent>,
    @Inject(MAT_DIALOG_DATA) private xyz: any) {
    this.newStudent = JSON.parse(JSON.stringify(xyz));
  }

  ngOnInit() {
    console.log(this.xyz);
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.newStudent);
  }

}
