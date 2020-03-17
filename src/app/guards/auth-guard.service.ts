//import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentDataService } from "../student-form/student-data.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    //private _authService: AuthService,
    private studentDataService: StudentDataService,
    private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     if (this.studentDataService.getAdmin()) {
       return true;
     }

    // navigate to login page
    this._router.navigate(['/pagenotfound']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
