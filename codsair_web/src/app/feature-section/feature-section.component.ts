import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css'
})
export class FeatureSectionComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  testimonials = [
    {
      image: 'assets/images/img8.jpg',
      feedback: 'Codsair transformed our idea into a fully functional mobile app. Their team was highly professional, responsive, and delivered beyond expectations.',
      name: 'Neha Verma',
      rating: 5
    },
    {
      image: 'assets/images/img3.jpg',
      feedback: 'Working with Codsair was seamless. They ensured timely delivery and went the extra mile to support us.',
      name: 'Rohit Mehta',
      rating: 4
    },
    {
      image: 'assets/images/img4.webp',
      feedback: 'We got exactly what we envisioned, with excellent support throughout the project.',
      name: 'Kavya Iyer',
      rating: 5
    },
    {
      image: 'assets/images/img5.jpg',
      feedback: 'Amazing experience! Codsair helped us scale our idea into a reliable platform.',
      name: 'Aditya Rao',
      rating: 3
    },
    {
      image: 'assets/images/img2.jpg',
      feedback: 'Codsair’s team is extremely dedicated. They listened carefully to our needs and delivered beyond our expectations.',
      name: 'Divya Menon',
      rating: 5
    },
    {
      image: 'assets/images/img1.avif',
      feedback: 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.',
      name: 'Amala Nair',
      rating: 4
    },
    {
      image: 'assets/images/img7.jpg',
      feedback: 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision.',
      name: 'Aarav Sharma',
      rating: 5
    }
  ];


  cardWidth: number = 0;

  autoSlideInterval: any;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const card = this.carouselContainer.nativeElement.querySelector('.testimonial-card');
      if (card) {
        this.cardWidth = card.offsetWidth + 20; // width + gap

        // Start auto-slide only in browser
        this.autoSlideInterval = setInterval(() => {
          this.scrollNext();
        }, 3000);
      }
    }
  }


  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }


  scrollNext() {
    if (isPlatformBrowser(this.platformId)) {
      this.carouselContainer.nativeElement.scrollBy({ left: this.cardWidth, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    if (isPlatformBrowser(this.platformId)) {
      this.carouselContainer.nativeElement.scrollBy({ left: -this.cardWidth, behavior: 'smooth' });
    }
  }


}
