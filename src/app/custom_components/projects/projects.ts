import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  title: string = 'Projects Portfolio';
  description: string = 'This showcases my developed projects.'

  portfolios: any = [
    {
      imgUrl: "assets/img/portfolio/portfolio-1.webp",
      dataGallery: "portfolio-gallery-web",
      nextlink: "portfolio-details.html",
      projectTitle: "Web Design",
      projectSubtitle: "Modern Dashboard Interface",
      projectText: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
    },
    {
      imgUrl: "assets/img/portfolio/portfolio-10.webp",
      dataGallery: "portfolio-gallery-graphics",
      nextlink: "portfolio-details.html",
      projectTitle: "Graphics",
      projectSubtitle: "Creative Brand Identity",
      projectText: "Vestibulum id ligula porta felis euismod semper at vulputate.",
    },
    {
      imgUrl: "assets/img/portfolio/portfolio-7.webp",
      dataGallery: "portfolio-gallery-motion",
      nextlink: "portfolio-details.html",
      projectTitle: "Motion",
      projectSubtitle: "Product Animation Reel",
      projectText: "Donec ullamcorper nulla non metus auctor fringilla dapibus.",
    },
    {
      imgUrl: "assets/img/portfolio/portfolio-4.webp",
      dataGallery: "portfolio-gallery-brand",
      nextlink: "portfolio-details.html",
      projectTitle: "Branding",
      projectSubtitle: "Luxury Brand Package",
      projectText: "Aenean lacinia bibendum nulla sed consectetur elit.",
    },
    {
      imgUrl: "assets/img/portfolio/portfolio-2.webp",
      dataGallery: "portfolio-gallery-web",
      nextlink: "portfolio-details.html",
      projectTitle: "Web Design",
      projectSubtitle: "E-commerce Platform",
      projectText: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
      imgUrl: "assets/img/portfolio/portfolio-11.webp",
      dataGallery: "portfolio-gallery-graphics",
      nextlink: "portfolio-details.html",
      projectTitle: "Graphics",
      projectSubtitle: "Digital Art Collection",
      projectText: "Cras mattis consectetur purus sit amet fermentum.",
    }
  ];

}
