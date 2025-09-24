import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(public languageService: LanguageService, private router: Router) {}

  activeTab: string = 'mobile';

  mobileProjects = [
    {
      id: 'codsAudit',
      titleKey: 'mobile.codspropay.title',
      descKey: 'mobile.codspropay.desc',
      img: 'assets/images/product1.jpg'
    },
    {
      id: 'codslabel',
      titleKey: 'mobile.codscare.title',
      descKey: 'mobile.codscare.desc',
      img: 'assets/images/product2.jpg'
    },
    {
      id: 'codsbill',
      titleKey: 'mobile.codsbill.title',
      descKey: 'mobile.codsbill.desc',
      img: 'assets/images/product5.jpg'
    },
    {
      id: 'codsbuy',
      titleKey: 'mobile.codspoint.title',
      descKey: 'mobile.codspoint.desc',
      img: 'assets/images/product3.jpg'
    }
  ];

  webProjects = [
    {
      id: 'codscare',
      titleKey: 'web.codscare.title',
      descKey: 'web.codscare.desc',
      img: 'assets/images/product3.jpg'
    },
    {
      id: 'codspropay',
      titleKey: 'web.codspropay.title',
      descKey: 'web.codspropay.desc',
      img: 'assets/images/product4.jpg'
    },
    {
      id: 'codspoint',
      titleKey: 'web.codscommerce.title',
      descKey: 'web.codscommerce.desc',
      img: 'assets/images/product5.jpg'
    },
    {
      id: 'codsRMS',
      titleKey: 'web.codsadmin.title',
      descKey: 'web.codsadmin.desc',
      img: 'assets/images/product1.jpg'
    }
  ];

  activetechTab: string = 'web';

  webTechnologies = [
    { nameKey: 'tech.react', img: 'assets/images/React.png', descKey: 'tech.react.desc' },
    { nameKey: 'tech.node', img: 'assets/images/nodejs.png', descKey: 'tech.node.desc' },
    { nameKey: 'tech.angular', img: 'assets/images/Angular.webp', descKey: 'tech.angular.desc' },
    { nameKey: 'tech.python', img: 'assets/images/python.webp', descKey: 'tech.python.desc' },
    { nameKey: 'tech.php', img: 'assets/images/technology10.webp', descKey: 'tech.php.desc' }
  ];

  mobileTechnologies = [
    { nameKey: 'tech.flutter', img: 'assets/images/flutter.png', descKey: 'tech.flutter.desc' },
    { nameKey: 'tech.reactnative', img: 'assets/images/React.png', descKey: 'tech.reactnative.desc' },
    { nameKey: 'tech.swift', img: 'assets/images/swift.png', descKey: 'tech.swift.desc' },
    { nameKey: 'tech.kotlin', img: 'assets/images/kotlin.png', descKey: 'tech.kotlin.desc' },
    { nameKey: 'tech.ionic', img: 'assets/images/ionic.png', descKey: 'tech.ionic.desc' }
  ];


  switchTab(tab: string): void {
    this.activetechTab = tab;
  }

  goToProduct(id: string) {
  this.router.navigate(['/product', id]);
}

}