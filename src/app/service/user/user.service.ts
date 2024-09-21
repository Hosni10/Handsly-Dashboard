import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private updateUrl = 'http://localhost:8000/api/v1/users/updateMe';
  private deleteUrl = 'http://localhost:8000/api/v1/users/deleteMe';
  user: User
  constructor(private http: HttpClient) {}
  
  

  updateUser():Observable<User> {
    return this.http.patch<User>(this.updateUrl,JSON.stringify(this.user))
  }

  deleteUser():Observable<any> {
    return this.http.delete<any>(this.deleteUrl);
  }
  
}
