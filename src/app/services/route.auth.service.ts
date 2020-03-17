import {CanActivate} from "@angular/router";


export class RouteAuthService implements CanActivate {
  canActivate() {
    console.log("studentDataEditAuthGuard");
    return true;
  }
}
