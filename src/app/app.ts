import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./custom_components/footer/footer";
import { Header } from './custom_components/header/header';
import { About } from './custom_components/about/about';
import { Hero } from './custom_components/hero/hero';
import { Skills } from "./custom_components/skills/skills";
import { Resume } from "./custom_components/resume/resume";
import { Projects } from './custom_components/projects/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    Footer,
    Header,
    About,
    Hero,
    Skills, 
    Resume,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('firstportfolio');
}
