import { Injectable } from '@angular/core';
import { Notes } from '../notes';
import { ValidationModel } from '../validation-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NotesServicesService {
  public note: Notes;
  public baseUrl: string = 'http://localhost:8010/api/';
  public regis: string = 'http://localhost:8010/';

  token: string = JSON.parse(localStorage.getItem('accessToken'));

  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private router: Router) {}

  // Login
  login(email: string, password: string) {
    return this.http
      .post<any>(this.regis + 'validate/login', {
        email: email,
        password: password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response

          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              'accessToken',
              JSON.stringify(user.accessToken)
            );
          }

          return user;
        })
      );
  }

  //Register
  register(registerData: ValidationModel): Observable<any> {
    return this.http.post(this.regis + 'validate/register', registerData);
  }

  getUser() {
    return this.http.get(this.regis + 'validate/current', {
      headers: this.headers,
    });
  }

  //baseurl, header
  getNotes() {
    return this.http.get(this.baseUrl, { headers: this.headers });
  }

  // baseurl, data to be passed, header
  createNotes(note: Notes): Observable<any> {
    return this.http.post(this.baseUrl + 'create', note, {
      headers: this.headers,
    });
  }

  updateNotes(note: Notes): Observable<any> {
    return this.http.put(this.baseUrl + 'update/' + note._id, note, {
      headers: this.headers,
    });
  }

  getNoteById(id: number) {
    return this.http.get(this.baseUrl + 'getById/' + id, {
      headers: this.headers,
    });
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'delete/' + id, {
      headers: this.headers,
    });
  }
}
