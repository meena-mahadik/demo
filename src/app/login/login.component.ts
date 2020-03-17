import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tokenStore : string;

  constructor(private  loginService: LoginService, private _router: Router,) {
  }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log('Form', this.form);
    let loginRequest: {
      aaa: string;
      bbb: string;
    };



    loginRequest = this.form.value;
    this.loginService.authentication('http://192.168.97.82:9091/pps/homes/help', loginRequest)
      .subscribe(data => {
          if (data.code === 200) {
            console.log('login', data.data);
           let key = 'Item 1';
            let value = data.data.token;
            sessionStorage.setItem(key, value);
            console.log('token number', sessionStorage.getItem(key));
            this._router.navigate(['/enrollments']);
          }

        },
        (error) => {
          //this.utility.handleErrorResponse(error);
          console.log('error', error);
        });

  }
}
