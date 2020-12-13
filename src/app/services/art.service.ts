import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private baseUrl = 'http://localhost:8080/frite20/api/v1/arts';

  constructor(private http: HttpClient) {
  }

  getArt(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createArt(art: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, art);
  }


  updateArt(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArt(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getArtsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
