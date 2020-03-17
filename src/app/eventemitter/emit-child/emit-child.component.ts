import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css']
})
export class EmitChildComponent {

 // @Output() private numberGenerated = new EventEmitter<number>();

  generateNumber(){
   /* const randomNumber = Math.random();
    this.numberGenerated.emit(randomNumber);
    console.log('clicked me')*/
  }

}
