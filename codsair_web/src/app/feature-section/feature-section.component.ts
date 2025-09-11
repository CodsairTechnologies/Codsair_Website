import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSectionComponent implements AfterViewInit, OnInit, OnDestroy {


  private languageSubscription: Subscription = new Subscription();

  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;

  testimonials: any[] = [];
  responsiveOptions: any[] = [];
  cardWidth = 0;
  currentIndex = 0;
  autoSlideInterval: any;
  totalCards = 0;
  originalTestimonialsLength = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() => {
      this.cdr.markForCheck();
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.calculateCardWidth(), 100);
      }
    });
  }

  ngOnInit() {
    this.testimonials = [
      {
        nameKey: 'testimonial.neha.name',
        name: 'Neha Verma',
        image: 'assets/images/img1.avif',
        rating: 5,
        feedbackKey: 'testimonial.neha.feedback',
        feedback: 'Codsair transformed our idea into a fully functional mobile app. Their team was highly professional, responsive, and delivered beyond expectations.'
      },
      {
        nameKey: 'testimonial.rohit.name',
        name: 'Rohit Mehta',
        image: 'assets/images/img3.jpg',
        rating: 4,
        feedbackKey: 'testimonial.rohit.feedback',
        feedback: 'Working with Codsair was seamless. They ensured timely delivery and went the extra mile to support us.'
      },
      {
        nameKey: 'testimonial.kavya.name',
        name: 'Kavya Iyer',
        image: 'assets/images/img2.jpg',
        rating: 5,
        feedbackKey: 'testimonial.kavya.feedback',
        feedback: 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision'
      },
      {
        nameKey: 'testimonial.aditya.name',
        name: 'Aditya Rao',
        image: 'assets/images/img5.jpg',
        rating: 5,
        feedbackKey: 'testimonial.aditya.feedback',
        feedback: 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.'
      },
      {
        nameKey: 'testimonial.divya.name',
        name: 'Divya Menon',
        image: 'assets/images/img4.webp',
        rating: 5,
        feedbackKey: 'testimonial.divya.feedback',
        feedback: 'Codsairs team is extremely dedicated. They listened carefully to our needs and delivered beyond our expectations.'
      },
      {
        nameKey: 'testimonial.amala.name',
        name: 'Amala Nair',
        image: 'assets/images/img8.jpg',
        rating: 5,
        feedbackKey: 'testimonial.amala.feedback',
        feedback: 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.'
      },
      {
        nameKey: 'testimonial.aarav.name',
        name: 'Aarav Sharma',
        image: 'assets/images/img7.jpg',
        rating: 5,
        feedbackKey: 'testimonial.aarav.feedback',
        feedback: 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision'
      }
    ];

    this.originalTestimonialsLength = this.testimonials.length;
    this.cloneTestimonialsForLoop();

    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  private cloneTestimonialsForLoop(): void {
    // Clone testimonials for infinite loop
    const clonesBefore = [...this.testimonials];
    const clonesAfter = [...this.testimonials];
    this.testimonials = [...clonesBefore, ...this.testimonials, ...clonesAfter];
    this.totalCards = this.testimonials.length;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.calculateCardWidth();
        this.initializeCarouselPosition();
        this.startAutoplay();
      }, 100);

      window.addEventListener('resize', () => {
        this.calculateCardWidth();
        this.initializeCarouselPosition();
      });
    }
  }

  private calculateCardWidth(): void {
    if (this.carouselContainer) {
      const container = this.carouselContainer.nativeElement;
      const containerWidth = container.offsetWidth;
      const width = window.innerWidth;

      if (width <= 767) {
        // Mobile: 1 card
        this.cardWidth = containerWidth;
      } else if (width <= 1199) {
        // Tablet: 2 cards
        this.cardWidth = (containerWidth - 20) / 2; // Account for 1 gap of 20px
      } else {
        // Desktop: 3 cards
        this.cardWidth = (containerWidth - 40) / 3; // Account for 2 gaps of 20px
      }
    }
  }

  private initializeCarouselPosition(): void {
    if (this.carouselContainer) {
      const container = this.carouselContainer.nativeElement;
      const isRTL = this.languageService.isRTL();
      const width = window.innerWidth;
      let numVisible = 1;

      if (width >= 1200) {
        numVisible = 3;
      } else if (width >= 768) {
        numVisible = 2;
      }

      // Start at the first set of original testimonials (after clonesBefore)
      const initialScroll = this.cardWidth * this.originalTestimonialsLength + (this.originalTestimonialsLength * 20);
      container.scrollTo({ left: isRTL ? -initialScroll : initialScroll, behavior: 'instant' });
    }
  }

  private startAutoplay(): void {
    this.autoSlideInterval = setInterval(() => {
      this.scrollNext();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.languageSubscription.unsubscribe();
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }

  scrollNext(): void {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    const isRTL = this.languageService.isRTL();
    const width = window.innerWidth;
    let numScroll = 1;

    if (width >= 1200) {
      numScroll = 3; // Desktop: scroll 3 cards
    } else if (width >= 768) {
      numScroll = 2; // Tablet: scroll 2 cards
    }

    const scrollAmount = this.cardWidth * numScroll + (numScroll - 1) * 20; // Include gaps
    const maxScroll = container.scrollWidth - container.clientWidth;
    const originalSectionStart = this.cardWidth * this.originalTestimonialsLength + (this.originalTestimonialsLength * 20);
    const originalSectionEnd = originalSectionStart + (this.cardWidth * this.originalTestimonialsLength + (this.originalTestimonialsLength - 1) * 20);

    if (isRTL) {
      const currentScroll = -container.scrollLeft;
      if (currentScroll <= 0) {
        // Jump to the original section start (before clonesAfter)
        container.scrollTo({ left: -originalSectionStart, behavior: 'instant' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        // Check if we've reached the clonesBefore section
        setTimeout(() => {
          if (-container.scrollLeft <= this.cardWidth * numScroll) {
            container.scrollTo({ left: -originalSectionEnd, behavior: 'instant' });
          }
        }, 500); // Match scroll-behavior duration
      }
    } else {
      const currentScroll = container.scrollLeft;
      if (currentScroll >= maxScroll - 1) {
        // Jump to the original section start (after clonesBefore)
        container.scrollTo({ left: originalSectionStart, behavior: 'instant' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        // Check if we've reached the clonesAfter section
        setTimeout(() => {
          if (container.scrollLeft >= originalSectionEnd - this.cardWidth * numScroll) {
            container.scrollTo({ left: originalSectionStart, behavior: 'instant' });
          }
        }, 500); // Match scroll-behavior duration
      }
    }
  }

  scrollPrev(): void {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    const isRTL = this.languageService.isRTL();
    const width = window.innerWidth;
    let numScroll = 1;

    if (width >= 1200) {
      numScroll = 3; // Desktop: scroll 3 cards
    } else if (width >= 768) {
      numScroll = 2; // Tablet: scroll 2 cards
    }

    const scrollAmount = this.cardWidth * numScroll + (numScroll - 1) * 20; // Include gaps
    const originalSectionStart = this.cardWidth * this.originalTestimonialsLength + (this.originalTestimonialsLength * 20);
    const originalSectionEnd = originalSectionStart + (this.cardWidth * this.originalTestimonialsLength + (this.originalTestimonialsLength - 1) * 20);

    if (isRTL) {
      const currentScroll = -container.scrollLeft;
      if (currentScroll >= originalSectionEnd - 1) {
        // Jump to the original section end (before clonesAfter)
        container.scrollTo({ left: -originalSectionStart, behavior: 'instant' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        // Check if we've reached the clonesAfter section
        setTimeout(() => {
          if (-container.scrollLeft >= originalSectionEnd - this.cardWidth * numScroll) {
            container.scrollTo({ left: -originalSectionStart, behavior: 'instant' });
          }
        }, 500); // Match scroll-behavior duration
      }
    } else {
      const currentScroll = container.scrollLeft;
      if (currentScroll <= this.cardWidth * numScroll) {
        // Jump to the original section end (after clonesBefore)
        container.scrollTo({ left: originalSectionEnd, behavior: 'instant' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        // Check if we've reached the clonesBefore section
        setTimeout(() => {
          if (container.scrollLeft <= originalSectionStart) {
            container.scrollTo({ left: originalSectionEnd, behavior: 'instant' });
          }
        }, 500); // Match scroll-behavior duration
      }
    }
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