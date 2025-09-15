import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonNavbarComponent } from "../common-navbar/common-navbar.component";
import { CommonFooterComponent } from "../common-footer/common-footer.component";
import { FeatureSectionComponent } from "../feature-section/feature-section.component";
import { HomeShowcaseComponentComponent } from "../home-showcase-component/home-showcase-component.component";
import { LanguageService } from '../services/language.service';
import { ProductsComponent } from "../products/products.component";
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonNavbarComponent,
    CommonFooterComponent,
    FeatureSectionComponent,
    HomeShowcaseComponentComponent,
    ProductsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private resizeTimeout: any;
  private observer?: IntersectionObserver;



  constructor(
    public languageService: LanguageService,
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.setSEOData();
    this.addStructuredData();
  }

  ngOnDestroy() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setSEOData() {
    const isArabic = this.languageService.getCurrentLanguage() === 'ar';

    // Set page title
    const pageTitle = isArabic
      ? 'كودزاير تكنولوجيز - حلول برمجية مبتكرة | تطوير تطبيقات الهاتف والويب'
      : 'Codsair Technologies - Innovative Software Solutions | Mobile & Web Development';

    this.title.setTitle(pageTitle);

    // Set meta description
    const description = isArabic
      ? 'كودزاير تكنولوجيز - شركة رائدة في تطوير البرمجيات والتطبيقات المحمولة وتطبيقات الويب. نقدم حلول تقنية مبتكرة للشركات في الهند والإمارات وكندا وألمانيا.'
      : 'Codsair Technologies - Leading software development company specializing in mobile apps, web applications, and digital solutions. Serving clients globally from India, UAE, Canada, and Germany.';

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords', content: isArabic
        ? 'تطوير التطبيقات, تطوير الويب, كودزاير, تقنية المعلومات, تطبيقات الهاتف, حلول رقمية, برمجة, تصميم واجهات'
        : 'mobile app development, web development, software solutions, Codsair Technologies, digital transformation, UI/UX design, React, Angular, Flutter'
    });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://codsairtechnologies.com' });
    this.meta.updateTag({ property: 'og:image', content: 'https://codsairtechnologies.com/assets/images/codsair-og-image.jpg' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Codsair Technologies' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://codsairtechnologies.com/assets/images/codsair-twitter-card.jpg' });

    // Additional SEO tags
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Codsair Technologies' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.updateTag({ 'http-equiv': 'Content-Language', content: isArabic ? 'ar' : 'en' });
  }

  private addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Codsair Technologies",
      "url": "https://codsairtechnologies.com",
      "logo": "https://codsairtechnologies.com/assets/images/codsair-logo.png",
      "description": "Leading software development company specializing in mobile apps, web applications, and digital solutions.",
      "foundingDate": "2020",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "No 1716, 7th FLOOR, HILITE BUSINESS PARK",
          "addressLocality": "Palazhi, Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673014",
          "addressCountry": "IN"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9497428487",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic", "Hindi"]
        }
      ],
      "sameAs": [
        "https://facebook.com/codsairtechnologies",
        "https://instagram.com/codsair_technologies/",
        "https://linkedin.com/company/codsair-technologies",
        "https://twitter.com/codsairtech"
      ],
      "services": [
        "Mobile App Development",
        "Web Development",
        "UI/UX Design",
        "Digital Marketing",
        "IoT Solutions",
        "Graphic Design"
      ],
      "areaServed": ["India", "UAE", "Canada", "Germany", "Worldwide"]
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  words: string[] = ["Innovation", "Creativity", "Technology"];
  wordsAr: string[] = ["الابتكار", "الإبداع", "التكنولوجيا"];
  wordIndex: number = 0;
  charIndex: number = 0;


