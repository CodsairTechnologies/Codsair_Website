import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  activeTab: string = 'mobile';


  mobileProjects = [
    {
      title: 'Codspropay',
      desc: 'Smart payroll & employee management system.',
      img: 'assets/images/product1.jpg'
    },
    {
      title: 'Codscare',
      desc: 'Healthcare management simplified.',
      img: 'assets/images/product2.jpg'
    },
    {
      title: 'Codsbill',
      desc: 'Mobile-first solutions for modern businesses.',
      img: 'assets/images/product5.jpg'
    },
    {
      title: 'Codspoint',
      desc: 'Seamless mobile connectivity and integration.',
      img: 'assets/images/product3.jpg'
    }
  ];

  webProjects = [
    {
      title: 'Codscare web',
      desc: 'Smart business analytics & dashboards.',
      img: 'assets/images/product3.jpg'
    },
    {
      title: 'Codspropay Web',
      desc: 'Secure payments with real-time reports.',
      img: 'assets/images/product4.jpg'
    },
    {
      title: 'Codscommerce',
      desc: 'E-commerce platform with advanced features.',
      img: 'assets/images/product5.jpg'
    },
    {
      title: 'Codsadmin',
      desc: 'Powerful admin dashboards for enterprises.',
      img: 'assets/images/product1.jpg'
    }
  ];

  activetechTab: string = 'web';

  webTechnologies = [
    { name: 'React JS', img: 'assets/images/technology8.webp', desc: 'A JavaScript library UI' },
    { name: 'Node JS', img: 'assets/images/technology9.webp', desc: 'Server-side JS runtime' },
    { name: 'Angular', img: 'assets/images/technology7.webp', desc: 'Frontend framework' },
    { name: 'Python', img: 'assets/images/technology6.webp', desc: 'Versatile language for web apps' },
    { name: 'PHP', img: 'assets/images/technology10.webp', desc: 'Server-side scripting for websites' }

  ];

  mobileTechnologies = [
    { name: 'Flutter', img: 'assets/images/technology5.webp', desc: 'Cross-platform toolkit' },
    { name: 'React Native', img: 'assets/images/technology11.webp', desc: 'React for mobile' },
    { name: 'Swift', img: 'assets/images/technology8.webp', desc: 'Native iOS language' },
    { name: 'Kotlin', img: 'assets/images/technology1.webp', desc: 'Android language' },
    { name: 'Ionic', img: 'assets/images/technology2.webp', desc: 'Hybrid mob framework' }
  ];


  switchTab(tab: string): void {
    this.activetechTab = tab;
  }

}