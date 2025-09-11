import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, Carousel, ButtonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSectionComponent implements AfterViewInit, OnInit {
  private languageSubscription: Subscription = new Subscription();

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService, private cdr: ChangeDetectorRef) {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() => {
      this.cdr.markForCheck();
      // if (isPlatformBrowser(this.platformId) && this.carouselContainer) {
      //   setTimeout(() => this.recalculateCardWidth(), 100);
      // }
    });
  }

  @ViewChild(Carousel) carousel!: Carousel;

  testimonials: any[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.testimonials = [
      {
        name: 'Neha Verma',
        image: 'assets/images/img1.avif',
        rating: 5,
        feedback: 'Codsair transformed our idea into a fully functional mobile app. Their team was highly professional, responsive, and delivered beyond expectations.'
      },
      {
        name: 'Rohit Mehta',
        image: 'assets/images/img3.jpg',
        rating: 4,
        feedback: 'Working with Codsair was seamless. They ensured timely delivery and went the extra mile to support us.'
      },
      {
        name: 'Kavya Iyer',
        image: 'assets/images/img2.jpg',
        rating: 5,
        feedback: 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision'
      },
      {
        name: 'Aditya Rao',
        image: 'assets/images/img5.jpg',
        rating: 5,
        feedback: 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.'
      },
      {
        name: 'Divya Menon',
        image: 'assets/images/img4.webp',
        rating: 5,
        feedback: 'Codsairs team is extremely dedicated. They listened carefully to our needs and delivered beyond our expectations.'
      },
      {
        name: 'Amala Nair',
        image: 'assets/images/img8.jpg',
        rating: 5,
        feedback: 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.'
      },
      {
        name: 'Aarav Sharma',
        image: 'assets/images/img7.jpg',
        rating: 5,
        feedback: 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision'
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '992px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngAfterViewInit() {
    // carousel methods are now accessible
  }

  getStars(rating: number): boolean[] {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }

  prev() {
    (this.carousel as any).navBackward();
  }

  next() {
    (this.carousel as any).navForward();
  }



  // testimonials = [
  //   {
  //     image: 'assets/images/img8.jpg',
  //     feedbackKey: 'testimonial.neha.feedback',
  //     nameKey: 'testimonial.neha.name',
  //     rating: 5
  //   },
  //   {
  //     image: 'assets/images/img3.jpg',
  //     feedbackKey: 'testimonial.rohit.feedback',
  //     nameKey: 'testimonial.rohit.name',
  //     rating: 4
  //   },
  //   {
  //     image: 'assets/images/img4.webp',
  //     feedbackKey: 'testimonial.kavya.feedback',
  //     nameKey: 'testimonial.kavya.name',
  //     rating: 5
  //   },
  //   {
  //     image: 'assets/images/img5.jpg',
  //     feedbackKey: 'testimonial.aditya.feedback',
  //     nameKey: 'testimonial.aditya.name',
  //     rating: 3
  //   },
  //   {
  //     image: 'assets/images/img2.jpg',
  //     feedbackKey: 'testimonial.divya.feedback',
  //     nameKey: 'testimonial.divya.name',
  //     rating: 5
  //   },
  //   {
  //     image: 'assets/images/img1.avif',
  //     feedbackKey: 'testimonial.amala.feedback',
  //     nameKey: 'testimonial.amala.name',
  //     rating: 4
  //   },
  //   {
  //     image: 'assets/images/img7.jpg',
  //     feedbackKey: 'testimonial.aarav.feedback',
  //     nameKey: 'testimonial.aarav.name',
  //     rating: 5
  //   }
  // ];

  // cardWidth: number = 0;
  // isAutoScrolling = false;
  // autoSlideInterval: any;

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.setupCarousel();
  //     window.addEventListener('resize', () => this.handleResize());
  //   }
  // }

  // private setupCarousel(): void {
  //   setTimeout(() => {
  //     this.calculateCardWidth();
  //     this.startAutoplay();
  //   }, 200);
  // }

  // private calculateCardWidth(): void {
  //   const card = this.carouselContainer.nativeElement.querySelector('.testimonial-card');
  //   if (card) {
  //     const containerWidth = this.carouselContainer.nativeElement.offsetWidth;
  //     const width = window.innerWidth;

  //     if (width <= 600) {
  //       this.cardWidth = containerWidth;
  //     } else if (width <= 992) {
  //       this.cardWidth = containerWidth / 2;
  //     } else {
  //       this.cardWidth = containerWidth / 4;
  //     }
  //   }
  // }

  // private recalculateCardWidth(): void {
  //   this.calculateCardWidth();
  // }

  // private handleResize(): void {
  //   if (this.carouselContainer) {
  //     setTimeout(() => this.recalculateCardWidth(), 100);
  //   }
  // }

  // scrollNext(): void {
  //   if (this.isAutoScrolling || !this.cardWidth) return;

  //   this.isAutoScrolling = true;
  //   const container = this.carouselContainer.nativeElement;
  //   const isRTL = this.languageService.isRTL();
  //   const scrollAmount = isRTL ? -this.cardWidth : this.cardWidth;

  //   container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  //   setTimeout(() => {
  //     this.isAutoScrolling = false;
  //   }, 500);
  // }

  // scrollPrev(): void {
  //   if (this.isAutoScrolling || !this.cardWidth) return;

  //   this.isAutoScrolling = true;
  //   const container = this.carouselContainer.nativeElement;
  //   const isRTL = this.languageService.isRTL();
  //   const scrollAmount = isRTL ? this.cardWidth : -this.cardWidth;

  //   container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  //   setTimeout(() => {
  //     this.isAutoScrolling = false;
  //   }, 500);
  // }

  // private startAutoplay(): void {
  //   if (this.autoSlideInterval) {
  //     clearInterval(this.autoSlideInterval);
  //   }
  //   this.autoSlideInterval = setInterval(() => {
  //     if (!this.isAutoScrolling) {
  //       this.scrollNext();
  //     }
  //   }, 3000);
  // }

  // pauseAutoplay(): void {
  //   if (this.autoSlideInterval) {
  //     clearInterval(this.autoSlideInterval);
  //   }
  // }

  // resumeAutoplay(): void {
  //   this.startAutoplay();
  // }

  // ngOnDestroy(): void {
  //   if (this.autoSlideInterval) {
  //     clearInterval(this.autoSlideInterval);
  //   }
  //   this.languageSubscription.unsubscribe();
  //   if (isPlatformBrowser(this.platformId)) {
  //     window.removeEventListener('resize', () => this.handleResize());
  //   }
  // }
}