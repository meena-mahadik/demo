import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseURL, enrollmentUrl, usersUrl} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {ResponseEntity} from "../login/responseEntityModel";
@Injectable()
export class EnrollmentService {
  constructor(private httpClient : HttpClient){

  }
  enrollmentList(): Observable<ResponseEntity>{
    //return this.networkService.request(methodType.get, `${url.enrollments}?isHome=true&offset=${offset}&pageSize=${pageSize}`, '', showLoader);
    return this.httpClient.get<any>(BaseURL + enrollmentUrl, {
      headers: new HttpHeaders({
        //'X-TenantID': 'clv',
        'X-Origin':'http://localhost:3000' ,
        'X-TZone': '-330',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('Item 1'),
      })
    })
  }

  userList():Observable<ResponseEntity> {
    {
      return this.httpClient.get<any>(BaseURL + usersUrl, {
        headers: new HttpHeaders({
          //'X-TenantID': 'clv',
          'X-Origin': 'http://localhost:3000',
          'X-TZone': '-330',
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('Item 1'),
        })
      })

      /*  .map(){

    }*/
    }
  }
}
