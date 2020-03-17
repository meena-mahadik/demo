import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AnimalInfo} from "./animal-model";
import {AnimalModelComponent} from "./animal-model.component";
import {HttpClient} from "@angular/common/http";
import {GetAnimalDataService} from "./get-animal-data.service";


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalInfo: AnimalInfo;
  animal: string;
  name: string;
  data = [];

  constructor(public dialog: MatDialog, private httpClient: HttpClient, private getAnimalDataService: GetAnimalDataService) {
    this.animalInfo = new AnimalInfo()
  }

  ngOnInit() {
    this.getAnimalDataService.getAnimalList().subscribe(dataList =>{
      this.data = dataList['data'];
      console.log(this.data);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalModelComponent,  {
      width: '500px',
      height: '500px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}
