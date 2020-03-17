import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent  {
  //inputFieldDefaultValue: string = 'Meena';

  userName = new FormControl();

  @Output()
  inputFieldValue: EventEmitter<string>  = new EventEmitter<string>();

  onkeyEnter(event){
    console.log('check Event', event.target.value);
    this.inputFieldValue.emit(event.target.value);
  }

  ngOnInit() {
   // console.log('userName dfdfdfdf', this.userName)
   /* this.locformdata = new FormGroup({
      studentName: new FormControl('Meena', [Validators.required])
    })*/
  }



}
