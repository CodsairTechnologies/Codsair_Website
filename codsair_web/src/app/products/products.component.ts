import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(public languageService: LanguageService) {}

  activeTab: string = 'mobile';

  mobileProjects = [
    {
      titleKey: 'mobile.codspropay.title',
      descKey: 'mobile.codspropay.desc',
      img: 'assets/images/product1.jpg'
    },
    {
      titleKey: 'mobile.codscare.title',
      descKey: 'mobile.codscare.desc',
      img: 'assets/images/product2.jpg'
    },
    {
      titleKey: 'mobile.codsbill.title',
      descKey: 'mobile.codsbill.desc',
      img: 'assets/images/product5.jpg'
    },
    {
      titleKey: 'mobile.codspoint.title',
      descKey: 'mobile.codspoint.desc',
      img: 'assets/images/product3.jpg'
    }
  ];

  webProjects = [
    {
      titleKey: 'web.codscare.title',
      descKey: 'web.codscare.desc',
      img: 'assets/images/product3.jpg'
    },
    {
      titleKey: 'web.codspropay.title',
      descKey: 'web.codspropay.desc',
      img: 'assets/images/product4.jpg'
    },
    {
      titleKey: 'web.codscommerce.title',
      descKey: 'web.codscommerce.desc',
      img: 'assets/images/product5.jpg'
    },
    {
      titleKey: 'web.codsadmin.title',
      descKey: 'web.codsadmin.desc',
      img: 'assets/images/product1.jpg'
    }
  ];

  activetechTab: string = 'web';

  webTechnologies = [
    { nameKey: 'tech.react', img: 'assets/images/technology8.webp', descKey: 'tech.react.desc' },
    { nameKey: 'tech.node', img: 'assets/images/technology9.webp', descKey: 'tech.node.desc' },
    { nameKey: 'tech.angular', img: 'assets/images/technology7.webp', descKey: 'tech.angular.desc' },
    { nameKey: 'tech.python', img: 'assets/images/technology6.webp', descKey: 'tech.python.desc' },
    { nameKey: 'tech.php', img: 'assets/images/technology10.webp', descKey: 'tech.php.desc' }
  ];

  mobileTechnologies = [
    { nameKey: 'tech.flutter', img: 'assets/images/technology5.webp', descKey: 'tech.flutter.desc' },
    { nameKey: 'tech.reactnative', img: 'assets/images/technology11.webp', descKey: 'tech.reactnative.desc' },
    { nameKey: 'tech.swift', img: 'assets/images/technology8.webp', descKey: 'tech.swift.desc' },
    { nameKey: 'tech.kotlin', img: 'assets/images/technology1.webp', descKey: 'tech.kotlin.desc' },
    { nameKey: 'tech.ionic', img: 'assets/images/technology2.webp', descKey: 'tech.ionic.desc' }
  ];


  switchTab(tab: string): void {
    this.activetechTab = tab;
  }

}