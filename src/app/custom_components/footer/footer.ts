import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
username: string = 'Mr Lee';
githubUrl: string = "https://github.com/Leehon008";
linkedInUrl: string = "https://www.linkedin.com/in/lewis-honye-008/";
}
