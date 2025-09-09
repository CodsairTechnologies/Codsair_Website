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
    { nameKey: 'tech.react', descKey: 'tech.react.desc', img: 'assets/images/technology8.webp' },
    { nameKey: 'tech.node', descKey: 'tech.node.desc', img: 'assets/images/technology9.webp' },
    { nameKey: 'tech.angular', descKey: 'tech.angular.desc', img: 'assets/images/technology7.webp' },
    { nameKey: 'tech.python', descKey: 'tech.python.desc', img: 'assets/images/technology6.webp' },
    { nameKey: 'tech.php', descKey: 'tech.php.desc', img: 'assets/images/technology10.webp' }
  ];

  mobileTechnologies = [
    { nameKey: 'tech.flutter', descKey: 'tech.flutter.desc', img: 'assets/images/technology5.webp' },
    { nameKey: 'tech.reactnative', descKey: 'tech.reactnative.desc', img: 'assets/images/technology11.webp' },
    { nameKey: 'tech.swift', descKey: 'tech.swift.desc', img: 'assets/images/technology8.webp' },
    { nameKey: 'tech.kotlin', descKey: 'tech.kotlin.desc', img: 'assets/images/technology1.webp' },
    { nameKey: 'tech.ionic', descKey: 'tech.ionic.desc', img: 'assets/images/technology2.webp' }
  ];


  switchTab(tab: string): void {
    this.activetechTab = tab;
  }

}