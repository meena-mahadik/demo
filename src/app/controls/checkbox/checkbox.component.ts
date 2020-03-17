import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  //checkboxStatusValue: boolean = false;

  checkbox = new FormControl();

  @Output()
  checkboxValue: EventEmitter<string>  = new EventEmitter<string>();

  checkboxStatus(event){
    console.log('check Event', event.checked);
   // this.checkboxValue.emit(event.target.value);
  }

  ngOnInit() {
  }

}
