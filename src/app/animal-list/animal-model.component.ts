import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-animal-model',
  templateUrl: './animal-model.component.html',
  //styleUrls: ['./animal-model.component.css']
})
export class AnimalModelComponent implements OnInit {

  animalData = [];
  domainStatus: boolean = false;
  selectAll: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public zx: any) {

  }

  ngOnInit() {
    this.getDomainWithDefaultCheck(this.zx, false);
    this.animalData = this.zx
  }

  checkedAll(event) {
    this.getDomainWithDefaultCheck(this.zx, event.checked);
    /*  if (this.zx !== null) {
        this.zx.forEach(object =>
          this.selectAll = true
        )
      }*/
  }


  domainSelection(animalLists, event) {
    this.setAllCheckboxChecked(animalLists, event.checked);
    if (event.checked === false) {
      this.selectAll = false;
    }
    console.log('animalLists', animalLists);
    console.log('Checkbox Event', event);

  }

  focusAreaSelection(focusArea, event) {
    console.log('animalLists', focusArea);
    console.log('Checkbox Event', event);
    this.getDomainWithDefaultCheck(focusArea, event.checked);
    if (event.checked === false) {
      this.selectAll = false;
    }
  }


  getDomainWithDefaultCheck(list, isChecked) {
    if (list !== null) {
      list.forEach((object1) => {
        object1['isChecked'] = isChecked;
        if (object1.focusAreasDto !== null) {
          object1.focusAreasDto.forEach((object2) => {
            object2['isChecked'] = isChecked;
            if (object2.indicatorDtos !== null) {
              object2.indicatorDtos.forEach((object3) => {
                object3['isChecked'] = isChecked;
              })
            }
          })
        }
      })
    }
  }

  setAllCheckboxChecked(list, isChecked) {
    if (list !== null) {
      if (list.focusAreasDto !== null) {
        list.focusAreasDto.forEach((object) => {
            object['isChecked'] = isChecked;
            if (object.indicatorDtos !== null) {
              object.indicatorDtos.forEach((object) => {
                object['isChecked'] = isChecked;
              })
            }

          }
        )
      }
    }
  }


  secondLevelChecked(animalLists, focusArea, event) {
    console.log('Second level Checked Object', focusArea);
    if (animalLists.focusAreasDto.every(this.checkValue)) {
      animalLists['isChecked'] = true;
    }
    else {
      animalLists['isChecked'] = false;
    }
    this.checkIndicatorsDto(focusArea, event.checked);
  }

  thirdLevelChecked(animalLists, focusArea) {
    // console.log('Third level Checked' , list)
    if (focusArea.indicatorDtos.every(this.checkValue)) {
      focusArea['isChecked'] = true;
      if (animalLists.focusAreasDto.every(this.checkValue)) {
        animalLists['isChecked'] = true;
      }
    }
    else {
      focusArea['isChecked'] = false;
      animalLists['isChecked'] = false;
      this.selectAll = false;
    }


  }

  checkIndicatorsDto(focusArea, isChecked) {
    if (focusArea.indicatorDtos !== null) {
      focusArea.indicatorDtos.forEach((indicators) => {
        indicators['isChecked'] = isChecked;
      })
    }

  }


  checkValue(obj) {
    return obj['isChecked'] === true;
  }



  /*  (list, event ){
      if (list.focusAreasDto !== null) {
        this.focusAreasDto.forEach((object2, object2Index) => {
          if (object2['isChecked'] == event.checked) {
            list.object1.forEach((object1, object1Index) => {
              object1['isChecked'] = event.checked;
              object2.indicatorDtos.forEach((object3, object3Index) => {
                object3['isChecked'] = event.checked;
              })
            })
          }
        })
      }
    }*/

}
