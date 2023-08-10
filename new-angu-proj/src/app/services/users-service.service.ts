import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private user: Users;
  private baseUrl: string = 'http://localhost:8005/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  createUser(user: Users): Observable<any> {
    return this.http.post(this.baseUrl, user, { headers: this.headers });
  }
  getUser() {
    return this.http.get(this.baseUrl, { headers: this.headers });
  }

  getUserById(id: number) {
    return this.http.get<Users>(`${this.baseUrl}/getUserById/${id}`);
  }

  updateUser(user: Users) {
    return this.http.put(this.baseUrl + '/updateUser/' + user._id, user, {
      headers: this.headers,
    });
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/deleteUser/' + id, {
      headers: this.headers,
    });
  }

  setter(user: Users) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}
