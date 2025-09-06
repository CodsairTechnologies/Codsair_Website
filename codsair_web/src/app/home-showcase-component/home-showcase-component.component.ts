import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-showcase-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-showcase-component.component.html',
  styleUrl: './home-showcase-component.component.css'
})
export class HomeShowcaseComponentComponent {

   locations = [
    {
      country: 'India',
      flag: 'assets/images/india.jpg',
      phone: '+91 836 013 9952',
      email: 'info@lilacinfotech.com',
      top: '59%', left: '65%'
    },
    {
      country: 'UAE',
      flag: 'assets/images/uae.jpg',
      phone: '+971 50 520 9952',
      email: 'sales@lilacinfotech.ae',
      top: '54%', left: '58.5%'
    },
    {
      country: 'Canada',
      flag: 'assets/images/canada.jpg',
      phone: '+1 647 889-2374',
      email: 'harleen@lilacinfotech.com',
      top: '34%', left: '16.5%'
    },
    {
      country: 'Germany',
      flag: 'assets/images/germany.jpg',
      phone: '+49 173 3039344',
      email: 'jennifer@lilacinfotech.com',
      top: '40%', left: '50%'
    }
  ];

  stats = [
    { value: '120', label: 'Projects Delivered' },
    { value: '75+', label: 'Happy Clients' },
    { value: '5', label: 'Happy Clients', icon: 'bi bi-star-fill' }, // Bootstrap icon
    { value: '5/5', label: 'Client Rating' }
  ];

   blogs = [
    {
      image: 'assets/images/blog-1.png',
      title: 'Codsair Launches New Mobile App Solutions'
    },
    {
      image: 'assets/images/blog-2.png',
      title: 'Codsair Launches New Mobile App Solutions'
    },
    {
      image: 'assets/images/blog-3.png',
      title: 'Codsair Launches New Mobile App Solutions'
    }
  ];

}
