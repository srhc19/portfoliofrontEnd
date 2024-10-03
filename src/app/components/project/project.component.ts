import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(private route:Router){

  }
  contact(){
  this.route.navigate(['/contact'])
  }
  resume(){
  this.route.navigate(["/resume"])
  }
  aboutme(){
    this.route.navigate(["/aboutme"])
  }
}
