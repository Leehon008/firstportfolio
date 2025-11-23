import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  linkedInurl: string = "https://www.linkedin.com/in/lewis-honye-008/";
  githubUrl: string = "https://github.com/Leehon008"
  user: string = "Lewis Honye"

 menuItems: any[] = [
  {
    text: 'Home',
    link: '#hero',
    active: true  
  },
  {
    text: 'About',
    link: '#about',
    active: false
  },
  {
    text: 'Resume',
    link: '#resume',
    active: false
  },
  {
    text: 'Portfolio',
    link: '#portfolio',
    active: false
  },
  {
    text: 'Services',
    link: '#services',
    active: false
  },
  {
    text: 'Contact',
    link: '#contact',
    active: false
  }
];
// Automatically set the active menu based on the current location/hash
  setActiveMenu(): void {
    const currentHash = window.location.hash|| '#hero';  // Get the current URL hash (e.g., '#about')
    this.menuItems.forEach(item => {
      item.active = item.link === currentHash;  // Set active based on the current hash
    });
  }

  ngOnInit() {
    this.setActiveMenu();  // Set the active menu when the component is initialized
  }

  ngAfterViewChecked() {
    this.setActiveMenu();  // Ensure the active class is updated if the hash changes
  }
}
