import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutMeComponent,ContactComponent,ProjectComponent,ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'protfolioSite';
}
