import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable()
export class GetAnimalDataService implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }
  getAnimalList(){
    return this.httpClient.get('assets/indicators.json');
  }


}
