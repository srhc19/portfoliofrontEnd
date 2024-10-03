import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  private apiUrl = 'https://portfoliobackend-bahf.onrender.com//send-email'; 
  
  // http://localhost:3000/send-email
  constructor(private http:HttpClient,private fb: FormBuilder,private route:Router) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sendContactForm(this.contactForm.value).subscribe(
        (response:any )=> {
          this.contactForm.reset();
          console.log('Email sent successfully!', response);
          this.aboutme()
        },
        (error:any) => {
          this.contactForm.reset();
          console.error('Error sending email:', error);
          this.aboutme()
        }
      );
    }
  }




  sendContactForm(formData: any): Observable<any> {
   return this.http.post<any>(this.apiUrl, formData);
  }

  aboutme(){
  this.route.navigate(['/aboutme'])
  }
  resume(){
  this.route.navigate(["/resume"])
  }
  project(){
    this.route.navigate(["/project"])
  }
}
