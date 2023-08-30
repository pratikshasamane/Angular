import { Injectable } from '@angular/core';
import { Notes } from '../notes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotesServicesService {
  public note: Notes;
  public baseUrl: string = 'http://localhost:8010/api/';
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

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
