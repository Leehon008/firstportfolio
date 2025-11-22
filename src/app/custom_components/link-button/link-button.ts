import { Component } from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss',
})
export class LinkButton {
itemLinks: any[] = [
  {
    btnHref: "#portfolio",
    btnClass: "btn btn-primary",
    btnText: "View My Work"
  },
  {
    btnHref: "#contact",
    btnClass: "btn btn-outline",
    btnText: "Let's Connect"
  }, 
]
}
