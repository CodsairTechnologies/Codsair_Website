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
  { name: 'React JS', img: 'assets/images/technology1.png', desc: 'A JavaScript library UI' },
  { name: 'Node JS', img: 'assets/images/technology2.png', desc: 'Server-side JS runtime' },
  { name: 'Angular', img: 'assets/images/technology5.png', desc: 'Frontend framework' },
  { name: 'MERN Stack', img: 'assets/images/technology4.png', desc: 'Modern JS stack' },
  { name: 'MEAN Stack', img: 'assets/images/technology3.png', desc: 'Full JS framework' }
];

mobileTechnologies = [
  { name: 'Flutter', img: 'assets/images/technology6.png', desc: 'Cross-platform toolkit' },
  { name: 'React Native', img: 'assets/images/technology7.png', desc: 'React for mobile' },
  { name: 'Swift', img: 'assets/images/technology8.png', desc: 'Native iOS language' },
  { name: 'Kotlin', img: 'assets/images/technology1.png', desc: 'Android language' },
  { name: 'Ionic', img: 'assets/images/technology2.png', desc: 'Hybrid mob framework' }
];


switchTab(tab: string): void {
    this.activetechTab = tab;
  }
  
}