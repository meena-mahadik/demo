import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from "./enrollment.service";
import {enrollmentUrl} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})


export class EnrollmentsComponent implements OnInit {
  enrollmentData: string;
  userList: string;
  getValue: string;
  foods = [];
  foodLength: string;
  constructor(private enrollmentService: EnrollmentService,
              private route: ActivatedRoute,) {
    this.foods =  [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    console.log()
  }

  selectedValue(selectValue){
    this.getValue = selectValue.value;
    //this.foodLength = this.getValue.length;
    console.log('select Value' ,  this.getValue.length);

  }



  ngOnInit() {
    this.getEnrollmentList();
    this.getUserData();
    console.log('QueryParam' ,  this.route.snapshot.queryParams);
    console.log('fragment', this.route.snapshot.fragment);
  }

  getEnrollmentList() {
    this.enrollmentService.enrollmentList()
      .subscribe(data => {
      //if (data.code === 200) {
        this.enrollmentData = data.data;
        console.log('enrollment data', data);
     // }
    });
  }
  getUserData(){
    this.enrollmentService.userList()
      .subscribe(data => {
        //  if (data.code === 200) {
        this.userList = data.data;
        console.log('UserList data', this.userList);
        //  }
      });
  }
}
