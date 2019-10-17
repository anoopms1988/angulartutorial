import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username;
  password;
  ngOnInit() {}
  constructor(private authService: AuthService) {}
  login(formValues) {
    console.log('test');
    console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
