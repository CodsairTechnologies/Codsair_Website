import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { CommonFooterComponent } from '../common-footer/common-footer.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleview-products',
  standalone: true,
  imports: [CommonNavbarComponent, CommonFooterComponent, CommonModule],
  templateUrl: './singleview-products.component.html',
  styleUrl: './singleview-products.component.css'
})
export class SingleviewProductsComponent {
  productId!: string;
  productData: any;

  products: any = {
    codspropay: {
      hero: {
        title: "Simplify Payroll, Empower Your Workforce",
        subtitle: "CodsProPay is an advanced payroll management software that automates salary processing, attendance tracking, and employee benefits. With powerful integrations like biometrics, WiFi, face recognition, and location-based attendance, CodsProPay is the one-stop solution for smart workforce management.",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsProPay",
        text: [
          "Managing payroll doesn’t need to be complex. CodsProPay is designed for modern businesses to automate HR and payroll tasks with accuracy and ease.",
          "Whether you’re running a small business or a large enterprise, CodsProPay helps save time, reduce errors, and keep your team motivated."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Smart Attendance Integration",
          color: "peach",
          points: [
            { icon: "assets/images/bio.svg", text: "Biometric machine integration" },
            { icon: "icons/wifi.svg", text: "Wi-Fi based check-in system" },
            { icon: "icons/face.svg", text: "Face recognition attendance" },
            { icon: "icons/gps.svg", text: "GPS/location-based attendance" }
          ]
        },
        {
          title: "Automated Payroll",
          color: "blue",
          points: [
            { icon: "icons/salary.svg", text: "Auto salary calculation" },
            { icon: "icons/loan.svg", text: "Advance salary & loan management" },
            { icon: "icons/fine.svg", text: "Fine/penalty management" },
            { icon: "icons/structure.svg", text: "Flexible salary structures" }
          ]
        },
        {
          title: "Employee Self-Service",
          color: "cyan",
          points: [
            { icon: "icons/salary.svg", text: "Download salary slips anytime" },
            { icon: "icons/loan.svg", text: "Track leave balance & attendance" },
            { icon: "icons/fine.svg", text: "Mobile app for attendance marking and payroll details" },
          ]
        }
        ,
        {
          title: "HR and Management Tools",
          color: "blue",
          points: [
            { icon: "icons/salary.svg", text: "Comprehensive reports & analytics" },
            { icon: "icons/loan.svg", text: "Real-time insights into workforce productivityt" },
            { icon: "icons/fine.svg", text: "Role-based access for HR, managers, and employees" },
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/payroll.svg',
          title: 'End-to-End Payroll Solution',
          desc: 'From attendance to payslip, all in one system'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'Mobile-First Design',
          desc: 'Easy access for employees on-the-go.'
        },
        {
          icon: 'icons/accuracy.svg',
          title: 'Accuracy',
          desc: 'Eliminate manual errors in salary calculation.'
        },
        {
          icon: 'icons/secure.svg',
          title: 'Secure & Reliable',
          desc: 'Encrypted data storage with role-based access.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Suitable for startups, SMEs, and enterprises.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Employees mark attendance via mobile app, biometric, or Wi-Fi.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'CodsProPay tracks attendance & working hours.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Payroll is generated instantly with deductions.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Employees download salary slips directly.'
        }
      ],
      cta: {
        title: "Ready to transform your payroll process?",
        text: "Let CodsProPay handle the complexity while you focus on growing your business.",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codsbuy: {
      hero: {
        title: "Your Complete E-Commerce Solution",
        subtitle: " CodsBuy is a powerful e-commerce platform with an advanced admin panel, designed to help businesses sell online with ease. Whether you deal in gold & diamond, fashion, electronics, or lifestyle products, CodsBuy gives you the tools to manage and grow your online store.",
        // image: "assets/images/codsbuy-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsBuy",
        text: [
          "In today’s digital-first world, having an online presence is no longer optional — it’s essential.",
          "CodsBuy simplifies online selling with a secure, scalable, and customizable platform across industries."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Multi-Category E-Commerce",
          color: "peach",
          points: [
            { icon: "assets/images/jewellery.svg", text: "Suitable for jewelry, clothing, electronics, lifestyle products, and more" },
            { icon: "assets/images/catalog-outline.svg", text: "Flexible catalog design for showcasing multiple product types" },
            { icon: "assets/images/filter.svg", text: "Advanced filtering and search options for easy shopping" }
          ]
        },
        {
          title: "Powerful Admin Panel",
          color: "blue",
          points: [
            { icon: "assets/images/products.svg", text: "Manage products, categories, and inventory in real-time" },
            { icon: "assets/images/orders.png", text: "Order management and tracking" },
            { icon: "assets/images/roles.svg", text: "Role-based access for admins and staff" },
            { icon: "assets/images/sales.png", text: "Sales reports and analytics dashboard" }
          ]
        },
        {
          title: "Payments & Checkout",
          color: "cyan",
          points: [
            { icon: "assets/images/payment.png", text: "Multiple payment gateway integrations" },
            { icon: "assets/images/secure.png", text: "Secure transactions with encrypted processing" },
            { icon: "assets/images/returns.png", text: "Easy returns and refund management" },
            { icon: "assets/images/cart.png", text: "Cart & wishlist features for customers" }
          ]
        },
        {
          title: "Customer Engagement Tools",
          color: "pink",
          points: [
            { icon: "assets/images/account.png", text: "Customer accounts and order history" },
            { icon: "assets/images/loyalty.png", text: "Loyalty points, offers, and discount management" },
            { icon: "assets/images/reviews.png", text: "Integrated reviews & ratings system" },
            { icon: "assets/images/notifications.png", text: "Push notifications and email marketing" }
          ]
        },
        // {
        //   title: "Smart Inventory & Logistics",
        //   color: "blue",
        //   points: [
        //     { icon: "icons/stock.svg", text: "Real-time stock updates" },
        //     { icon: "icons/alert.svg", text: "Low-stock alerts" },
        //     { icon: "icons/delivery.svg", text: "Delivery & shipping management" },
        //     { icon: "icons/vendor.svg", text: "Vendor and supplier tracking" }
        //   ]
        // }
      ],
      whyChoose: [
        {
          icon: 'icons/versatile.svg',
          title: 'Versatile',
          desc: 'Ideal for jewelry, fashion, electronics, and more.'
        },
        {
          icon: 'icons/customizable.svg',
          title: 'Customizable',
          desc: 'Tailor the design and features to your brand.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Grow from a small store to a multi-vendor marketplace.'
        },
        {
          icon: 'icons/analytics.svg',
          title: 'Data-Driven',
          desc: 'Insights and analytics for smarter decisions.'
        },
        {
          icon: 'icons/secure.svg',
          title: 'Secure & Reliable',
          desc: 'Protect your customers and business with enterprise-grade security.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Set up your store with CodsBuy.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Add products & manage inventory.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Start selling online with secure payments.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Track orders & review analytics.'
        }
      ],
      cta: {
        title: "Ready to start selling online?",
        text: "Launch your e-commerce store with CodsBuy and grow with confidence.",
        buttons: ["Get Started", "Request a Demo"]
      }
    },

    codscare: {
      hero: {
        title: "Smart Healthcare Management for Dental & Dermatology Clinics",
        subtitle: "CodsCare is an advanced healthcare management software designed specifically for dermatology and dental clinics/hospitals. With dedicated modules for patients, doctors, reception, labs, and admin, CodsCare makes consultations, prescriptions, and reports seamless, secure, and efficient. ",
        // image: "assets/images/codscare-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsCare",
        text: [
          "Managing a clinic or hospital goes beyond patient care — it’s about smooth operations, secure data, and efficient communication.",
          "CodsCare provides dedicated modules for patients, doctors, reception, labs, and admin."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Patient Module",
          color: "peach",
          points: [
            { icon: "icons/patient.svg", text: "Patient registration & profile management" },
            { icon: "icons/calendar.svg", text: "Appointment booking & scheduling" },
            { icon: "icons/report.svg", text: "Access to prescriptions and lab reports" },
            { icon: "icons/history.svg", text: "Secure patient history tracking" }
          ]
        },
        {
          title: "Doctor Module",
          color: "blue",
          points: [
            { icon: "icons/prescription.svg", text: "Add and manage prescriptions digitally" },
            { icon: "icons/history.svg", text: "View complete patient history" },
            { icon: "icons/lab.svg", text: "Upload & review lab reports" },
            { icon: "icons/remote.svg", text: "Access from clinic or remotely" }
          ]
        },
        {
          title: "Reception Module",
          color: "cyan",
          points: [
            { icon: "icons/calendar.svg", text: "Appointment booking & rescheduling" },
            { icon: "icons/queue.svg", text: "Queue and patient flow management" },
            { icon: "icons/bill.svg", text: "Billing & invoice generation" },
            { icon: "icons/updates.svg", text: "Real-time updates for patients and doctors" }
          ]
        },
        {
          title: "Lab Module",
          color: "pink",
          points: [
            { icon: "icons/lab.svg", text: "Upload and manage lab reports securely" },
            { icon: "icons/integration.svg", text: "Integration with patient and doctor profiles" },
            { icon: "icons/notification.svg", text: "Automated notifications for results" },
            { icon: "icons/branch.svg", text: "Branch-wise lab management" }
          ]
        },
        // {
        //   title: "Admin Module",
        //   color: "blue",
        //   points: [
        //     { icon: "icons/staff.svg", text: "Manage doctors, staff, and reception teams" },
        //     { icon: "icons/branch.svg", text: "Multi-branch or single-branch control" },
        //     { icon: "icons/report.svg", text: "Financial reports and analytics" },
        //     { icon: "icons/security.svg", text: "Role-based access and security" }
        //   ]
        // }
      ],
      whyChoose: [
        {
          icon: 'icons/clinic.svg',
          title: 'Specialized for Dermatology & Dental Clinics',
          desc: 'Tailored features for your practice.'
        },
        {
          icon: 'icons/secure.svg',
          title: 'Secure & Compliant',
          desc: 'Advanced security for sensitive health data.'
        },
        {
          icon: 'icons/branch.svg',
          title: 'Branch Management',
          desc: 'Handle single or multiple clinics with ease.'
        },
        {
          icon: 'icons/report.svg',
          title: 'Digital Prescriptions & Reports',
          desc: 'Paperless and instant sharing.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable & Reliable',
          desc: 'From small clinics to large hospitals.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Reception books and manages appointments.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Doctors consult patients and add prescriptions.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Labs upload test results and reports securely.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Patients access prescriptions and reports, while admins monitor operations.'
        }
      ],
      cta: {
        title: "Ready to take your clinic management to the next level?",
        text: "Switch to CodsCare and experience secure, smart, and efficient healthcare management.",
        buttons: ["Book a Demo", "Contact Us"]
      }
    },

    codshms: {
      hero: {
        title: "Smart Hostel Management, Simplified",
        subtitle: "CodsHMS is a complete Hostel Management Software with a built-in website. From showcasing hostel details and room availability online to managing kitchen stock, purchases, and student records in the admin panel — CodsHMS makes hostel management efficient, transparent, and secure.",
        // image: "assets/images/codshms-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsHMS",
        text: [
          "Managing a hostel requires balancing multiple operations.",
          "CodsHMS offers a secure platform for room allocation, fee collection, and student management."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Public Website",
          color: "peach",
          points: [
            { icon: "icons/web.svg", text: "Hostel introduction and about section" },
            { icon: "icons/status.svg", text: "Room availability status (vacant/occupied)" },
            { icon: "icons/booking.svg", text: "Online inquiry & booking requests" },
            { icon: "icons/gallery.svg", text: "Photo gallery and facilities showcase" }
          ]
        },
        {
          title: "Student Management",
          color: "blue",
          points: [
            { icon: "icons/student.svg", text: "Admissions and student profiles" },
            { icon: "icons/room.svg", text: "Room allocations and transfers" },
            { icon: "icons/attendance.svg", text: "Attendance tracking" },
            { icon: "icons/report.svg", text: "Student history and records" }
          ]
        },
        {
          title: "Kitchen & Finance",
          color: "cyan",
          points: [
            { icon: "icons/kitchen.svg", text: "Kitchen & Stock Management: track purchases and daily usage" },
            { icon: "icons/expense.svg", text: "Expense monitoring and control" },
            { icon: "icons/finance.svg", text: "Fee collection & payment records" },
            { icon: "icons/chart.svg", text: "Financial reports and expense analytics" }
          ]
        },
        {
          title: "Multi-Branch & Analytics",
          color: "pink",
          points: [
            { icon: "icons/branch.svg", text: "Multi-Branch Support: manage single or multiple hostels" },
            { icon: "icons/dashboard.svg", text: "Centralized admin dashboard" },
            { icon: "icons/report.svg", text: "Reports & Analytics for smarter decisions" },
            { icon: "icons/security.svg", text: "Secure role-based access" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/website.svg',
          title: 'Complete Solution',
          desc: 'Public website + hostel management software in one.'
        },
        {
          icon: 'icons/student.svg',
          title: 'Student-Centric',
          desc: 'Easy management of student records, attendance, and fees.'
        },
        {
          icon: 'icons/kitchen.svg',
          title: 'Smart Stock & Kitchen Control',
          desc: 'Reduce wastage and track expenses.'
        },
        {
          icon: 'icons/transparent.svg',
          title: 'Transparency',
          desc: 'Parents/students can check hostel info and availability online.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Works for small hostels, PGs, or large multi-branch hostels.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Students/parents visit the website to view hostel details and room availability.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Admin manages admissions, room allocations, and student data in the system.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Kitchen staff update purchase details and stock usage through the admin panel.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Finance and reports are generated automatically for transparency.'
        }
      ],
      cta: {
        title: "Ready to digitize your hostel?",
        text: "Switch to CodsHMS for smarter hostel operations.",
        buttons: ["Request Demo", "Contact Us"]
      }
    },

    codsevent: {
      hero: {
        title: "Plan, Manage, and Execute Events Effortlessly",
        subtitle: "CodsEvent is an advanced event management software built to handle everything from corporate expos to private functions. With tools for stall management, vendor needs, and participant requirements, it helps organizers deliver seamless and professional events every time.",
        // image: "assets/images/codsevent-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsEvent",
        text: [
          "CodsEvent helps organizers deliver seamless events with registration, ticketing, and scheduling tools.",
          "Vendors, staff, and participants get one connected platform."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Admin Panel",
          color: "peach",
          points: [
            { icon: "icons/dashboard.svg", text: "Create and manage multiple events from one dashboard" },
            { icon: "icons/stall.svg", text: "Real-time stall allocation and availability updates" },
            { icon: "icons/vendor.svg", text: "Vendor and exhibitor management system" },
            { icon: "icons/finance.svg", text: "Finance & billing with invoices, receipts, and sponsorship tracking" },
            { icon: "icons/report.svg", text: "Detailed reports on stall occupancy, ticket sales, and expenses" },
            // { icon: "icons/staff.svg", text: "Manage staff and volunteer assignments" }
          ]
        },
        {
          title: "Stall & Vendor Management",
          color: "blue",
          points: [
            { icon: "icons/stall.svg", text: "Allocate and track stalls with real-time updates" },
            { icon: "icons/requirement.svg", text: "Vendors can request electricity, WiFi, catering, furniture, and custom requirements" },
            { icon: "icons/approval.svg", text: "Automatic approval/rejection workflows" },
            { icon: "icons/payment.svg", text: "Vendor billing and payment tracking" }
          ]
        },
        {
          title: "Event Planning & Scheduling",
          color: "cyan",
          points: [
            { icon: "icons/schedule.svg", text: "Publish event schedules, agendas, and speaker sessions" },
            { icon: "icons/qr.svg", text: "Attendee registration and QR code-based check-in system" },
            { icon: "icons/sponsor.svg", text: "Sponsor package management and promotions" },
            { icon: "icons/resource.svg", text: "Resource allocation (equipment, manpower, logistics)" }
          ]
        },
        {
          title: "Communication & Engagement",
          color: "pink",
          points: [
            { icon: "icons/notification.svg", text: "Send SMS, email, or in-app notifications to vendors and attendees" },
            { icon: "icons/feedback.svg", text: "Integrated feedback & survey forms" },
            { icon: "icons/task.svg", text: "Task assignment and progress tracking for teams" }
          ]
        },
        // {
        //   title: "Reports & Analytics",
        //   color: "blue",
        //   points: [
        //     { icon: "icons/revenue.svg", text: "Insights on revenue, ticket sales, and vendor participation" },
        //     { icon: "icons/availability.svg", text: "Real-time stall availability overview" },
        //     { icon: "icons/analytics.svg", text: "Post-event reports with engagement data and ROI analysis" }
        //   ]
        // }
      ],
      whyChoose: [
        {
          icon: 'icons/platform.svg',
          title: 'Centralized Platform',
          desc: 'For organizers, vendors, and attendees'
        },
        {
          icon: 'icons/stall.svg',
          title: 'Stall & Vendor Management',
          desc: 'Simplifies stall allocation and vendor request tracking'
        },
        {
          icon: 'icons/sponsor.svg',
          title: 'Sponsor Visibility',
          desc: 'Enhances sponsor visibility and attendee engagement'
        },
        {
          icon: 'icons/analytics.svg',
          title: 'Real-Time Insights',
          desc: 'Provides real-time updates and powerful analytics'
        },
        {
          icon: 'icons/events.svg',
          title: 'Multi-Event Support',
          desc: 'Supports single or multi-event management'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Create and publish event.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Manage vendors and staff.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Attendees register and check-in.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Track engagement and feedback.'
        }
      ],
      cta: {
        title: "Ready to simplify your events?",
        text: "Switch to CodsEvent for seamless event management.",
        buttons: ["Request Demo", "Contact Us"]
      }
    },

    codsbill: {
      hero: {
        title: "Bill Anywhere. Manage Everything.",
        subtitle: " CodBill is a mobile-based billing and business management software designed for shops of all sizes. From small retail outlets to restaurants, CodBill makes sales, billing, and inventory simple—with Bluetooth printing and all-in-one management features..",
        // image: "assets/images/codsbill-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsBill",
        text: [
          "CodsBill enables fast, reliable billing.",
          "Includes GST compliance, reports, and inventory features."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Smart Billing",
          color: "peach",
          points: [
            { icon: "icons/billing.svg", text: "Mobile-based billing with simple UI" },
            { icon: "icons/printer.svg", text: "Integrated with Bluetooth printer for instant receipts" },
            { icon: "icons/payment.svg", text: "Multiple payment modes (Cash, UPI, Card, Wallets)" },
            { icon: "icons/gst.svg", text: "GST/Tax-ready billing" }
          ]
        },
        {
          title: "Stock & Inventory Management",
          color: "blue",
          points: [
            { icon: "icons/stock.svg", text: "Add, update, and track stock in real time" },
            { icon: "icons/alert.svg", text: "Low-stock alerts and expiry tracking" },
            { icon: "icons/category.svg", text: "Multi-category and multi-location stock handling" },
            { icon: "icons/barcode.svg", text: "Barcode scanning & product search" }
          ]
        },
        {
          title: "Sales & Purchase Tracking",
          color: "cyan",
          points: [
            { icon: "icons/report.svg", text: "Daily/Monthly sales reports" },
            { icon: "icons/purchase.svg", text: "Purchase records with supplier details" },
            { icon: "icons/profit.svg", text: "Track profit & margins easily" },
            { icon: "icons/customer.svg", text: "Customer & vendor management" }
          ]
        },
        {
          title: "Expense & Income Tracking",
          color: "pink",
          points: [
            { icon: "icons/expense.svg", text: "Record daily expenses" },
            { icon: "icons/income.svg", text: "Manage income sources" },
            { icon: "icons/cashbook.svg", text: "Automated cashbook & profit/loss reports" }
          ]
        },
        // {
        //   title: "Restaurant & Shop Modules",
        //   color: "blue",
        //   points: [
        //     { icon: "icons/restaurant.svg", text: "Table-wise/KOT (Kitchen Order Ticket) billing" },
        //     { icon: "icons/modifier.svg", text: "Item modifiers (extra cheese, toppings, etc.)" },
        //     { icon: "icons/offer.svg", text: "Combo offers, discounts, loyalty points" },
        //     { icon: "icons/shop.svg", text: "Works for grocery, salons, cafes, electronics, and more" }
        //   ]
        // },
        // {
        //   title: "User Roles & Security",
        //   color: "cyan",
        //   points: [
        //     { icon: "icons/user.svg", text: "Multi-user access (Cashier, Manager, Owner)" },
        //     { icon: "icons/role.svg", text: "Role-based permissions" },
        //     { icon: "icons/backup.svg", text: "Secure cloud backup & restore" }
        //   ]
        // }
      ],
      whyChoose: [
        {
          icon: 'icons/easy.svg',
          title: 'Easy to Use',
          desc: 'No technical knowledge required'
        },
        {
          icon: 'icons/affordable.svg',
          title: 'Affordable & Mobile-First',
          desc: 'Perfect for small shops'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Works for retail, restaurants, and large stores'
        },
        {
          icon: 'icons/realtime.svg',
          title: 'Real-Time Tracking',
          desc: 'Sales, stock, expenses in one app'
        },
        {
          icon: 'icons/billing.svg',
          title: 'Paperless & Fast',
          desc: 'Bluetooth billing in seconds'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Set up your business profile.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Add items & tax rates.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Generate bills instantly.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Track sales and taxes.'
        }
      ],
      cta: {
        title: "Simplify your billing today",
        text: "Start billing smarter with CodsBill.",
        buttons: ["Request Demo", "Download App"]
      }
    },

    codspoint: {
      hero: {
        title: "Smart Billing. Smarter Business.",
        subtitle: "CodsPoint is a flexible POS & billing software built for restaurants, supermarkets, and retail businesses. With smart billing, inventory tracking, and stock management, CodsPoint helps you streamline sales, reduce errors, and boost profitability.",
        // image: "assets/images/codspoint-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsPoint",
        text: [
          "CodsPoint simplifies sales and stock tracking.",
          "Works for retail shops, supermarkets, and distributors."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Fast & Reliable Billing",
          color: "peach",
          points: [
            { icon: "icons/invoice.svg", text: "Quick invoice generation" },
            { icon: "icons/gst.svg", text: "GST & tax-ready bills" },
            { icon: "icons/barcode.svg", text: "Barcode & QR code scanning support" },
            { icon: "icons/billformat.svg", text: "Customizable bill formats" }
          ]
        },
        {
          title: "Smart Inventory & Stock Management",
          color: "blue",
          points: [
            { icon: "icons/inventory.svg", text: "Real-time inventory updates" },
            { icon: "icons/alert.svg", text: "Low-stock alerts & expiry management" },
            { icon: "icons/auto-stock.svg", text: "Automatic stock deduction on sales" },
            { icon: "icons/warehouse.svg", text: "Multi-location stock tracking" }
          ]
        },
        {
          title: "POS Features",
          color: "cyan",
          points: [
            { icon: "icons/restaurant.svg", text: "Works for restaurants, supermarkets, and retail shops" },
            { icon: "icons/counter.svg", text: "Multi-counter and multi-branch support" },
            { icon: "icons/payment.svg", text: "Cash, card, UPI & wallet payment options" },
            { icon: "icons/loyalty.svg", text: "Discounts, offers & loyalty programs" }
          ]
        },
        {
          title: "Reports & Analytics",
          color: "pink",
          points: [
            { icon: "icons/report.svg", text: "Daily, weekly, and monthly sales reports" },
            { icon: "icons/profit.svg", text: "Expense & profit tracking" },
            { icon: "icons/staff.svg", text: "Staff performance reports" },
            { icon: "icons/download.svg", text: "Downloadable insights for business growth" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/pos.svg',
          title: 'Universal POS Solution',
          desc: 'Suitable for restaurants, supermarkets, and retail.'
        },
        {
          icon: 'icons/inventory.svg',
          title: 'Smart Inventory',
          desc: 'Keep track of every product in real-time.'
        },
        {
          icon: 'icons/billing.svg',
          title: 'Fast & Secure Billing',
          desc: 'Reduce errors and save time.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Works for small businesses and large enterprises alike.'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'Mobile & Desktop Access',
          desc: 'Manage your business from anywhere.'
        }
      ],
      howItWorks: [
        {
          icon: 'icons/install.svg',
          desc: 'Install CodsPoint on your system.'
        },
        {
          icon: 'icons/configure.svg',
          desc: 'Configure products & pricing.'
        },
        {
          icon: 'icons/pos.svg',
          desc: 'Start billing with barcode/POS.'
        },
        {
          icon: 'icons/reports.svg',
          desc: 'Review sales reports anytime.'
        }
      ],
      cta: {
        title: "Upgrade your billing system",
        text: "Run your shop smarter with CodsPoint.",
        buttons: ["Request Demo", "Get Started"]
      }
    },


    codslabel: {
      hero: {
        title: "Smart Label Printing for Smarter Food Safety.",
        subtitle: " CodsLabel is an advanced mobile app with a powerful web dashboard, designed to simplify label printing for food production shops. From shelf-life tracking to expiry management, CodsLabel ensures accuracy, compliance, and efficiency in every step",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsLabel",
        text: [
          " CodsLabel is a complete label printing and food management solution that helps businesses manage their food products effectively. It automatically calculates the Manufacturing Date (MFD) and Expiry Date based on predefined shelf-life details. With multi-role access and seamless integration across multiple branches, CodsLabel ensures food quality and compliance without manual errors.",
          " Whether you run a single food outlet or manage multiple production shops, CodsLabel brings clarity, speed, and automation to your labeling process."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Mobile & Admin Dashboard",
          color: "peach",
          points: [
            { icon: "icons/mobile.svg", text: "Manage labels and production data from anywhere" },
            { icon: "icons/dashboard.svg", text: "Centralized admin dashboard for oversight" }
          ]
        },
        {
          title: "Multi-Branch & Role Management",
          color: "blue",
          points: [
            { icon: "icons/branch.svg", text: "Handle multiple food production shops effortlessly" },
            { icon: "icons/role.svg", text: "Employee, Store, Area Manager & Admin modules" }
          ]
        },
        {
          title: "Smart Production Tracking",
          color: "cyan",
          points: [
            { icon: "icons/shelf-life.svg", text: "Set shelf-life once; system calculates MFD & expiry automatically" },
            { icon: "icons/checklist.svg", text: "Ensure production and compliance checks are followed" }
          ]
        },
        {
          title: "Secure & Smart Labeling",
          color: "pink",
          points: [
            { icon: "icons/label.svg", text: "Generate accurate labels instantly with all required details" },
            { icon: "icons/secure.svg", text: "Data protection and accurate reporting for every product" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/accuracy.svg',
          title: 'Reduce Manual Errors',
          desc: 'Minimize mistakes in label printing with automation.'
        },
        {
          icon: 'icons/secure.svg',
          title: 'Compliance Ready',
          desc: 'Ensure full adherence to food safety standards.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Centralized Control',
          desc: 'Manage and monitor multiple shops from one system.'
        },
        {
          icon: 'icons/payroll.svg',
          title: 'Save Time',
          desc: 'Automated date calculations streamline operations.'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'Role-Based Access',
          desc: 'Improve accountability with secure, permission-based access.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Employee Module – Print labels and update product details quickly.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Store Module – Manage store-level stock and checklist.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Area Manager Module – Oversee multiple shops and ensure compliance.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Admin Module – Complete control over food items, shelf-life data, employees, and reports.'
        }
      ],
      cta: {
        title: "Print Smarter. Manage Better. Ensure Safer Food with CodsLabel.",
        text: "Get Started with CodsLabel Today!",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codsAudit: {
      hero: {
        title: "Audit Smarter. Manage Better.",
        subtitle: " CodsAudit simplifies stock auditing with barcode scanning, real-time tracking, and smart stock management—all from your mobile app. ",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsAudit",
        text: [
          " CodsAudit is a stock auditing and inventory management solution designed for businesses that want complete control over their inventory.",
          " With its mobile barcode scanning feature, CodsAudit makes it easy to add, verify, and manage stock directly from your smartphone. It reduces manual errors, saves time, and provides real-time visibility into your stock flow."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Mobile App with Barcode Scanning",
          color: "peach",
          points: [
            { icon: "icons/scan.svg", text: "Scan product barcodes to add or audit stock instantly" },
            { icon: "icons/sync.svg", text: "Works both online and offline with sync capability" },
            { icon: "icons/batch.svg", text: "Supports batch & serial number management" }
          ]
        },
        {
          title: "Smart Stock Management",
          color: "blue",
          points: [
            { icon: "icons/edit.svg", text: "Add, edit, or remove stock items on the go" },
            { icon: "icons/category.svg", text: "Categorize items (electronics, apparel, FMCG, etc.)" },
            { icon: "icons/alert.svg", text: "Stock level alerts for low or excess inventory" },
            { icon: "icons/location.svg", text: "Multi-location stock handling" }
          ]
        },
        {
          title: "Auditing & Verification",
          color: "cyan",
          points: [
            { icon: "icons/compare.svg", text: "Compare physical stock with system records" },
            { icon: "icons/auto-check.svg", text: "Automated discrepancy detection" },
            { icon: "icons/report.svg", text: "Generate audit reports with variances highlighted" }
          ]
        },
        {
          title: "Reports & User Management",
          color: "pink",
          points: [
            { icon: "icons/report.svg", text: "Daily, weekly, and monthly stock reports" },
            { icon: "icons/dashboard.svg", text: "Real-time dashboards for stock movement" },
            { icon: "icons/export.svg", text: "Export reports in Excel/PDF for management review" },
            { icon: "icons/user.svg", text: "Role-based access for auditors, staff, and managers" },
            { icon: "icons/secure.svg", text: "Secure login with activity tracking" },
            { icon: "icons/approval.svg", text: "Approval workflows for corrections" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/barcode.svg',
          title: 'Faster Audits',
          desc: 'Error-free stock audits with barcode scanning.'
        },
        {
          icon: 'icons/visibility.svg',
          title: 'Real-Time Visibility',
          desc: 'Track stock across multiple locations instantly.'
        },
        {
          icon: 'icons/reports.svg',
          title: 'Automated Reports',
          desc: 'Discrepancy reports generated to reduce losses.'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'Mobile-First Solution',
          desc: 'Easy and quick access anytime, anywhere.'
        },
        {
          icon: 'icons/efficiency.svg',
          title: 'Improved Efficiency',
          desc: 'Boost transparency, accuracy, and operations.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Scan product barcodes using the mobile app to add or audit stock instantly.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Compare physical stock with system records and detect discrepancies in real time.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Generate instant audit reports and track stock movement across locations.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Manage approvals, user roles, and keep your inventory accurate and transparent.'
        }
      ],
      cta: {
        title: "CodsAudit makes stock auditing simple, smart, and stress-free.",
        text: "Get Started with CodsLabel Today! Contact Codsair Technologies and bring efficiency to your inventory management today!",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codsRMS: {
      hero: {
        title: "Smart Restaurant Management, All in One Place",
        subtitle: " CodsRMS is a complete restaurant management system that integrates ERP, Payroll, CRM, and Accounts into a single platform. From stock control to staff attendance, customer engagement, and financials — CodsRMS helps restaurants run efficiently and profitably. ",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About codsRMS",
        text: [
          " Running a restaurant is more than just serving food — it’s about balancing operations, managing staff, monitoring inventory, and keeping customers happy.",
          " CodsRMS is designed for restaurants of all sizes — from single outlets to multibranch chains. With its integrated modules for ERP, Payroll, CRM, and Accounts, CodsRMS gives you complete visibility and control over your restaurant operations."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Stock & Asset Management",
          color: "peach",
          points: [
            { icon: "icons/inventory.svg", text: "Real-time inventory tracking" },
            { icon: "icons/alert.svg", text: "Low-stock alerts & expiry management" },
            { icon: "icons/kitchen.svg", text: "Kitchen asset and supply tracking" },
            { icon: "icons/profit.svg", text: "Reduce wastage and maximize profits" }
          ]
        },
        {
          title: "Attendance & Payroll Management",
          color: "blue",
          points: [
            { icon: "icons/attendance.svg", text: "Biometric, Wi-Fi, face recognition & GPS attendance" },
            { icon: "icons/salary.svg", text: "Auto salary calculation" },
            { icon: "icons/loan.svg", text: "Advance salary, loan, fine & deduction management" },
            { icon: "icons/selfservice.svg", text: "Employee self-service portal for payslips & attendance" }
          ]
        },
        {
          title: "Accounts & Finance Management",
          color: "cyan",
          points: [
            { icon: "icons/finance.svg", text: "End-to-end expense, purchase, and revenue tracking" },
            { icon: "icons/report.svg", text: "Automated financial reports & analytics" },
            { icon: "icons/gst.svg", text: "GST & tax-ready accounting" },
            { icon: "icons/vendor.svg", text: "Vendor and supplier payment management" }
          ]
        },
        {
          title: "CRM & Multi-Outlet Management",
          color: "pink",
          points: [
            { icon: "icons/customer.svg", text: "Centralized customer database & loyalty programs" },
            { icon: "icons/feedback.svg", text: "Customer feedback tracking & marketing tools" },
            { icon: "icons/outlet.svg", text: "Manage single or multiple restaurants from one dashboard" },
            { icon: "icons/menu.svg", text: "Centralized menu, pricing, and branch-wise performance reports" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/allinone.svg',
          title: 'All-in-One Restaurant Solution',
          desc: 'ERP + Payroll + CRM + Accounts in one platform.'
        },
        {
          icon: 'icons/flexible.svg',
          title: 'Flexible & Scalable',
          desc: 'Perfect for single outlets or multi-branch chains.'
        },
        {
          icon: 'icons/insights.svg',
          title: 'Smart Insights',
          desc: 'Real-time reports for better decision making.'
        },
        {
          icon: 'icons/mobileweb.svg',
          title: 'Mobile & Web Access',
          desc: 'Manage your business from anywhere.'
        },
        {
          icon: 'icons/customerfirst.svg',
          title: 'Customer-First Approach',
          desc: 'Focus on service while CodsRMS handles operations.'
        }
      ],
      howItWorks: [
        { icon: 'assets/images/work-1.svg', desc: 'Set up CodsRMS and configure your restaurant or chain.' },
        { icon: 'assets/images/work-2.svg', desc: 'Manage stock, staff, payroll, and accounts seamlessly.' },
        { icon: 'assets/images/work-3.svg', desc: 'Engage customers with CRM features & loyalty programs.' },
        { icon: 'assets/images/work-4.svg', desc: 'Access real-time reports and insights for growth.' }
      ],
      cta: {
        title: "Take your restaurant to the next level with CodsRMS. ",
        text: "Simplify management. Maximize profits. Delight customers.",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codsOptima: {
      hero: {
        title: "Streamline Production. Simplify Management.",
        subtitle: "CodsOptima is a complete Production Management Software with web and mobile apps for admins, representatives, and customers. From stock management to order processing, production tracking, purchases, and deliveries — CodsOptima helps you run your production business smarter and faster.",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About codsOptima",
        text: [
          " Running a restaurant is more than just serving food — it’s about balancing operations, managing staff, monitoring inventory, and keeping customers happy.Managing production is complex — balancing stock, orders, purchases, and delivery while ensuring smooth operations. CodsOptima centralizes it all into one platform, helping businesses achieve efficiency, reduce errors, and improve transparency.",
          "  With mobile apps for representatives and customers, and a powerful admin web system, CodsOptima ensures everyone in the chain is connected and informed."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Stock & Order Management",
          color: "peach",
          points: [
            { icon: "icons/stock.svg", text: "Real-time stock monitoring" },
            { icon: "icons/update.svg", text: "Automatic updates on usage and replenishment" },
            { icon: "icons/store.svg", text: "Manage multiple stores and godowns" },
            { icon: "icons/alert.svg", text: "Low-stock alerts" },
            { icon: "icons/order.svg", text: "Customer & Representative apps for order placement and follow-ups" },
            { icon: "icons/dashboard.svg", text: "Admin dashboard for approvals and tracking" },
            { icon: "icons/status.svg", text: "Automated order status updates" }
          ]
        },
        {
          title: "Production & Purchase",
          color: "blue",
          points: [
            { icon: "icons/track.svg", text: "Track raw materials to finished goods" },
            { icon: "icons/resource.svg", text: "Allocate resources to production batches" },
            { icon: "icons/timeline.svg", text: "Monitor progress and timelines" },
            { icon: "icons/efficiency.svg", text: "Reduce wastage and improve efficiency" },
            { icon: "icons/request.svg", text: "Manage purchase requests & approvals" },
            { icon: "icons/vendor.svg", text: "Vendor & supplier tracking" },
            { icon: "icons/report.svg", text: "Purchase history and expense reports" },
            { icon: "icons/stock-update.svg", text: "Integrated with stock updates" }
          ]
        },
        {
          title: "Delivery & Logistics",
          color: "cyan",
          points: [
            { icon: "icons/delivery.svg", text: "Assign deliveries and track status" },
            { icon: "icons/update.svg", text: "Real-time updates for customers" },
            { icon: "icons/report.svg", text: "Delivery reports and proof of delivery" },
            { icon: "icons/branch.svg", text: "Integration with multiple branches" }
          ]
        },
        {
          title: "Role-Based Applications",
          color: "pink",
          points: [
            { icon: "icons/admin.svg", text: "Admin Web Portal – Full control over production, stock & delivery" },
            { icon: "icons/rep.svg", text: "Representative App – Manage orders, customers & follow-ups" },
            { icon: "icons/customer.svg", text: "Customer App – Place orders, view status & receive notifications" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/production.svg',
          title: 'End-to-End Production Solution',
          desc: 'From raw material to delivery.'
        },
        {
          icon: 'icons/ecosystem.svg',
          title: 'Connected Ecosystem',
          desc: 'Web + apps for admin, reps, and customers.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable',
          desc: 'Works for small production units or large manufacturing companies.'
        },
        {
          icon: 'icons/insights.svg',
          title: 'Real-Time Insights',
          desc: 'Smarter decisions with live reports.'
        },
        {
          icon: 'icons/secure.svg',
          title: 'Secure & Reliable',
          desc: 'Protect your data with advanced security.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Customers place orders via app or through representatives.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Orders are processed & approved in the admin portal.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Stock, purchases, and production cycle are managed seamlessly.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Delivery is assigned & completed with real-time customer updates.'
        }
      ],
      cta: {
        title: "Transform the way you manage production.",
        text: "Choose CodsOptima for a faster, smarter, and connected production process.",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codspropaylite: {
      hero: {
        title: "Simplifying Employee Management.",
        subtitle: "CodsProPay (Lite) is a streamlined version of our advanced payroll system, designed to make HR and Employee management simple, fast, and effective. Perfect for small and growing businesses.",
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsProPay (Lite)",
        text: [
          " Managing employees doesn’t have to be complicated. CodsProPay (Lite) brings the essential HR and employee features into a mobile-friendly, easy-to-use platform. From employee records to attendance and salary details, everything is organized in one place.",
          " This version is specially designed for businesses that need basic employee management without the complexity of a full payroll suite."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "HR Module",
          color: "peach",
          points: [
            { icon: "icons/hr.svg", text: "Manage employee data" },
            { icon: "icons/attendance.svg", text: "Track attendance & leave" },
            { icon: "icons/salary.svg", text: "Maintain salary details" }
          ]
        },
        {
          title: "Employee Module",
          color: "blue",
          points: [
            { icon: "icons/user.svg", text: "Employees can view personal details" },
            { icon: "icons/slip.svg", text: "Download salary slips anytime" },
            { icon: "icons/attendance.svg", text: "Check attendance records" }
          ]
        },
        {
          title: "Mobile-Friendly",
          color: "cyan",
          points: [
            { icon: "icons/mobile.svg", text: "Access anytime, anywhere" },
            { icon: "icons/responsive.svg", text: "Optimized for all devices" }
          ]
        },
        {
          title: "Secure & Simple",
          color: "pink",
          points: [
            { icon: "icons/lock.svg", text: "Protect sensitive employee data" },
            { icon: "icons/ui.svg", text: "Simple and user-friendly interface" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/paperwork.svg',
          title: 'Reduce Paperwork',
          desc: 'Cut down on manual errors and save time with automation.'
        },
        {
          icon: 'icons/efficiency.svg',
          title: 'Improve HR Efficiency',
          desc: 'Digitize records and streamline HR processes.'
        },
        {
          icon: 'icons/quick-access.svg',
          title: 'Quick Employee Access',
          desc: 'Give employees instant access to their information.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'Scalable & Flexible',
          desc: 'Perfect for startups, small shops, and growing firms.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Employees mark attendance via mobile app, biometric, or Wi-Fi.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'CodsProPay tracks attendance & working hours.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Payroll is generated instantly with deductions.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Employees download salary slips directly.'
        }
      ],
      cta: {
        title: "Ready to transform your payroll process?",
        text: "Let CodsProPay handle the complexity while you focus on growing your business.",
        buttons: ["Request a Demo", "Contact Us"]
      }
    },

    codsbuylite: {
      hero: {
        title: "Smart Shopping in Your Pocket.",
        subtitle: "CodsBuy Mobile App brings the power of our e-commerce platform to your fingertips. Whether you’re a customer or a seller, manage everything seamlessly on mobile.",
        // image: "assets/images/codsbuy-hero.png"
        image: "assets/images/main-sub.png"
      },
      about: {
        title: "About CodsBuy",
        text: [
          " CodsBuy Mobile App is designed for convenient buying and selling on the go. It offers a smooth shopping experience for customers and easy product management for sellers. From browsing items to completing sales, everything is just a tap away.",
          "CodsBuy simplifies online selling with a secure, scalable, and customizable platform across industries."
        ],
        features: [
          { icon: "🔍", text: "Real-Time analytics" },
          { icon: "💻", text: "Teams of any size" },
          { icon: "🛡️", text: "Secure and Compliant" }
        ]
      },
      keyFeatures: [
        {
          title: "Seamless Shopping Experience",
          color: "peach",
          points: [
            { icon: "icons/browse.svg", text: "Browse, search, and order products anytime" },
            { icon: "icons/cart.svg", text: "Save favorite items in cart & wishlist" },
            { icon: "icons/mobile.svg", text: "Mobile-first experience for speed and simplicity" }
          ]
        },
        {
          title: "Real-Time Order Management",
          color: "blue",
          points: [
            { icon: "icons/track.svg", text: "Track deliveries in real-time" },
            { icon: "icons/notification.svg", text: "Get instant updates on offers, orders, and delivery status" }
          ]
        },
        {
          title: "Flexible Payments",
          color: "cyan",
          points: [
            { icon: "icons/payment.svg", text: "Multiple payment options for hassle-free checkout" }
          ]
        },
        {
          title: "Seller Dashboard",
          color: "green",
          points: [
            { icon: "icons/dashboard.svg", text: "Sellers can add, update, and manage products easily" }
          ]
        }
      ],
      whyChoose: [
        {
          icon: 'icons/seamless.svg',
          title: 'Seamless Shopping Journey',
          desc: 'Customers enjoy a smooth and hassle-free shopping experience.'
        },
        {
          icon: 'icons/mobile.svg',
          title: 'Mobile Growth',
          desc: 'Sellers can easily grow their business right from mobile.'
        },
        {
          icon: 'icons/smart.svg',
          title: 'Smarter & Engaging',
          desc: 'Faster, smarter, and more engaging than traditional shopping.'
        },
        {
          icon: 'icons/scalable.svg',
          title: 'For All Businesses',
          desc: 'Works perfectly for both small sellers and large stores.'
        }
      ],
      howItWorks: [
        {
          icon: 'assets/images/work-1.svg',
          desc: 'Set up your store with CodsBuy.'
        },
        {
          icon: 'assets/images/work-2.svg',
          desc: 'Add products & manage inventory.'
        },
        {
          icon: 'assets/images/work-3.svg',
          desc: 'Start selling online with secure payments.'
        },
        {
          icon: 'assets/images/work-4.svg',
          desc: 'Track orders, engage customers, and grow with analytics.'
        }
      ],
      cta: {
        title: "Ready to start selling online?",
        text: "Launch your e-commerce store with CodsBuy and grow with confidence.",
        buttons: ["Get Started", "Request a Demo"]
      }
    },
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productData = this.products[this.productId];
  }
}
