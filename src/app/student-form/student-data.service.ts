import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentDataService implements OnInit {
  //apiURL: string = '../../assets/cities';

  private cityList  = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    //return this.httpClient.get('assets/cities.json');
  }
  getCityList() {
    /*Data coming from json*/
    return this.httpClient.get('assets/cities.json');

    /*Data coming from PPS App API with token*/
   /* return this.httpClient.get<any>('http://192.168.99.151:9091/pps/providers/states/35/cities',  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'ZTmM2vp3zQlO9PrcBGShk='
      })
    })*/
  }

/*  postCityNameInJson(username){
    return this.httpClient.post<any>('http://192.168.99.151:9091/pps/users', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'ZTmM2vp3zQlO9PrcBGShk='
      })
    })
  }*/

  StudentDataArray=[];

  cityNameArray=[];

  private isAdmin = false;

  private data = [];

  setOption( value) {
    this.data.push(value);
  }

  getOption() {
    return this.data;
  }

  setAdmin( value) {
    this.isAdmin = (value);
  }

  getAdmin() {
    return this.isAdmin;
  }
}
