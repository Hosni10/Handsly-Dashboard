import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private siginUrl = 'http://localhost:8000/api/v1/auth/login';
  private signupUrl = 'http://localhost:8000/api/v1/auth/signup';


  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post<any>(this.siginUrl, { email, password });
  }

  signup(user: User) {
    return this.http.post<any>(this.signupUrl, { user });
  }
}
