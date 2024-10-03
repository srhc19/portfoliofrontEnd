import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private route:Router){

  }
  contact(){
  this.route.navigate(['/contact'])
  }
  aboutme(){
  this.route.navigate(["/aboutme"])
  }
  project(){
    this.route.navigate(["/project"])
  }
}
