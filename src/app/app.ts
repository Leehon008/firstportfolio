import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./custom_components/footer/footer";
import { Header } from './custom_components/header/header';
import { About } from './custom_components/about/about';
import { Hero } from './custom_components/hero/hero';
import { LinkButton } from './custom_components/link-button/link-button';
import { Skills } from "./custom_components/skills/skills";
import { Resume } from "./custom_components/resume/resume";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Footer,
    Header,
    About,
    Hero,
    Skills, 
    Resume
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('firstportfolio');
}
