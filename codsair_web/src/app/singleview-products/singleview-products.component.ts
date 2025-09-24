import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { CommonFooterComponent } from '../common-footer/common-footer.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singleview-products',
  standalone: true,
  imports: [CommonNavbarComponent, CommonFooterComponent, CommonModule],
  templateUrl: './singleview-products.component.html',
  styleUrl: './singleview-products.component.css'
})
export class SingleviewProductsComponent implements OnInit, OnDestroy {
  productId!: string;
  productData: any;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(params => {
        this.productId = params['id'];
        this.updateProductData();
      })
    );
    
    this.subscriptions.add(
      this.languageService.currentLanguage$.subscribe(() => {
        if (this.productId) {
          this.updateProductData();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  updateProductData(): void {
    if (this.productId && this.products[this.productId]) {
      this.productData = this.getTranslatedProductData(this.productId);
    }
  }

  getTranslatedProductData(productId: string) {
    const baseData = this.products[productId];
    if (!baseData) return baseData;

    const translate = (key: string, fallback: string) => {
      const translated = this.languageService.translate(key);
      return translated && translated !== key ? translated : fallback;
    };

    return {
      ...baseData,
      hero: {
        ...baseData.hero,
        title: translate(`${productId}.hero.title`, baseData.hero.title),
        subtitle: translate(`${productId}.hero.subtitle`, baseData.hero.subtitle)
      },
      about: {
        ...baseData.about,
        title: translate(`${productId}.about.title`, baseData.about.title),
        text: baseData.about.text.map((text: string, index: number) => 
          translate(`${productId}.about.text${index + 1}`, text)
        ),
        features: baseData.about.features.map((feature: any, index: number) => ({
          ...feature,
          text: translate(`${productId}.about.feature${index + 1}`, feature.text)
        }))
      },
      keyFeatures: baseData.keyFeatures?.map((kf: any, kfIndex: number) => ({
        ...kf,
        title: translate(`${productId}.keyfeature${kfIndex + 1}.title`, kf.title),
        points: kf.points.map((point: any, pointIndex: number) => ({
          ...point,
          text: translate(`${productId}.keyfeature${kfIndex + 1}.point${pointIndex + 1}`, point.text)
        }))
      })),
      whyChoose: baseData.whyChoose?.map((why: any, index: number) => ({
        ...why,
        title: translate(`${productId}.whychoose${index + 1}.title`, why.title),
        desc: translate(`${productId}.whychoose${index + 1}.desc`, why.desc)
      })),
      howItWorks: baseData.howItWorks?.map((step: any, index: number) => ({
        ...step,
        desc: translate(`${productId}.howitworks${index + 1}`, step.desc)
      })),
      cta: {
        ...baseData.cta,
        title: translate(`${productId}.cta.title`, baseData.cta.title),
        text: translate(`${productId}.cta.text`, baseData.cta.text),
        buttons: [
          translate(`${productId}.cta.button1`, baseData.cta.buttons[0]),
          translate(`${productId}.cta.button2`, baseData.cta.buttons[1])
        ]
      }
    };
  }

  products: any = {
    codspropay: {
      hero: {
        title: "codspropay.hero.title",
        subtitle: "codspropay.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codspropay.about.title",
        text: [
          "codspropay.about.text1",
          "codspropay.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codspropay.about.feature1" },
          { icon: "💻", text: "codspropay.about.feature2" },
          { icon: "🛡️", text: "codspropay.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codspropay.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature1.point4" }
          ]
        },
        {
          title: "codspropay.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature2.point4" }
          ]
        },
        {
          title: "codspropay.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature3.point3" },
          ]
        }
        ,
        {
          title: "codspropay.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codspropay.keyfeature4.point3" },
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropay.whychoose1.title',
          desc: 'codspropay.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropay.whychoose2.title',
          desc: 'codspropay.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropay.whychoose3.title',
          desc: 'codspropay.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropay.whychoose4.title',
          desc: 'codspropay.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropay.whychoose5.title',
          desc: 'codspropay.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codspropay/work-1.svg',
          desc: 'codspropay.howitworks1'
        },
        {
          icon: 'assets/images/codspropay/work-2.svg',
          desc: 'codspropay.howitworks2'
        },
        {
          icon: 'assets/images/codspropay/work-3.svg',
          desc: 'codspropay.howitworks3'
        },
        {
          icon: 'assets/images/codspropay/work-4.svg',
          desc: 'codspropay.howitworks4'
        }
      ],
      cta: {
        title: "codspropay.cta.title",
        text: "codspropay.cta.text",
        buttons: ["codspropay.cta.button1", "codspropay.cta.button2"]
      }
    },

    codsbuy: {
      hero: {
        title: "codsbuy.hero.title",
        subtitle: "codsbuy.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsbuy.about.title",
        text: [
          "codsbuy.about.text1",
          "codsbuy.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsbuy.about.feature1" },
          { icon: "💻", text: "codsbuy.about.feature2" },
          { icon: "🛡️", text: "codsbuy.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsbuy.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature1.point3" }
          ]
        },
        {
          title: "codsbuy.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature2.point4" }
          ]
        },
        {
          title: "codsbuy.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature3.point4" }
          ]
        },
        {
          title: "codsbuy.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codsbuy.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuy.whychoose1.title',
          desc: 'codsbuy.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuy.whychoose2.title',
          desc: 'codsbuy.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuy.whychoose3.title',
          desc: 'codsbuy.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuy.whychoose4.title',
          desc: 'codsbuy.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuy.whychoose5.title',
          desc: 'codsbuy.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsbuy/work-1.png',
          desc: 'codsbuy.howitworks1'
        },
        {
          icon: 'assets/images/codsbuy/work-2.png',
          desc: 'codsbuy.howitworks2'
        },
        {
          icon: 'assets/images/codsbuy/work-3.png',
          desc: 'codsbuy.howitworks3'
        },
        {
          icon: 'assets/images/codsbuy/work-4.png',
          desc: 'codsbuy.howitworks4'
        }
      ],
      cta: {
        title: "codsbuy.cta.title",
        text: "codsbuy.cta.text",
        buttons: ["codsbuy.cta.button1", "codsbuy.cta.button2"]
      }
    },

    codscare: {
      hero: {
        title: "codscare.hero.title",
        subtitle: "codscare.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codscare.about.title",
        text: [
          "codscare.about.text1",
          "codscare.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codscare.about.feature1" },
          { icon: "💻", text: "codscare.about.feature2" },
          { icon: "🛡️", text: "codscare.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codscare.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codscare.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature1.point4" }
          ]
        },
        {
          title: "codscare.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codscare.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature2.point4" }
          ]
        },
        {
          title: "codscare.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codscare.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature3.point4" }
          ]
        },
        {
          title: "codscare.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codscare.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codscare.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codscare.whychoose1.title',
          desc: 'codscare.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codscare.whychoose2.title',
          desc: 'codscare.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codscare.whychoose3.title',
          desc: 'codscare.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codscare.whychoose4.title',
          desc: 'codscare.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codscare.whychoose5.title',
          desc: 'codscare.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codscare/work-1.png',
          desc: 'codscare.howitworks1'
        },
        {
          icon: 'assets/images/codscare/work-2.png',
          desc: 'codscare.howitworks2'
        },
        {
          icon: 'assets/images/codscare/work-3.png',
          desc: 'codscare.howitworks3'
        },
        {
          icon: 'assets/images/codscare/work-4.png',
          desc: 'codscare.howitworks4'
        }
      ],
      cta: {
        title: "codscare.cta.title",
        text: "codscare.cta.text",
        buttons: ["codscare.cta.button1", "codscare.cta.button2"]
      }
    },

    codshms: {
      hero: {
        title: "codshms.hero.title",
        subtitle: "codshms.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codshms.about.title",
        text: [
          "codshms.about.text1",
          "codshms.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codshms.about.feature1" },
          { icon: "💻", text: "codshms.about.feature2" },
          { icon: "🛡️", text: "codshms.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codshms.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codshms.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature1.point4" }
          ]
        },
        {
          title: "codshms.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codshms.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature2.point4" }
          ]
        },
        {
          title: "codshms.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codshms.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature3.point4" }
          ]
        },
        {
          title: "codshms.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codshms.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codshms.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codshms.whychoose1.title',
          desc: 'codshms.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codshms.whychoose2.title',
          desc: 'codshms.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codshms.whychoose3.title',
          desc: 'codshms.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codshms.whychoose4.title',
          desc: 'codshms.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codshms.whychoose5.title',
          desc: 'codshms.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codshms/work-1.png',
          desc: 'codshms.howitworks1'
        },
        {
          icon: 'assets/images/codshms/work-2.png',
          desc: 'codshms.howitworks2'
        },
        {
          icon: 'assets/images/codshms/work-3.png',
          desc: 'codshms.howitworks3'
        },
        {
          icon: 'assets/images/codshms/work-4.png',
          desc: 'codshms.howitworks4'
        }
      ],
      cta: {
        title: "codshms.cta.title",
        text: "codshms.cta.text",
        buttons: ["codshms.cta.button1", "codshms.cta.button2"]
      }
    },

    codsevent: {
      hero: {
        title: "codsevent.hero.title",
        subtitle: "codsevent.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsevent.about.title",
        text: [
          "codsevent.about.text1",
          "codsevent.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsevent.about.feature1" },
          { icon: "💻", text: "codsevent.about.feature2" },
          { icon: "🛡️", text: "codsevent.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsevent.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature1.point4" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature1.point5" }
          ]
        },
        {
          title: "codsevent.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature2.point4" }
          ]
        },
        {
          title: "codsevent.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature3.point4" }
          ]
        },
        {
          title: "codsevent.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsevent.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsevent.whychoose1.title',
          desc: 'codsevent.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsevent.whychoose2.title',
          desc: 'codsevent.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsevent.whychoose3.title',
          desc: 'codsevent.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsevent.whychoose4.title',
          desc: 'codsevent.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsevent.whychoose5.title',
          desc: 'codsevent.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsevent/work-1.png',
          desc: 'codsevent.howitworks1'
        },
        {
          icon: 'assets/images/codsevent/work-2.png',
          desc: 'codsevent.howitworks2'
        },
        {
          icon: 'assets/images/codsevent/work-3.png',
          desc: 'codsevent.howitworks3'
        },
        {
          icon: 'assets/images/codsevent/work-4.png',
          desc: 'codsevent.howitworks4'
        }
      ],
      cta: {
        title: "codsevent.cta.title",
        text: "codsevent.cta.text",
        buttons: ["codsevent.cta.button1", "codsevent.cta.button2"]
      }
    },

    codsbill: {
      hero: {
        title: "codsbill.hero.title",
        subtitle: "codsbill.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsbill.about.title",
        text: [
          "codsbill.about.text1",
          "codsbill.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsbill.about.feature1" },
          { icon: "💻", text: "codsbill.about.feature2" },
          { icon: "🛡️", text: "codsbill.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsbill.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature1.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature2.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature3.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsbill.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbill.whychoose1.title',
          desc: 'codsbill.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbill.whychoose2.title',
          desc: 'codsbill.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbill.whychoose3.title',
          desc: 'codsbill.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbill.whychoose4.title',
          desc: 'codsbill.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbill.whychoose5.title',
          desc: 'codsbill.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsbill/work-1.png',
          desc: 'codsbill.howitworks1'
        },
        {
          icon: 'assets/images/codsbill/work-2.png',
          desc: 'codsbill.howitworks2'
        },
        {
          icon: 'assets/images/codsbill/work-3.png',
          desc: 'codsbill.howitworks3'
        },
        {
          icon: 'assets/images/codsbill/work-4.png',
          desc: 'codsbill.howitworks4'
        }
      ],
      cta: {
        title: "codsbill.cta.title",
        text: "codsbill.cta.text",
        buttons: ["codsbill.cta.button1", "codsbill.cta.button2"]
      }
    },

    codspoint: {
      hero: {
        title: "codspoint.hero.title",
        subtitle: "codspoint.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codspoint.about.title",
        text: [
          "codspoint.about.text1",
          "codspoint.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codspoint.about.feature1" },
          { icon: "💻", text: "codspoint.about.feature2" },
          { icon: "🛡️", text: "codspoint.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codspoint.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature1.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature2.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature3.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codspoint.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codspoint.whychoose1.title',
          desc: 'codspoint.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspoint.whychoose2.title',
          desc: 'codspoint.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspoint.whychoose3.title',
          desc: 'codspoint.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspoint.whychoose4.title',
          desc: 'codspoint.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspoint.whychoose5.title',
          desc: 'codspoint.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codspoint/work-1.png',
          desc: 'codspoint.howitworks1'
        },
        {
          icon: 'assets/images/codspoint/work-2.png',
          desc: 'codspoint.howitworks2'
        },
        {
          icon: 'assets/images/codspoint/work-3.png',
          desc: 'codspoint.howitworks3'
        },
        {
          icon: 'assets/images/codspoint/work-4.png',
          desc: 'codspoint.howitworks4'
        }
      ],
      cta: {
        title: "codspoint.cta.title",
        text: "codspoint.cta.text",
        buttons: ["codspoint.cta.button1", "codspoint.cta.button2"]
      }
    },

    codslabel: {
      hero: {
        title: "codslabel.hero.title",
        subtitle: "codslabel.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codslabel.about.title",
        text: [
          "codslabel.about.text1",
          "codslabel.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codslabel.about.feature1" },
          { icon: "💻", text: "codslabel.about.feature2" },
          { icon: "🛡️", text: "codslabel.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codslabel.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature1.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature2.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature3.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codslabel.keyfeature4.point2" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codslabel.whychoose1.title',
          desc: 'codslabel.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codslabel.whychoose2.title',
          desc: 'codslabel.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codslabel.whychoose3.title',
          desc: 'codslabel.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codslabel.whychoose4.title',
          desc: 'codslabel.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codslabel.whychoose5.title',
          desc: 'codslabel.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codslabel/work-1.png',
          desc: 'codslabel.howitworks1'
        },
        {
          icon: 'assets/images/codslabel/work-2.png',
          desc: 'codslabel.howitworks2'
        },
        {
          icon: 'assets/images/codslabel/work-3.png',
          desc: 'codslabel.howitworks3'
        },
        {
          icon: 'assets/images/codslabel/work-4.png',
          desc: 'codslabel.howitworks4'
        }
      ],
      cta: {
        title: "codslabel.cta.title",
        text: "codslabel.cta.text",
        buttons: ["codslabel.cta.button1", "codslabel.cta.button2"]
      }
    },

    codsaudit: {
      hero: {
        title: "codsaudit.hero.title",
        subtitle: "codsaudit.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsaudit.about.title",
        text: [
          "codsaudit.about.text1",
          "codsaudit.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsaudit.about.feature1" },
          { icon: "💻", text: "codsaudit.about.feature2" },
          { icon: "🛡️", text: "codsaudit.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsaudit.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature1.point3" }
          ]
        },
        {
          title: "codsaudit.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature2.point4" }
          ]
        },
        {
          title: "codsaudit.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature3.point3" }
          ]
        },
        {
          title: "codsaudit.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point4" },
            { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point5" },
            // { icon: "assets/images/feature.png", text: "codsaudit.keyfeature4.point6" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsaudit.whychoose1.title',
          desc: 'codsaudit.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsaudit.whychoose2.title',
          desc: 'codsaudit.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsaudit.whychoose3.title',
          desc: 'codsaudit.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsaudit.whychoose4.title',
          desc: 'codsaudit.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsaudit.whychoose5.title',
          desc: 'codsaudit.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsAudit/work-1.png',
          desc: 'codsaudit.howitworks1'
        },
        {
          icon: 'assets/images/codsAudit/work-2.png',
          desc: 'codsaudit.howitworks2'
        },
        {
          icon: 'assets/images/codsAudit/work-3.png',
          desc: 'codsaudit.howitworks3'
        },
        {
          icon: 'assets/images/codsAudit/work-4.png',
          desc: 'codsaudit.howitworks4'
        }
      ],
      cta: {
        title: "codsaudit.cta.title",
        text: "codsaudit.cta.text",
        buttons: ["codsaudit.cta.button1", "codsaudit.cta.button2"]
      }
    },

    codsrms: {
      hero: {
        title: "codsrms.hero.title",
        subtitle: "codsrms.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsrms.about.title",
        text: [
          "codsrms.about.text1",
          "codsrms.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsrms.about.feature1" },
          { icon: "💻", text: "codsrms.about.feature2" },
          { icon: "🛡️", text: "codsrms.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsrms.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature1.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature2.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature3.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature4.point3" },
            { icon: "assets/images/feature.png", text: "codsrms.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsrms.whychoose1.title',
          desc: 'codsrms.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsrms.whychoose2.title',
          desc: 'codsrms.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsrms.whychoose3.title',
          desc: 'codsrms.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsrms.whychoose4.title',
          desc: 'codsrms.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsrms.whychoose5.title',
          desc: 'codsrms.whychoose5.desc'
        }
      ],
      howItWorks: [
        { icon: 'assets/images/codsRMS/work-1.png', desc: 'codsrms.howitworks1' },
        { icon: 'assets/images/codsRMS/work-2.png', desc: 'codsrms.howitworks2' },
        { icon: 'assets/images/codsRMS/work-3.png', desc: 'codsrms.howitworks3' },
        { icon: 'assets/images/codsRMS/work-4.png', desc: 'codsrms.howitworks4' }
      ],
      cta: {
        title: "codsrms.cta.title",
        text: "codsrms.cta.text",
        buttons: ["codsrms.cta.button1", "codsrms.cta.button2"]
      }
    },

    codsoptima: {
      hero: {
        title: "codsoptima.hero.title",
        subtitle: "codsoptima.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsoptima.about.title",
        text: [
          "codsoptima.about.text1",
          "codsoptima.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsoptima.about.feature1" },
          { icon: "💻", text: "codsoptima.about.feature2" },
          { icon: "🛡️", text: "codsoptima.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsoptima.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point3" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point4" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point5" },
            // { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point6" },
            // { icon: "assets/images/feature.png", text: "codsoptima.keyfeature1.point7" }
          ]
        },
        {
          title: "codsoptima.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point3" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point4" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point5" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point6" },
            // { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point7" },
            // { icon: "assets/images/feature.png", text: "codsoptima.keyfeature2.point8" }
          ]
        },
        {
          title: "codsoptima.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature3.point2" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature3.point3" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature3.point4" }
          ]
        },
        {
          title: "codsoptima.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature4.point2" },
            { icon: "assets/images/feature.png", text: "codsoptima.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsoptima.whychoose1.title',
          desc: 'codsoptima.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsoptima.whychoose2.title',
          desc: 'codsoptima.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsoptima.whychoose3.title',
          desc: 'codsoptima.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsoptima.whychoose4.title',
          desc: 'codsoptima.whychoose4.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsoptima.whychoose5.title',
          desc: 'codsoptima.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsoptima/work-1.png',
          desc: 'codsoptima.howitworks1'
        },
        {
          icon: 'assets/images/codsoptima/work-2.png',
          desc: 'codsoptima.howitworks2'
        },
        {
          icon: 'assets/images/codsoptima/work-3.png',
          desc: 'codsoptima.howitworks3'
        },
        {
          icon: 'assets/images/codsoptima/work-4.png',
          desc: 'codsoptima.howitworks4'
        }
      ],
      cta: {
        title: "codsoptima.cta.title",
        text: "codsoptima.cta.text",
        buttons: ["codsoptima.cta.button1", "codsoptima.cta.button2"]
      }
    },

    codspropaylite: {
      hero: {
        title: "codspropaylite.hero.title",
        subtitle: "codspropaylite.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codspropaylite.about.title",
        text: [
          "codspropaylite.about.text1",
          "codspropaylite.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codspropaylite.about.feature1" },
          { icon: "💻", text: "codspropaylite.about.feature2" },
          { icon: "🛡️", text: "codspropaylite.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codspropaylite.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature1.point3" }
          ]
        },
        {
          title: "codspropaylite.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature2.point2" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature2.point3" }
          ]
        },
        {
          title: "codspropaylite.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature3.point1" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature3.point2" }
          ]
        },
        {
          title: "codspropaylite.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature4.point1" },
            { icon: "assets/images/feature.png", text: "codspropaylite.keyfeature4.point2" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropaylite.whychoose1.title',
          desc: 'codspropaylite.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropaylite.whychoose2.title',
          desc: 'codspropaylite.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropaylite.whychoose3.title',
          desc: 'codspropaylite.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codspropaylite.whychoose4.title',
          desc: 'codspropaylite.whychoose4.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codspropaylite/work-1.png',
          desc: 'codspropaylite.howitworks1'
        },
        {
          icon: 'assets/images/codspropaylite/work-2.png',
          desc: 'codspropaylite.howitworks2'
        },
        {
          icon: 'assets/images/codspropaylite/work-3.png',
          desc: 'codspropaylite.howitworks3'
        },
        {
          icon: 'assets/images/codspropaylite/work-4.png',
          desc: 'codspropaylite.howitworks4'
        }
      ],
      cta: {
        title: "codspropaylite.cta.title",
        text: "codspropaylite.cta.text",
        buttons: ["codspropaylite.cta.button1", "codspropaylite.cta.button2"]
      }
    },

    codsbuylite: {
      hero: {
        title: "codsbuylite.hero.title",
        subtitle: "codsbuylite.hero.subtitle",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "codsbuylite.about.title",
        text: [
          "codsbuylite.about.text1",
          "codsbuylite.about.text2"
        ],
        features: [
          { icon: "🔍", text: "codsbuylite.about.feature1" },
          { icon: "💻", text: "codsbuylite.about.feature2" },
          { icon: "🛡️", text: "codsbuylite.about.feature3" }
        ]
      },
      keyFeatures: [
        {
          title: "codsbuylite.keyfeature1.title",
          color: "peach",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature1.point1" },
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature1.point2" },
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature1.point3" }
          ]
        },
        {
          title: "codsbuylite.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature2.point1" },
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature2.point2" }
          ]
        },
        {
          title: "codsbuylite.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature3.point1" }
          ]
        },
        {
          title: "codsbuylite.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/feature.png", text: "codsbuylite.keyfeature4.point1" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuylite.whychoose1.title',
          desc: 'codsbuylite.whychoose1.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuylite.whychoose2.title',
          desc: 'codsbuylite.whychoose2.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuylite.whychoose3.title',
          desc: 'codsbuylite.whychoose3.desc'
        },
        {
          icon: 'assets/images/arrow.png',
          title: 'codsbuylite.whychoose4.title',
          desc: 'codsbuylite.whychoose4.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/codsbuylite/work-1.png',
          desc: 'codsbuylite.howitworks1'
        },
        {
          icon: 'assets/images/codsbuylite/work-2.png',
          desc: 'codsbuylite.howitworks2'
        },
        {
          icon: 'assets/images/codsbuylite/work-3.png',
          desc: 'codsbuylite.howitworks3'
        },
        {
          icon: 'assets/images/codsbuylite/work-4.png',
          desc: 'codsbuylite.howitworks4'
        }
      ],
      cta: {
        title: "codsbuylite.cta.title",
        text: "codsbuylite.cta.text",
        buttons: ["codsbuylite.cta.button1", "codsbuylite.cta.button2"]
      }
    }
  };
}