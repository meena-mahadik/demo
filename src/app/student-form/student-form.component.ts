import {Component, OnInit} from '@angular/core';
import {StudentInfo} from "./student-info.model";
import {StudentDataService} from './student-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators, FormBuilder, AbstractControl} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
import {Observable, of} from "rxjs/index";
import { HttpClient } from '@angular/common/http';

import { interval } from 'rxjs';

declare const google: any;
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentInfo: StudentInfo;
  locformdata: FormGroup;
  submitted = false;
  checked: boolean;
  name = new FormControl('');

  lat:number;
  lng:number;
  private geocoder: any;
  fullAddress: string;
  tooltipStatus: boolean = false;
  cityName: string;
  inputFieldValue: string;

  cities: any;

  selectedMarker;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.7036818, lng: 75.8443093, alpha: 1 },
    { lat: 22.33159, lng: 105.63233, alpha: 0.8 },
    { lat: 7.92658, lng: -12.05228, alpha: 0.8 },
    { lat: 48.75606, lng: -118.859, alpha: 0.8 },
    { lat: 5.19334, lng: -67.03352, alpha: 0.8 },
    { lat: 12.09407, lng: 26.31618, alpha: 0.8 },
    { lat: 47.92393, lng: 78.58339, alpha: 0.8 }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  /*max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }*/

  showAddress(marker) {
    this.lat = marker.lat;
    this.lng = marker.lng;
   // if(this.tooltipStatus  === false){
   //   this.tooltipStatus  = true;
   //   console.log(this.tooltipStatus);
   // }
   // else {
   //   this.tooltipStatus = false;
   //   console.log(this.tooltipStatus);
   // }

    this.geocoder.geocode({'location': {lat: marker.lat, lng: marker.lng}}, (results, status) => {
      this.fullAddress = results[0].formatted_address;
      console.log(results); // read data from here
      console.log(status);
    });
  };



  constructor(private httpClient : HttpClient,
              private route : ActivatedRoute,
              private router: Router,
              private studentDataService: StudentDataService,
              private fb: FormBuilder,
              private mapsAPILoader: MapsAPILoader) {
    console.log(name);

    // studentDataService.setOption('studentName', this.studentInfo.studentName);

    this.geocoder = new google.maps.Geocoder();
      //const latlng = {lat: 22.7036818, lng: 75.8443093};


  }



  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;


      });
    }

  }

  ngOnInit() {
    const myNumbers = interval(500);
    myNumbers.subscribe((number:Number) => {
      // console.log(number);
    });


    console.log('Ankit')

    this.studentDataService.getCityList()
      .subscribe(response => {
          console.log(response);
          this.cities = response;
        },
        error => {
          console.log(error);
        }
      );


    /*GEt data from PPS App API*/
    /*this.studentDataService.getCityList()
      .subscribe(response => {
          console.log(response);
          this.cities = response.data;
        },
        error => {
          console.log(error);
        }
      );*/
    this.getUserLocation();
    this.locformdata = new FormGroup({
      studentName: new FormControl(null,[Validators.required]),
      adminPermission: new FormControl(false),
  /*    studentAge: new FormControl(null, [ageRangeValidator]),
      //studentID: new FormControl(null, [Validators.required]),
      //studentID: new FormControl(null, [Validators.required]),
      studentGender: new FormControl(null),
      studentEmail: new FormControl(null, [Validators.required, Validators.email]),
      studentPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),

      studentCity: new FormControl(null),*/



      // studentName: new FormControl('Meena'),
      // studentAge: new FormControl(27),
      // //studentID: new FormControl(null, [Validators.required]),
      // studentGender: new FormControl('Female'),
      // studentEmail: new FormControl('meena.mahadik@diaspark.com'),
      // studentPassword: new FormControl('123455'),
      // adminPermission: new FormControl(false),
    });
    console.log('form data' , this.locformdata.value);

    function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        //return { 'ageRange': true };
      }
      return null;
    }
  }

  get formData() {
    return this.locformdata.value.studentName;

  }

  changeData(inputValue){ 
    console.log('input', inputValue );
    this.locformdata.value.studentName = inputValue
  }

/*  saveCity(username){
  return this.studentDataService.postCityNameInJson()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }*/

  saveStudentData() {
    //console.warn(this.locformdata.value);
    //this.router.navigate(['./studentdata']);
    if(this.locformdata.status === 'VALID'){
      this.submitted = true;
      this.studentDataService.setOption(this.locformdata.value);
      this.router.navigate(['/formData']);
    }
  }

  onSubmit() {
    this.locformdata.reset();
  }

  checkCheckBoxvalue(event){
  //this.checked = event.checked ? true : false;
    console.log("ckeckbox Value", this.checked);
  }

  dispalyCounter(count){
    //console.log(count);
  }

  reloadPage(){
    this.router.navigate(['/report'] , {relativeTo: this.route});
    //console.log(this.router.navigate(['/report'])
  }
}
