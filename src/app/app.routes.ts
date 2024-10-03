import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
export const routes: Routes = [
    { path: 'resume', component: ResumeComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project', component: ProjectComponent },
    { path: '', redirectTo: '/aboutme', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/aboutme' }  
  ];
  