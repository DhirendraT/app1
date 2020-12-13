import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginService: LoginService

  email = ''
  password = ''

  constructor(loginService: LoginService) {
    this.loginService = loginService
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginService.login(this.email, this.password).subscribe(response => {
      if (response['status'] == 'success') {
        console.log(response['data'])
        alert('Login Successfully')
      } else {
        console.log(response['error'])
      }
    })
  }

  onCancel() { }

}
