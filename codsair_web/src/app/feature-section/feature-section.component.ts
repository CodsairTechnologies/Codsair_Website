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
  originalTestimonials = [...this.testimonials];
  isAutoScrolling = false;


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const card = this.carouselContainer.nativeElement.querySelector('.testimonial-card');
      if (card) {
        this.cardWidth = card.offsetWidth + 20; // width + gap

        const n = 30; // duplicate n times
        this.testimonials = this.duplicateTestimonials(this.originalTestimonials, n);

        const container = this.carouselContainer.nativeElement;
        container.scrollLeft = 0;

        container.addEventListener('scroll', this.onScroll);

        // Auto-slide
        this.autoSlideInterval = setInterval(() => this.scrollNext(), 1000);
      }
    }
  }

  duplicateTestimonials(original: any[], n: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < n; i++) {
      result.push(...original);
    }
    return result;
  }


  onScroll = () => {
    const container = this.carouselContainer.nativeElement;
    const n = 30; // same number as duplicates
    const originalWidth = container.scrollWidth / n; // width of one original set

    if (this.isAutoScrolling) return;

    if (container.scrollLeft >= originalWidth * (n - 1)) {
      container.scrollLeft -= originalWidth;
    } else if (container.scrollLeft < originalWidth) {
      container.scrollLeft += originalWidth;
    }
  };


  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (isPlatformBrowser(this.platformId)) {
      const container = this.carouselContainer.nativeElement;
      container.removeEventListener('scroll', this.onScroll);
    }
  }


  scrollNext() {
    const container = this.carouselContainer.nativeElement;
    this.isAutoScrolling = true;
    container.scrollBy({ left: this.cardWidth, behavior: 'smooth' });
    setTimeout(() => (this.isAutoScrolling = false), 500);
  }

  scrollPrev() {
    const container = this.carouselContainer.nativeElement;
    this.isAutoScrolling = true;
    container.scrollBy({ left: -this.cardWidth, behavior: 'smooth' });
    setTimeout(() => (this.isAutoScrolling = false), 500);
  }

}