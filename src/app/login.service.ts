import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/user'
  httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  login(email, password) {
    const body = {
      email: email,
      password: password
    }
    return this.httpClient.post(this.url + '/signin', body)
  }
}
