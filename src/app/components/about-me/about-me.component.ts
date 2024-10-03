import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
constructor(private route:Router){

}
contact(){
this.route.navigate(['/contact'])
}
resume(){
this.route.navigate(["/resume"])
}
project(){
  this.route.navigate(["/project"])
}
}
