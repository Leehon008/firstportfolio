import { Component } from '@angular/core';
import { LinkButton } from '../link-button/link-button';

@Component({
  selector: 'app-hero',
  imports: [
    LinkButton
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
title: string = 'Crafting Digital Experiences with Passion in Security';
description = 'Transforming ideas into elegant solutions through creative design and innovative development'

statItems:any =[
  {
    years: '5+',
    title : 'Years Experience'
  },
  {
    years: '100+',
    title : 'Projects Completed'
  },
  {
    years: '15+',
    title : 'Happy Clients'
  }  
]

profileImage = "assets/img/profile/profile-office.png"
}
