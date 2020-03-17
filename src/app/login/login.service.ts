

import {Observable} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseURL} from "../../environments/environment";
import {ResponseEntity} from "./responseEntityModel";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {



  constructor(private httpClient : HttpClient){

  }
 /* userLogin() {
    return this.networkService.authentication(url.login, loginRequest);
  }*/

    public authentication(endPoint, data): Observable<ResponseEntity> {

    // userdetail['password'] = window.btoa(data['password']);
    return this.httpClient.post<any>(BaseURL + endPoint, data, {
        headers: new HttpHeaders({
          'X-TenantID': 'dev2',
          'X-Origin':'http://localhost:3000' ,
          //'X-TZone': '-330',
          'Content-Type': 'application/json',
        })
      })
  }
}
