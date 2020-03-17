import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.css']
})
export class EventemitterComponent  {

  public randomNumber: number;

  public onNumberGenerated(randomNumber) {
    //this.randomNumber = randomNumber;
  }
}
