import { Injectable } from '@angular/core';
import { Notes, TokenPayload } from '../notes';
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

  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  private accessToken = '';

  // baseurl, data to be passed, header
  // loginNotes(credentials: ValidationModel): Observable<any> {
  //   return this.http.post(this.regis + 'validate/login', credentials, {
  //     withCredentials: true,
  //   });
  // }

  login(email: string, password: string) {
    return this.http
      .post<any>(this.regis + 'validate/login', {
        email: email,
        password: password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          console.log('im presetn in login');

          console.log(user.accessToken);
          if (user || user.accesstoken) {
            console.log('came here');

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('accessToken', JSON.stringify(user));
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
  }

  register(registerData: ValidationModel): Observable<any> {
    return this.http.post(this.regis + 'validate/register', registerData);
  }

  registerNotes(registerData: ValidationModel): Observable<any> {
    return this.http.post(this.regis + 'validate/register', registerData, {
      withCredentials: true,
    });
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
