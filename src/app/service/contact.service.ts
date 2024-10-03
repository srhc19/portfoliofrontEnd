import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/send-email'; 

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