cards = [
  {
    icon: 'bi bi-phone',
    titleKey: 'expertise.mobile.title',
    descKey: 'expertise.mobile.desc'
  },
  {
    icon: 'bi bi-laptop',
    titleKey: 'expertise.web.title',
    descKey: 'expertise.web.desc'
  },
  {
    icon: 'bi bi-bullseye',
    titleKey: 'expertise.digital.title',
    descKey: 'expertise.digital.desc'
  },
  {
    icon: 'bi bi-ui-checks',
    titleKey: 'expertise.uiux.title',
    descKey: 'expertise.uiux.desc'
  },
  {
    icon: 'bi bi-brush',
    titleKey: 'expertise.graphic.title',
    descKey: 'expertise.graphic.desc'
  },
  {
    icon: 'bi bi-megaphone',
    titleKey: 'expertise.advertisement.title',
    descKey: 'expertise.advertisement.desc'
  },
  // {
  //   icon: 'bi bi-wifi',
  //   titleKey: 'expertise.iot.title',
  //   descKey: 'expertise.iot.desc'
  // },
  // {
  //   icon: 'bi bi-robot',
  //   titleKey: 'expertise.robotics.title',
  //   descKey: 'expertise.robotics.desc'
  // },
  // {
  //   icon: 'bi bi-mortarboard',
  //   titleKey: 'expertise.academic.title',
  //   descKey: 'expertise.academic.desc'
  // }
];




  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initVideo();
      this.typingEffect();
      setTimeout(() => {
        this.setupProcessPath();
        if (typeof (window as any).AOS !== 'undefined') {
          (window as any).AOS.refresh();
        }
      }, 200);
      this.initParallax();
    }
  }

  private initVideo() {
    const video = document.querySelector('.home-section-video') as HTMLVideoElement;
    if (video) {
      video.load();
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateParallax();
  }

  initParallax() {
    this.updateParallax();
  }

  updateParallax() {
    const scrolled = window.pageYOffset;
    const scrollPercent = scrolled / (document.body.scrollHeight - window.innerHeight);

    const video = document.querySelector('.home-section-video') as HTMLElement;
    const content = document.querySelector('.home-section-content') as HTMLElement;
    const socialBar = document.querySelector('.social-bar') as HTMLElement;
    const aboutSection = document.querySelector('.aboutus-container') as HTMLElement;
    const processSection = document.querySelector('.process-section') as HTMLElement;
    const miniCircles = document.querySelectorAll('.mini-circle') as NodeListOf<HTMLElement>;


    // Enhanced video parallax with scale
    if (video) {
      const scale = 1 + scrollPercent * 0.1;
      video.style.transform = `translateY(${scrolled * 0.6}px) scale(${scale})`;
    }

    // Enhanced content
    if (content) {
      content.style.transform = `translate(-50%, -50%) translateY(${scrolled * -0.4}px)`;
    }

    // Enhanced social bar with horizontal movement
    if (socialBar) {
      const horizontalOffset = Math.sin(scrolled * 0.01) * 5;
      socialBar.style.transform = `translateY(-50%) translateY(${scrolled * -0.25}px) translateX(${horizontalOffset}px)`;
    }

    // Enhanced about section with 3D effect
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / window.innerHeight;
        const offset = progress * 30;
        const rotation = progress * 2;
        aboutSection.style.transform = `translateY(${offset}px) rotateX(${rotation}deg)`;
      }
    }

    // Enhanced mini circles with individual movements
    miniCircles.forEach((miniCircle, index) => {
      const rect = miniCircle.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / window.innerHeight;
        const xOffset = Math.sin(scrolled * 0.005 + index) * 10;
        const yOffset = Math.cos(scrolled * 0.003 + index) * 8;
        const rotation = scrolled * 0.1 * (index + 1);
        miniCircle.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`;
      }
    });

    // Enhanced process section with wave effect
    if (processSection) {
      const rect = processSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / window.innerHeight;
        const waveOffset = Math.sin(progress * Math.PI) * 20;
        processSection.style.transform = `translateY(${waveOffset}px)`;
      }
    }


  }

  typingEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement) {
      const currentWords = this.languageService.getCurrentLanguage() === 'ar' ? this.wordsAr : this.words;
      let currentWord = currentWords[this.wordIndex];

      if (this.charIndex < currentWord.length) {
        typingElement.innerHTML += currentWord.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typingEffect(), 120);
      } else {
        // wait before erasing
        setTimeout(() => this.eraseEffect(), 1500);
      }
    }
  }

  eraseEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement) {
      if (this.charIndex > 0) {
        typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
        this.charIndex--;
        setTimeout(() => this.eraseEffect(), 80);
      } else {
        // move to next word
        const currentWords = this.languageService.getCurrentLanguage() === 'ar' ? this.wordsAr : this.words;
        this.wordIndex = (this.wordIndex + 1) % currentWords.length;
        setTimeout(() => this.typingEffect(), 300);
      }
    }
  }




  setupProcessPath() {
    const path = document.querySelector('#processPath') as SVGPathElement | null;
    const svg = document.querySelector('.process-line') as SVGSVGElement | null;
    const container = document.querySelector('#processContainer') as HTMLElement | null;
    const processSection = document.querySelector('#process') as HTMLElement | null;

    if (!path || !svg || !container || !processSection) return;

    const total = path.getTotalLength();
    path.style.strokeDasharray = `${total}`;
    path.style.strokeDashoffset = `${total}`;

    this.observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        path.style.transition = 'stroke-dashoffset 2.6s ease-in-out';
        path.style.strokeDashoffset = '0';
        obs.disconnect();
      }
    }, { threshold: 0.25 });

    this.observer.observe(processSection);

    const placeSteps = () => {
      const steps = Array.from(container.querySelectorAll('.process-step')) as HTMLElement[];
      const svgRect = svg.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const viewBoxW = 1100;
      const viewBoxH = 500;
      const screenWidth = window.innerWidth;

      steps.forEach((step) => {
        let ratio = parseFloat(step.getAttribute('data-pos') || '0');
        ratio = Math.max(0, Math.min(1, ratio));

        const pt = path.getPointAtLength(total * ratio);

        let x, y;

        if (screenWidth <= 768) {
          // Mobile: Direct SVG coordinate mapping with proper scaling
          const scaleX = containerRect.width / viewBoxW;
          const scaleY = containerRect.height / viewBoxH;

          x = pt.x * scaleX;
          y = pt.y * scaleY;
        } else {
          // Desktop/Tablet: Center the SVG and calculate offset
          const svgOffsetX = (containerRect.width - svgRect.width) / 2;
          const svgOffsetY = (containerRect.height - svgRect.height) / 2;

          x = svgOffsetX + (pt.x / viewBoxW) * svgRect.width;
          y = svgOffsetY + (pt.y / viewBoxH) * svgRect.height;
        }

        step.style.left = `${x}px`;
        step.style.top = `${y}px`;
        step.style.transform = 'translate(-50%, -50%)';

        const label = step.querySelector('p') as HTMLElement | null;
        if (!label) return;

        if (screenWidth <= 768) {
          // Mobile: Position labels based on available space
          if (pt.x < 400) {
            label.style.left = 'calc(100% + 8px)';
            label.style.top = '50%';
            label.style.transform = 'translateY(-50%)';
            label.style.textAlign = 'left';
          } else if (pt.x > 700) {
            label.style.left = 'calc(-100% - 8px)';
            label.style.top = '50%';
            label.style.transform = 'translateY(-50%) translateX(-100%)';
            label.style.textAlign = 'right';
          } else {
            label.style.left = '50%';
            label.style.top = 'calc(100% + 8px)';
            label.style.transform = 'translateX(-50%)';
            label.style.textAlign = 'center';
          }
        } else {
          // Desktop/Tablet: Default positioning
          label.style.left = '50%';
          label.style.top = 'calc(100% + 10px)';
          label.style.transform = 'translateX(-50%)';
          label.style.textAlign = 'center';
        }
      });
    };

    const handleResize = () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(placeSteps, 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(placeSteps, 200);
    });

    // Ensure proper initial positioning
    requestAnimationFrame(() => {
      setTimeout(placeSteps, 100);
      setTimeout(placeSteps, 300);
    });
  }

  getVideoSrc(): string {
    return `/assets/images/home-video.mp4?v=${Date.now()}`;
  }

  onVideoLoaded(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.classList.add('loaded');
  }

  onVideoCanPlay(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.classList.add('loaded');
    video.play().catch(() => {
      console.log('Video autoplay failed');
    });
  }

  onVideoError(event: Event) {
    console.log('Video failed to load - using fallback background');
  }


}
