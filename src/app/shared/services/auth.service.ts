// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(this.authenticated);

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.authenticated;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    };

    this.http.post(`${environment.authEndPoint}`, data)
              .subscribe ( (userData: any) => {
                console.log('Response ', userData);
                localStorage.setItem('token', userData.token);

                this.authenticated = true;
                this.authenticated$.next(this.authenticated);
                
              });

  }

  logout() {
    localStorage.clear();
    this.authenticated = false;
    this.authenticated$.next(this.authenticated);
  }
}
