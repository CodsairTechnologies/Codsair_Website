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
            { icon: "assets/images/bio.svg", text: "codspropay.keyfeature1.point1" },
            { icon: "icons/wifi.svg", text: "codspropay.keyfeature1.point2" },
            { icon: "icons/face.svg", text: "codspropay.keyfeature1.point3" },
            { icon: "icons/gps.svg", text: "codspropay.keyfeature1.point4" }
          ]
        },
        {
          title: "codspropay.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/salary.svg", text: "codspropay.keyfeature2.point1" },
            { icon: "icons/loan.svg", text: "codspropay.keyfeature2.point2" },
            { icon: "icons/fine.svg", text: "codspropay.keyfeature2.point3" },
            { icon: "icons/structure.svg", text: "codspropay.keyfeature2.point4" }
          ]
        },
        {
          title: "codspropay.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/salary.svg", text: "codspropay.keyfeature3.point1" },
            { icon: "icons/loan.svg", text: "codspropay.keyfeature3.point2" },
            { icon: "icons/fine.svg", text: "codspropay.keyfeature3.point3" },
          ]
        }
        ,
        {
          title: "codspropay.keyfeature4.title",
          color: "blue",
          points: [
            { icon: "icons/salary.svg", text: "codspropay.keyfeature4.point1" },
            { icon: "icons/loan.svg", text: "codspropay.keyfeature4.point2" },
            { icon: "icons/fine.svg", text: "codspropay.keyfeature4.point3" },
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/payroll.svg',
          title: 'codspropay.whychoose1.title',
          desc: 'codspropay.whychoose1.desc'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'codspropay.whychoose2.title',
          desc: 'codspropay.whychoose2.desc'
        },
        {
          icon: 'icons/accuracy.svg',
          title: 'codspropay.whychoose3.title',
          desc: 'codspropay.whychoose3.desc'
        },
        {
          icon: 'icons/secure.svg',
          title: 'codspropay.whychoose4.title',
          desc: 'codspropay.whychoose4.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codspropay.whychoose5.title',
          desc: 'codspropay.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codspropay.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codspropay.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codspropay.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "assets/images/jewellery.svg", text: "codsbuy.keyfeature1.point1" },
            { icon: "assets/images/catalog-outline.svg", text: "codsbuy.keyfeature1.point2" },
            { icon: "assets/images/filter.svg", text: "codsbuy.keyfeature1.point3" }
          ]
        },
        {
          title: "codsbuy.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "assets/images/products.svg", text: "codsbuy.keyfeature2.point1" },
            { icon: "assets/images/orders.png", text: "codsbuy.keyfeature2.point2" },
            { icon: "assets/images/roles.svg", text: "codsbuy.keyfeature2.point3" },
            { icon: "assets/images/sales.png", text: "codsbuy.keyfeature2.point4" }
          ]
        },
        {
          title: "codsbuy.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "assets/images/payment.png", text: "codsbuy.keyfeature3.point1" },
            { icon: "assets/images/secure.png", text: "codsbuy.keyfeature3.point2" },
            { icon: "assets/images/returns.png", text: "codsbuy.keyfeature3.point3" },
            { icon: "assets/images/cart.png", text: "codsbuy.keyfeature3.point4" }
          ]
        },
        {
          title: "codsbuy.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "assets/images/account.png", text: "codsbuy.keyfeature4.point1" },
            { icon: "assets/images/loyalty.png", text: "codsbuy.keyfeature4.point2" },
            { icon: "assets/images/reviews.png", text: "codsbuy.keyfeature4.point3" },
            { icon: "assets/images/notifications.png", text: "codsbuy.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/versatile.svg',
          title: 'codsbuy.whychoose1.title',
          desc: 'codsbuy.whychoose1.desc'
        },
        {
          icon: 'icons/customizable.svg',
          title: 'codsbuy.whychoose2.title',
          desc: 'codsbuy.whychoose2.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codsbuy.whychoose3.title',
          desc: 'codsbuy.whychoose3.desc'
        },
        {
          icon: 'icons/analytics.svg',
          title: 'codsbuy.whychoose4.title',
          desc: 'codsbuy.whychoose4.desc'
        },
        {
          icon: 'icons/secure.svg',
          title: 'codsbuy.whychoose5.title',
          desc: 'codsbuy.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsbuy.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsbuy.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsbuy.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/patient.svg", text: "codscare.keyfeature1.point1" },
            { icon: "icons/calendar.svg", text: "codscare.keyfeature1.point2" },
            { icon: "icons/report.svg", text: "codscare.keyfeature1.point3" },
            { icon: "icons/history.svg", text: "codscare.keyfeature1.point4" }
          ]
        },
        {
          title: "codscare.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/prescription.svg", text: "codscare.keyfeature2.point1" },
            { icon: "icons/history.svg", text: "codscare.keyfeature2.point2" },
            { icon: "icons/lab.svg", text: "codscare.keyfeature2.point3" },
            { icon: "icons/remote.svg", text: "codscare.keyfeature2.point4" }
          ]
        },
        {
          title: "codscare.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/calendar.svg", text: "codscare.keyfeature3.point1" },
            { icon: "icons/queue.svg", text: "codscare.keyfeature3.point2" },
            { icon: "icons/bill.svg", text: "codscare.keyfeature3.point3" },
            { icon: "icons/updates.svg", text: "codscare.keyfeature3.point4" }
          ]
        },
        {
          title: "codscare.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/lab.svg", text: "codscare.keyfeature4.point1" },
            { icon: "icons/integration.svg", text: "codscare.keyfeature4.point2" },
            { icon: "icons/notification.svg", text: "codscare.keyfeature4.point3" },
            { icon: "icons/branch.svg", text: "codscare.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/clinic.svg',
          title: 'codscare.whychoose1.title',
          desc: 'codscare.whychoose1.desc'
        },
        {
          icon: 'icons/secure.svg',
          title: 'codscare.whychoose2.title',
          desc: 'codscare.whychoose2.desc'
        },
        {
          icon: 'icons/branch.svg',
          title: 'codscare.whychoose3.title',
          desc: 'codscare.whychoose3.desc'
        },
        {
          icon: 'icons/report.svg',
          title: 'codscare.whychoose4.title',
          desc: 'codscare.whychoose4.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codscare.whychoose5.title',
          desc: 'codscare.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codscare.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codscare.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codscare.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/web.svg", text: "codshms.keyfeature1.point1" },
            { icon: "icons/status.svg", text: "codshms.keyfeature1.point2" },
            { icon: "icons/booking.svg", text: "codshms.keyfeature1.point3" },
            { icon: "icons/gallery.svg", text: "codshms.keyfeature1.point4" }
          ]
        },
        {
          title: "codshms.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/student.svg", text: "codshms.keyfeature2.point1" },
            { icon: "icons/room.svg", text: "codshms.keyfeature2.point2" },
            { icon: "icons/attendance.svg", text: "codshms.keyfeature2.point3" },
            { icon: "icons/report.svg", text: "codshms.keyfeature2.point4" }
          ]
        },
        {
          title: "codshms.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/kitchen.svg", text: "codshms.keyfeature3.point1" },
            { icon: "icons/expense.svg", text: "codshms.keyfeature3.point2" },
            { icon: "icons/finance.svg", text: "codshms.keyfeature3.point3" },
            { icon: "icons/chart.svg", text: "codshms.keyfeature3.point4" }
          ]
        },
        {
          title: "codshms.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/branch.svg", text: "codshms.keyfeature4.point1" },
            { icon: "icons/dashboard.svg", text: "codshms.keyfeature4.point2" },
            { icon: "icons/report.svg", text: "codshms.keyfeature4.point3" },
            { icon: "icons/security.svg", text: "codshms.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/website.svg',
          title: 'codshms.whychoose1.title',
          desc: 'codshms.whychoose1.desc'
        },
        {
          icon: 'icons/student.svg',
          title: 'codshms.whychoose2.title',
          desc: 'codshms.whychoose2.desc'
        },
        {
          icon: 'icons/kitchen.svg',
          title: 'codshms.whychoose3.title',
          desc: 'codshms.whychoose3.desc'
        },
        {
          icon: 'icons/transparent.svg',
          title: 'codshms.whychoose4.title',
          desc: 'codshms.whychoose4.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codshms.whychoose5.title',
          desc: 'codshms.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codshms.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codshms.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codshms.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/dashboard.svg", text: "codsevent.keyfeature1.point1" },
            { icon: "icons/stall.svg", text: "codsevent.keyfeature1.point2" },
            { icon: "icons/vendor.svg", text: "codsevent.keyfeature1.point3" },
            { icon: "icons/finance.svg", text: "codsevent.keyfeature1.point4" },
            { icon: "icons/report.svg", text: "codsevent.keyfeature1.point5" }
          ]
        },
        {
          title: "codsevent.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/stall.svg", text: "codsevent.keyfeature2.point1" },
            { icon: "icons/requirement.svg", text: "codsevent.keyfeature2.point2" },
            { icon: "icons/approval.svg", text: "codsevent.keyfeature2.point3" },
            { icon: "icons/payment.svg", text: "codsevent.keyfeature2.point4" }
          ]
        },
        {
          title: "codsevent.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/schedule.svg", text: "codsevent.keyfeature3.point1" },
            { icon: "icons/qr.svg", text: "codsevent.keyfeature3.point2" },
            { icon: "icons/sponsor.svg", text: "codsevent.keyfeature3.point3" },
            { icon: "icons/resource.svg", text: "codsevent.keyfeature3.point4" }
          ]
        },
        {
          title: "codsevent.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/notification.svg", text: "codsevent.keyfeature4.point1" },
            { icon: "icons/feedback.svg", text: "codsevent.keyfeature4.point2" },
            { icon: "icons/task.svg", text: "codsevent.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/platform.svg',
          title: 'codsevent.whychoose1.title',
          desc: 'codsevent.whychoose1.desc'
        },
        {
          icon: 'icons/stall.svg',
          title: 'codsevent.whychoose2.title',
          desc: 'codsevent.whychoose2.desc'
        },
        {
          icon: 'icons/sponsor.svg',
          title: 'codsevent.whychoose3.title',
          desc: 'codsevent.whychoose3.desc'
        },
        {
          icon: 'icons/analytics.svg',
          title: 'codsevent.whychoose4.title',
          desc: 'codsevent.whychoose4.desc'
        },
        {
          icon: 'icons/events.svg',
          title: 'codsevent.whychoose5.title',
          desc: 'codsevent.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsevent.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsevent.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsevent.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/billing.svg", text: "codsbill.keyfeature1.point1" },
            { icon: "icons/printer.svg", text: "codsbill.keyfeature1.point2" },
            { icon: "icons/payment.svg", text: "codsbill.keyfeature1.point3" },
            { icon: "icons/gst.svg", text: "codsbill.keyfeature1.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/stock.svg", text: "codsbill.keyfeature2.point1" },
            { icon: "icons/alert.svg", text: "codsbill.keyfeature2.point2" },
            { icon: "icons/category.svg", text: "codsbill.keyfeature2.point3" },
            { icon: "icons/barcode.svg", text: "codsbill.keyfeature2.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/report.svg", text: "codsbill.keyfeature3.point1" },
            { icon: "icons/purchase.svg", text: "codsbill.keyfeature3.point2" },
            { icon: "icons/profit.svg", text: "codsbill.keyfeature3.point3" },
            { icon: "icons/customer.svg", text: "codsbill.keyfeature3.point4" }
          ]
        },
        {
          title: "codsbill.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/expense.svg", text: "codsbill.keyfeature4.point1" },
            { icon: "icons/income.svg", text: "codsbill.keyfeature4.point2" },
            { icon: "icons/cashbook.svg", text: "codsbill.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/easy.svg',
          title: 'codsbill.whychoose1.title',
          desc: 'codsbill.whychoose1.desc'
        },
        {
          icon: 'icons/affordable.svg',
          title: 'codsbill.whychoose2.title',
          desc: 'codsbill.whychoose2.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codsbill.whychoose3.title',
          desc: 'codsbill.whychoose3.desc'
        },
        {
          icon: 'icons/realtime.svg',
          title: 'codsbill.whychoose4.title',
          desc: 'codsbill.whychoose4.desc'
        },
        {
          icon: 'icons/billing.svg',
          title: 'codsbill.whychoose5.title',
          desc: 'codsbill.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsbill.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsbill.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsbill.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/invoice.svg", text: "codspoint.keyfeature1.point1" },
            { icon: "icons/gst.svg", text: "codspoint.keyfeature1.point2" },
            { icon: "icons/barcode.svg", text: "codspoint.keyfeature1.point3" },
            { icon: "icons/billformat.svg", text: "codspoint.keyfeature1.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/inventory.svg", text: "codspoint.keyfeature2.point1" },
            { icon: "icons/alert.svg", text: "codspoint.keyfeature2.point2" },
            { icon: "icons/auto-stock.svg", text: "codspoint.keyfeature2.point3" },
            { icon: "icons/warehouse.svg", text: "codspoint.keyfeature2.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/restaurant.svg", text: "codspoint.keyfeature3.point1" },
            { icon: "icons/counter.svg", text: "codspoint.keyfeature3.point2" },
            { icon: "icons/payment.svg", text: "codspoint.keyfeature3.point3" },
            { icon: "icons/loyalty.svg", text: "codspoint.keyfeature3.point4" }
          ]
        },
        {
          title: "codspoint.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/report.svg", text: "codspoint.keyfeature4.point1" },
            { icon: "icons/profit.svg", text: "codspoint.keyfeature4.point2" },
            { icon: "icons/staff.svg", text: "codspoint.keyfeature4.point3" },
            { icon: "icons/download.svg", text: "codspoint.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/pos.svg',
          title: 'codspoint.whychoose1.title',
          desc: 'codspoint.whychoose1.desc'
        },
        {
          icon: 'icons/inventory.svg',
          title: 'codspoint.whychoose2.title',
          desc: 'codspoint.whychoose2.desc'
        },
        {
          icon: 'icons/billing.svg',
          title: 'codspoint.whychoose3.title',
          desc: 'codspoint.whychoose3.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codspoint.whychoose4.title',
          desc: 'codspoint.whychoose4.desc'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'codspoint.whychoose5.title',
          desc: 'codspoint.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'icons/install.svg',
          desc: 'codspoint.howitworks1'
        },
        {
          icon: 'icons/configure.svg',
          desc: 'codspoint.howitworks2'
        },
        {
          icon: 'icons/pos.svg',
          desc: 'codspoint.howitworks3'
        },
        {
          icon: 'icons/reports.svg',
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
            { icon: "icons/mobile.svg", text: "codslabel.keyfeature1.point1" },
            { icon: "icons/dashboard.svg", text: "codslabel.keyfeature1.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/branch.svg", text: "codslabel.keyfeature2.point1" },
            { icon: "icons/role.svg", text: "codslabel.keyfeature2.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/shelf-life.svg", text: "codslabel.keyfeature3.point1" },
            { icon: "icons/checklist.svg", text: "codslabel.keyfeature3.point2" }
          ]
        },
        {
          title: "codslabel.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/label.svg", text: "codslabel.keyfeature4.point1" },
            { icon: "icons/secure.svg", text: "codslabel.keyfeature4.point2" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/accuracy.svg',
          title: 'codslabel.whychoose1.title',
          desc: 'codslabel.whychoose1.desc'
        },
        {
          icon: 'icons/secure.svg',
          title: 'codslabel.whychoose2.title',
          desc: 'codslabel.whychoose2.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codslabel.whychoose3.title',
          desc: 'codslabel.whychoose3.desc'
        },
        {
          icon: 'icons/payroll.svg',
          title: 'codslabel.whychoose4.title',
          desc: 'codslabel.whychoose4.desc'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'codslabel.whychoose5.title',
          desc: 'codslabel.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codslabel.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codslabel.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codslabel.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/scan.svg", text: "codsaudit.keyfeature1.point1" },
            { icon: "icons/sync.svg", text: "codsaudit.keyfeature1.point2" },
            { icon: "icons/batch.svg", text: "codsaudit.keyfeature1.point3" }
          ]
        },
        {
          title: "codsaudit.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/edit.svg", text: "codsaudit.keyfeature2.point1" },
            { icon: "icons/category.svg", text: "codsaudit.keyfeature2.point2" },
            { icon: "icons/alert.svg", text: "codsaudit.keyfeature2.point3" },
            { icon: "icons/location.svg", text: "codsaudit.keyfeature2.point4" }
          ]
        },
        {
          title: "codsaudit.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/compare.svg", text: "codsaudit.keyfeature3.point1" },
            { icon: "icons/auto-check.svg", text: "codsaudit.keyfeature3.point2" },
            { icon: "icons/report.svg", text: "codsaudit.keyfeature3.point3" }
          ]
        },
        {
          title: "codsaudit.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/report.svg", text: "codsaudit.keyfeature4.point1" },
            { icon: "icons/dashboard.svg", text: "codsaudit.keyfeature4.point2" },
            { icon: "icons/export.svg", text: "codsaudit.keyfeature4.point3" },
            { icon: "icons/user.svg", text: "codsaudit.keyfeature4.point4" },
            { icon: "icons/secure.svg", text: "codsaudit.keyfeature4.point5" },
            { icon: "icons/approval.svg", text: "codsaudit.keyfeature4.point6" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/barcode.svg',
          title: 'codsaudit.whychoose1.title',
          desc: 'codsaudit.whychoose1.desc'
        },
        {
          icon: 'icons/visibility.svg',
          title: 'codsaudit.whychoose2.title',
          desc: 'codsaudit.whychoose2.desc'
        },
        {
          icon: 'icons/reports.svg',
          title: 'codsaudit.whychoose3.title',
          desc: 'codsaudit.whychoose3.desc'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'codsaudit.whychoose4.title',
          desc: 'codsaudit.whychoose4.desc'
        },
        {
          icon: 'icons/efficiency.svg',
          title: 'codsaudit.whychoose5.title',
          desc: 'codsaudit.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsaudit.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsaudit.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsaudit.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/inventory.svg", text: "codsrms.keyfeature1.point1" },
            { icon: "icons/alert.svg", text: "codsrms.keyfeature1.point2" },
            { icon: "icons/kitchen.svg", text: "codsrms.keyfeature1.point3" },
            { icon: "icons/profit.svg", text: "codsrms.keyfeature1.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/attendance.svg", text: "codsrms.keyfeature2.point1" },
            { icon: "icons/salary.svg", text: "codsrms.keyfeature2.point2" },
            { icon: "icons/loan.svg", text: "codsrms.keyfeature2.point3" },
            { icon: "icons/selfservice.svg", text: "codsrms.keyfeature2.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/finance.svg", text: "codsrms.keyfeature3.point1" },
            { icon: "icons/report.svg", text: "codsrms.keyfeature3.point2" },
            { icon: "icons/gst.svg", text: "codsrms.keyfeature3.point3" },
            { icon: "icons/vendor.svg", text: "codsrms.keyfeature3.point4" }
          ]
        },
        {
          title: "codsrms.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/customer.svg", text: "codsrms.keyfeature4.point1" },
            { icon: "icons/feedback.svg", text: "codsrms.keyfeature4.point2" },
            { icon: "icons/outlet.svg", text: "codsrms.keyfeature4.point3" },
            { icon: "icons/menu.svg", text: "codsrms.keyfeature4.point4" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/allinone.svg',
          title: 'codsrms.whychoose1.title',
          desc: 'codsrms.whychoose1.desc'
        },
        {
          icon: 'icons/flexible.svg',
          title: 'codsrms.whychoose2.title',
          desc: 'codsrms.whychoose2.desc'
        },
        {
          icon: 'icons/insights.svg',
          title: 'codsrms.whychoose3.title',
          desc: 'codsrms.whychoose3.desc'
        },
        {
          icon: 'icons/mobileweb.svg',
          title: 'codsrms.whychoose4.title',
          desc: 'codsrms.whychoose4.desc'
        },
        {
          icon: 'icons/customerfirst.svg',
          title: 'codsrms.whychoose5.title',
          desc: 'codsrms.whychoose5.desc'
        }
      ],
      howItWorks: [
        { icon: 'assets/images/work-1.svg', desc: 'codsrms.howitworks1' },
        { icon: 'assets/images/work-2.svg', desc: 'codsrms.howitworks2' },
        { icon: 'assets/images/work-3.svg', desc: 'codsrms.howitworks3' },
        { icon: 'assets/images/work-4.svg', desc: 'codsrms.howitworks4' }
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
            { icon: "icons/stock.svg", text: "codsoptima.keyfeature1.point1" },
            { icon: "icons/update.svg", text: "codsoptima.keyfeature1.point2" },
            { icon: "icons/store.svg", text: "codsoptima.keyfeature1.point3" },
            { icon: "icons/alert.svg", text: "codsoptima.keyfeature1.point4" },
            { icon: "icons/order.svg", text: "codsoptima.keyfeature1.point5" },
            { icon: "icons/dashboard.svg", text: "codsoptima.keyfeature1.point6" },
            { icon: "icons/status.svg", text: "codsoptima.keyfeature1.point7" }
          ]
        },
        {
          title: "codsoptima.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/track.svg", text: "codsoptima.keyfeature2.point1" },
            { icon: "icons/resource.svg", text: "codsoptima.keyfeature2.point2" },
            { icon: "icons/timeline.svg", text: "codsoptima.keyfeature2.point3" },
            { icon: "icons/efficiency.svg", text: "codsoptima.keyfeature2.point4" },
            { icon: "icons/request.svg", text: "codsoptima.keyfeature2.point5" },
            { icon: "icons/vendor.svg", text: "codsoptima.keyfeature2.point6" },
            { icon: "icons/report.svg", text: "codsoptima.keyfeature2.point7" },
            { icon: "icons/stock-update.svg", text: "codsoptima.keyfeature2.point8" }
          ]
        },
        {
          title: "codsoptima.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/delivery.svg", text: "codsoptima.keyfeature3.point1" },
            { icon: "icons/update.svg", text: "codsoptima.keyfeature3.point2" },
            { icon: "icons/report.svg", text: "codsoptima.keyfeature3.point3" },
            { icon: "icons/branch.svg", text: "codsoptima.keyfeature3.point4" }
          ]
        },
        {
          title: "codsoptima.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/admin.svg", text: "codsoptima.keyfeature4.point1" },
            { icon: "icons/rep.svg", text: "codsoptima.keyfeature4.point2" },
            { icon: "icons/customer.svg", text: "codsoptima.keyfeature4.point3" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/production.svg',
          title: 'codsoptima.whychoose1.title',
          desc: 'codsoptima.whychoose1.desc'
        },
        {
          icon: 'icons/ecosystem.svg',
          title: 'codsoptima.whychoose2.title',
          desc: 'codsoptima.whychoose2.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codsoptima.whychoose3.title',
          desc: 'codsoptima.whychoose3.desc'
        },
        {
          icon: 'icons/insights.svg',
          title: 'codsoptima.whychoose4.title',
          desc: 'codsoptima.whychoose4.desc'
        },
        {
          icon: 'icons/secure.svg',
          title: 'codsoptima.whychoose5.title',
          desc: 'codsoptima.whychoose5.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsoptima.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsoptima.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsoptima.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/hr.svg", text: "codspropaylite.keyfeature1.point1" },
            { icon: "icons/attendance.svg", text: "codspropaylite.keyfeature1.point2" },
            { icon: "icons/salary.svg", text: "codspropaylite.keyfeature1.point3" }
          ]
        },
        {
          title: "codspropaylite.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/user.svg", text: "codspropaylite.keyfeature2.point1" },
            { icon: "icons/slip.svg", text: "codspropaylite.keyfeature2.point2" },
            { icon: "icons/attendance.svg", text: "codspropaylite.keyfeature2.point3" }
          ]
        },
        {
          title: "codspropaylite.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/mobile.svg", text: "codspropaylite.keyfeature3.point1" },
            { icon: "icons/responsive.svg", text: "codspropaylite.keyfeature3.point2" }
          ]
        },
        {
          title: "codspropaylite.keyfeature4.title",
          color: "pink",
          points: [
            { icon: "icons/lock.svg", text: "codspropaylite.keyfeature4.point1" },
            { icon: "icons/ui.svg", text: "codspropaylite.keyfeature4.point2" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/paperwork.svg',
          title: 'codspropaylite.whychoose1.title',
          desc: 'codspropaylite.whychoose1.desc'
        },
        {
          icon: 'icons/efficiency.svg',
          title: 'codspropaylite.whychoose2.title',
          desc: 'codspropaylite.whychoose2.desc'
        },
        {
          icon: 'icons/quick-access.svg',
          title: 'codspropaylite.whychoose3.title',
          desc: 'codspropaylite.whychoose3.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codspropaylite.whychoose4.title',
          desc: 'codspropaylite.whychoose4.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codspropaylite.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codspropaylite.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codspropaylite.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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
            { icon: "icons/browse.svg", text: "codsbuylite.keyfeature1.point1" },
            { icon: "icons/cart.svg", text: "codsbuylite.keyfeature1.point2" },
            { icon: "icons/mobile.svg", text: "codsbuylite.keyfeature1.point3" }
          ]
        },
        {
          title: "codsbuylite.keyfeature2.title",
          color: "blue",
          points: [
            { icon: "icons/track.svg", text: "codsbuylite.keyfeature2.point1" },
            { icon: "icons/notification.svg", text: "codsbuylite.keyfeature2.point2" }
          ]
        },
        {
          title: "codsbuylite.keyfeature3.title",
          color: "cyan",
          points: [
            { icon: "icons/payment.svg", text: "codsbuylite.keyfeature3.point1" }
          ]
        },
        {
          title: "codsbuylite.keyfeature4.title",
          color: "green",
          points: [
            { icon: "icons/dashboard.svg", text: "codsbuylite.keyfeature4.point1" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/seamless.svg',
          title: 'codsbuylite.whychoose1.title',
          desc: 'codsbuylite.whychoose1.desc'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'codsbuylite.whychoose2.title',
          desc: 'codsbuylite.whychoose2.desc'
        },
        {
          icon: 'icons/smart.svg',
          title: 'codsbuylite.whychoose3.title',
          desc: 'codsbuylite.whychoose3.desc'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'codsbuylite.whychoose4.title',
          desc: 'codsbuylite.whychoose4.desc'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'codsbuylite.howitworks1'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'codsbuylite.howitworks2'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'codsbuylite.howitworks3'
        },
        {
          icon: 'assets/images/work-4.svg',
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