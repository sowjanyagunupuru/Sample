
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {}
  private isLoggedIn: boolean = false;
  private selector = 'globalLoader';//for loading

  private getElement() {
    return this.document.getElementById(this.selector);
  }

  hide() {
    const el = this.getElement();
    if (el) {
      if (!el.classList.contains('global-loader-hidden')) {
        el.className += ' global-loader-fade-in';
      }
    }
  }


  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`/PennantApI/login`, body);
  }
 
  register(user : UserService): Observable<any> {
    const body = { name: user.name,
      username: user.username,
      contact: user.contact,
      email: user.email,
      password: user.password,
      gender: user.gender,
      active: 1,
      userid:0
    };
    return this.http.post(`/PennantApI/registerPartner`, body, {responseType: 'text'});
  }

  setAuthLogin(islog: boolean): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.isLoggedIn = islog;
      // console.log('Current login status in service to set is :', this.isLoggedIn); // true
      resolve(this.isLoggedIn);
    });
  }

  getIsLoggedIn(): boolean {
    // console.log('Current login status in service to fetch is :', this.isLoggedIn); // true/false
    return this.isLoggedIn;
  }

  logout(): void {
    // Clear the token from local storage
    localStorage.removeItem('token');
  }

  getAuthToken(): string | null {
    // Get the authentication token from local storage
    return localStorage.getItem('token');
  }
}
