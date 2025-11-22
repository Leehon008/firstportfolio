import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: any[] = [
    {
      title: 'HTML',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      percent: '90%',
      barLevel:"90"
    },
    {
      title: 'CSS',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
      percent: '70%',
      barLevel:"70"
    },
    {
      title: 'JavaScript',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor.',
      percent: '80%',
      barLevel:"80"
    },
    {
      title: 'Photoshop',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      percent: '60%',
      barLevel:"60"
    }               
  ];

}
