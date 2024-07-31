import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?page=${page}`);
  }

  getUserDetails(userId: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }
}
