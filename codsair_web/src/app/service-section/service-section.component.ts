import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { CommonFooterComponent } from '../common-footer/common-footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonNavbarComponent, CommonFooterComponent, CommonModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
  selectedCard: any = null;

  constructor(private router: Router) { }

  openModal(card: any) {
    this.selectedCard = card;
  }

  closeModal() {
    this.selectedCard = null;
  }

  cards = [
    {
      id: 'codsbuy',
      title: 'CodsBUY',
      description: ` In today’s digital-first world, having an online presence is no longer optional — it’s essential. 
CodsBuy is built to simplify online selling, providing a secure, scalable, and customizable 
platform that works across industries.
 From inventory management to secure payments and customer engagement, CodsBuy is the 
all-in-one solution for businesses ready to take their sales online.`,
      image: 'assets/images/cods-buy.png',
      keyFacilities: [
        {
          heading: 'Multi-Category E-Commerce',
          points: [
            'Suitable for jewelry, clothing, electronics, lifestyle products, and more',
            'Flexible catalog design for showcasing multiple product types',
            'Advanced filtering and search options for easy shopping'
          ]
        },
        {
          heading: 'Powerful Admin Panel',
          points: [
            'Manage products, categories, and inventory in real-time',
            'Order management and tracking',
            'Role-based access for admins and staff',
            'Sales reports and analytics dashboard'
          ]
        },
        {
          heading: 'Payments & Checkout',
          points: [
            'Multiple payment gateway integrations',
            'Secure transactions with encrypted processing',
            'Easy returns and refund management',
            'Cart & wishlist features for customers'
          ]
        },
        {
          heading: 'Customer Engagement Tools',
          points: [
            'Customer accounts and order history',
            'Loyalty points, offers, and discount management',
            'Integrated reviews & ratings system',
            'Push notifications and email marketing'
          ]
        },
        {
          heading: 'Smart Inventory & Logistics',
          points: [
            'Real-time stock updates',
            'Low-stock alerts',
            'Delivery & shipping management',
            'Vendor and supplier tracking'
          ]
        }
      ]

    },

    {
      id: 'codscare',
      title: 'CodsCARE',
      description: `Managing a clinic or hospital goes beyond patient care — it’s about ensuring smooth 
operations, secure data, and efficient communication. CodsCare is built to meet 
the unique needs of dental and dermatology practices, offering a secure and 
advanced platform for both single and multi-branch organizations. 
Doctors can easily add prescriptions, patients can access reports, and administrators 
can monitor everything from one dashboard. With CodsCare, healthcare is not just 
managed — it’s transformed. `,
      image: 'assets/images/cods-care.png',
      keyFacilities: [
        {
          heading: 'Patient Module',
          points: [
            'Patient registration & profile management',
            'Appointment booking & scheduling',
            'Access to prescriptions and lab reports',
            'Secure patient history tracking'
          ]
        },
        {
          heading: 'Doctor Module',
          points: [
            'Add and manage prescriptions digitally',
            'View complete patient history',
            'Upload & review lab reports',
            'Access from clinic or remotely'
          ]
        },
        {
          heading: 'Reception Module',
          points: [
            'Appointment booking & rescheduling',
            'Queue and patient flow management',
            'Billing & invoice generation',
            'Real-time updates for patients and doctors'
          ]
        },
        {
          heading: 'Lab Module',
          points: [
            'Upload and manage lab reports securely',
            'Integration with patient and doctor profiles',
            'Automated notifications for results',
            'Branch-wise lab management'
          ]
        },
        {
          heading: 'Admin Module',
          points: [
            'Manage doctors, staff, and reception teams',
            'Multi-branch or single-branch control',
            'Financial reports and analytics',
            'Role-based access and security'
          ]
        }
      ]

    },
    {
      id: 'codsevent',
      title: 'CodsEvent',
      description: `CodsEvent is an advanced event management software built to handle everything 
from corporate expos to private functions. With tools for stall management, 
vendor needs, and participant requirements, it helps organizers deliver seamless 
and professional events every time. 
Whether you’re hosting a multi-day exhibition or a one-day corporate seminar, 
CodsEvent ensures organized operations, smooth communication, and real
time tracking. .`,
      image: 'assets/images/cods-events.png',
      keyFacilities: [
        {
          heading: 'Admin Panel',
          points: [
            'Create and manage multiple events from one dashboard',
            'Real-time stall allocation and availability updates',
            'Vendor and exhibitor management system',
            'Finance & billing with invoices, receipts, and sponsorship tracking',
            'Detailed reports on stall occupancy, ticket sales, and expenses',
            'Manage staff and volunteer assignments'
          ]
        },
        {
          heading: 'Stall & Vendor Management',
          points: [
            'Allocate and track stalls with real-time updates',
            'Vendors can request electricity, WiFi, catering, furniture, and custom requirements',
            'Automatic approval/rejection workflows',
            'Vendor billing and payment tracking'
          ]
        },
        {
          heading: 'Event Planning & Scheduling',
          points: [
            'Publish event schedules, agendas, and speaker sessions',
            'Attendee registration and QR code-based check-in system',
            'Sponsor package management and promotions',
            'Resource allocation (equipment, manpower, logistics)'
          ]
        },
        {
          heading: 'Communication & Engagement',
          points: [
            'Send SMS, email, or in-app notifications to vendors and attendees',
            'Integrated feedback & survey forms',
            'Task assignment and progress tracking for teams'
          ]
        },
        {
          heading: 'Reports & Analytics',
          points: [
            'Insights on revenue, ticket sales, and vendor participation',
            'Real-time stall availability overview',
            'Post-event reports with engagement data and ROI analysis'
          ]
        }
      ]

    },
    {
      id: 'codshms',
      title: 'CodsHMS',
      description: ` Managing a hostel requires balancing multiple operations — from student admissions and 
room allocations to kitchen purchases and stock management. CodsHMS brings everything 
into one platform with a public website for students & parents and a powerful admin 
panel for hostel management.
 Whether you’re running a student hostel, staff hostel, or PG accommodation, CodsHMS is 
built to save time, reduce errors, and improve transparency.`,
      image: 'assets/images/cods-rms.png',
      keyFacilities: [
        {
          heading: 'Public Website',
          points: [
            'Hostel introduction and about section',
            'Room availability status (vacant/occupied)',
            'Online inquiry & booking requests',
            'Photo gallery and facilities showcase'
          ]
        },
        {
          heading: 'Admin Panel',
          points: [
            'Student Management: admissions, profiles, room allocations, attendance',
            'Kitchen & Stock Management: track purchases, daily usage, and expenses',
            'Finance Tracking: fee collection, payment records, expense reports',
            'Multi-Branch Support: manage single or multiple hostels from one system',
            'Reports & Analytics: real-time data for better decision making'
          ]
        }
      ]

    },
    {
      id: 'codsOptima',
      title: 'CodsOptima',
      description: `Managing production is complex — balancing stock, orders, purchases, and delivery while 
ensuring smooth operations. CodsOptima centralizes it all into one platform, helping 
businesses achieve efficiency, reduce errors, and improve transparency.
 With mobile apps for representatives and customers, and a powerful admin web system, 
CodsOptima ensures everyone in the chain is connected and informed.`,
      image: 'assets/images/cods-buy.png',
      keyFacilities: [
        {
          heading: 'Stock & Store Management',
          points: [
            'Real-time stock monitoring',
            'Automatic updates on usage and replenishment',
            'Manage multiple stores and godowns',
            'Low-stock alerts'
          ]
        },
        {
          heading: 'Order Processing',
          points: [
            'Customer app for placing orders',
            'Representative app for order collection & follow-ups',
            'Admin dashboard for approvals and tracking',
            'Automated order status updates'
          ]
        },
        {
          heading: 'Production Management',
          points: [
            'Track raw materials to finished goods',
            'Allocate resources to production batches',
            'Monitor progress and timelines',
            'Reduce wastage and improve efficiency'
          ]
        },
        {
          heading: 'Purchase & Supplier Management',
          points: [
            'Manage purchase requests & approvals',
            'Vendor & supplier tracking',
            'Purchase history and expense reports',
            'Integrated with stock updates'
          ]
        },
        {
          heading: 'Delivery & Logistics',
          points: [
            'Assign deliveries and track status',
            'Real-time updates for customers',
            'Delivery reports and proof of delivery',
            'Integration with multiple branches'
          ]
        },
        {
          heading: 'Role-Based Apps',
          points: [
            'Admin Web Portal – Complete control over production, stock, and delivery',
            'Representative App – Manage orders, customers, and updates on-the-go',
            'Customer App – Place orders, view status, and get notifications'
          ]
        }
      ]

    },
    {
      id: 'codspoint',
      title: 'CodsPOINT',
      description: `Every business needs a simple and reliable way to manage sales. CodsPoint is designed to 
make billing quick, accurate, and hassle-free.
 From small cafés to large supermarkets, CodsPoint adapts to your business needs with 
features like real-time stock tracking, advanced reporting, and smart billing tools. 
Whether you’re printing invoices, managing staff, or monitoring sales, CodsPoint makes it 
easier than ever.`,
      image: 'assets/images/cods-point.png',
      keyFacilities: [
        {
          heading: 'Fast & Reliable Billing',
          points: [
            'Quick invoice generation',
            'GST & tax-ready bills',
            'Barcode & QR code scanning support',
            'Customizable bill formats'
          ]
        },
        {
          heading: 'Smart Inventory & Stock Management',
          points: [
            'Real-time inventory updates',
            'Low-stock alerts & expiry management',
            'Automatic stock deduction on sales',
            'Multi-location stock tracking'
          ]
        },
        {
          heading: 'POS Features',
          points: [
            'Works for restaurants, supermarkets, and retail shops',
            'Multi-counter and multi-branch support',
            'Cash, card, UPI & wallet payment options',
            'Discounts, offers & loyalty programs'
          ]
        },
        {
          heading: 'Reports & Analytics',
          points: [
            'Daily, weekly, and monthly sales reports',
            'Expense & profit tracking',
            'Staff performance reports',
            'Downloadable insights for business growth'
          ]
        }
      ]

    },
    {
      id: 'codspropay',
      title: 'CodsProPay',
      description: `Managing payroll doesn’t need to be complex. CodsProPay is designed for modern 
businesses to automate HR and payroll tasks with accuracy and ease. From attendance 
marking to salary slips, every step is seamless, secure, and transparent.
 Whether you’re running a small business or a large enterprise, CodsProPay helps you save 
time, reduce errors, and keep your team motivated with smooth salary management.`,
      image: 'assets/images/cods-propay.png',
      keyFacilities: [
        {
          heading: 'Smart Attendance Integration',
          points: [
            'Biometric machine integration',
            'Wi-Fi based check-in system',
            'Face recognition attendance',
            'GPS/location-based attendance (perfect for field employees)'
          ]
        },
        {
          heading: 'Automated Payroll',
          points: [
            'Auto salary calculation based on attendance and policies',
            'Advance salary & loan management (auto-deducted from payroll)',
            'Fine/penalty management system',
            'Flexible salary structures'
          ]
        },
        {
          heading: 'Employee Self-Service',
          points: [
            'Download salary slips anytime',
            'Track leave balance & attendance',
            'Mobile app for attendance marking and payroll details'
          ]
        },
        {
          heading: 'HR & Management Tools',
          points: [
            'Comprehensive reports & analytics',
            'Real-time insights into workforce productivity',
            'Role-based access for HR, managers, and employees'
          ]
        }
      ]

    },
    {
      id: 'codsRMS',
      title: 'CodsRMS',
      description: `Running a restaurant is more than just serving food — it’s about balancing 
operations, managing staff, monitoring inventory, and keeping customers happy. 
CodsRMS is designed for restaurants of all sizes — from single outlets to multi
branch chains. With its integrated modules for ERP, Payroll, CRM, and Accounts, 
CodsRMS gives you complete visibility and control over your restaurant operations.`,
      image: 'assets/images/cods-rms.png',
      keyFacilities: [
        {
          heading: 'Stock & Asset Management',
          points: [
            'Real-time inventory tracking',
            'Low-stock alerts & expiry management',
            'Kitchen asset and supply tracking',
            'Reduce wastage and maximize profits'
          ]
        },
        {
          heading: 'Attendance & Payroll Management (Powered by CodsProPay)',
          points: [
            'Biometric, Wi-Fi, face recognition & GPS attendance',
            'Auto salary calculation',
            'Advance salary, loan, fine & deduction management',
            'Employee self-service portal for payslips & attendance'
          ]
        },
        {
          heading: 'Accounts & Finance Management',
          points: [
            'End-to-end expense, purchase, and revenue tracking',
            'Automated financial reports & analytics',
            'GST & tax-ready accounting',
            'Vendor and supplier payment management'
          ]
        },
        {
          heading: 'Customer Relationship Management (CRM)',
          points: [
            'Centralized customer database',
            'Loyalty programs, offers & discounts',
            'Customer feedback tracking',
            'Marketing campaign tools for engagement'
          ]
        },
        {
          heading: 'Single & Multi-Outlet Management',
          points: [
            'Manage one or multiple restaurants from one dashboard',
            'Centralized menu and pricing control',
            'Branch-wise staff and performance reports',
            'Seamless integration across outlets'
          ]
        }
      ]

    },
    {
      id: 'codsAudit',
      title: 'CodsAudit',
      description: `CodsAudit simplifies stock auditing with barcode scanning, real-time tracking, and 
smart stock management—all from your mobile app. 
CodsAudit is a stock auditing and inventory management solution designed for 
businesses that want complete control over their inventory. With its mobile barcode 
scanning feature, CodsAudit makes it easy to add, verify, and manage stock 
directly from your smartphone. It reduces manual errors, saves time, and provides 
real-time visibility into your stock flow. `,
      image: 'assets/images/cods-audit.png',
      keyFacilities: [
        {
          heading: 'Mobile App with Barcode Scanning',
          points: [
            'Scan product barcodes to add or audit stock instantly',
            'Works both online and offline with sync capability',
            'Supports batch & serial number management'
          ]
        },
        {
          heading: 'Smart Stock Management',
          points: [
            'Add, edit, or remove stock items on the go',
            'Categorize items (electronics, apparel, FMCG, etc.)',
            'Stock level alerts for low or excess inventory',
            'Multi-location stock handling'
          ]
        },
        {
          heading: 'Auditing & Verification',
          points: [
            'Compare physical stock with system records',
            'Automated discrepancy detection',
            'Generate audit reports with variances highlighted'
          ]
        },
        {
          heading: 'Reports & Analytics',
          points: [
            'Daily, weekly, and monthly stock reports',
            'Real-time dashboards for stock movement',
            'Export reports in Excel/PDF for management review'
          ]
        },
        {
          heading: 'User Management',
          points: [
            'Role-based access for auditors, staff, and managers',
            'Secure login with activity tracking',
            'Approval workflows for corrections'
          ]
        }
      ]

    },
    {
      id: 'codsbill',
      title: 'CodsBill',
      description: ` CodBill is the all-in-one billing solution for modern businesses. Whether you run a small 
shop, supermarket, restaurant, or wholesale store, CodBill helps you manage billing, 
stock, sales, expenses, and income—all from your mobile device. With Bluetooth printer 
integration, you can generate bills instantly, making it fast, reliable, and user-friendly.`,
      image: 'assets/images/cods-bill.png',
      keyFacilities: [
        {
          heading: 'Smart Billing',
          points: [
            'Mobile-based billing with simple UI',
            'Integrated with Bluetooth printer for instant receipts',
            'Multiple payment modes (Cash, UPI, Card, Wallets)',
            'GST/Tax-ready billing'
          ]
        },
        {
          heading: 'Stock & Inventory Management',
          points: [
            'Add, update, and track stock in real time',
            'Low-stock alerts and expiry tracking',
            'Multi-category and multi-location stock handling',
            'Barcode scanning & product search'
          ]
        },
        {
          heading: 'Sales & Purchase Tracking',
          points: [
            'Daily/Monthly sales reports',
            'Purchase records with supplier details',
            'Track profit & margins easily',
            'Customer & vendor management'
          ]
        },
        {
          heading: 'Expense & Income Tracking',
          points: [
            'Record daily expenses',
            'Manage income sources',
            'Automated cashbook & profit/loss reports'
          ]
        },
        {
          heading: 'Restaurant & Shop Modules',
          points: [
            'Table-wise/KOT (Kitchen Order Ticket) billing for restaurants',
            'Item modifiers (extra cheese, toppings, etc.)',
            'Combo offers, discounts, loyalty points',
            'Works for grocery stores, salons, cafes, electronics shops, and more'
          ]
        },
        {
          heading: 'User Roles & Security',
          points: [
            'Multi-user access (Cashier, Manager, Owner)',
            'Role-based permissions',
            'Secure cloud backup & restore'
          ]
        }
      ]

    },
    {
      id: 'codsbuylite',
      title: 'CodsBuy Mobile App',
      description: ` CodsBuy Mobile App is designed for convenient buying and selling on the go. It offers a 
smooth shopping experience for customers and easy product management for sellers. From 
browsing items to completing sales, everything is just a tap away.`,
      image: 'assets/images/codsbuy-app.png',
      keyFacilities: [
        {
          heading: 'Easy Shopping',
          points: [
            'Browse, search, and order products anytime'
          ]
        },
        {
          heading: 'Order Tracking',
          points: [
            'Track deliveries in real-time'
          ]
        },
        {
          heading: 'Flexible Payments',
          points: [
            'Multiple payment options for hassle-free checkout'
          ]
        },
        {
          heading: 'Cart & Wishlist',
          points: [
            'Save favorite items and shop later'
          ]
        },
        {
          heading: 'Seller Dashboard',
          points: [
            'Sellers can add, update, and manage products'
          ]
        },
        {
          heading: 'Mobile-First Experience',
          points: [
            'Designed for speed and simplicity'
          ]
        },
        {
          heading: 'Notifications',
          points: [
            'Get instant updates on offers, orders, and delivery status'
          ]
        }
      ]

    },
    {
      id: 'codslabel',
      title: 'CodsLabel',
      description: `CodsLabel is a complete label printing and food management solution that helps 
businesses manage their food products effectively. It automatically calculates the 
Manufacturing Date (MFD) and Expiry Date based on predefined shelf-life details. With 
multi-role access and seamless integration across multiple branches, CodsLabel ensures food 
quality and compliance without manual errors.
 Whether you run a single food outlet or manage multiple production shops, CodsLabel 
brings clarity, speed, and automation to your labeling process.`,
      image: 'assets/images/cods-label.png',
      keyFacilities: [
        {
          heading: 'Mobile App + Admin Dashboard',
          points: [
            'Manage labels and production data from anywhere'
          ]
        },
        {
          heading: 'Multi-Branch Management',
          points: [
            'Handle multiple food production shops with ease'
          ]
        },
        {
          heading: 'Food Shelf-Life Tracking',
          points: [
            'Set shelf-life once; system calculates MFD & expiry automatically'
          ]
        },
        {
          heading: 'Smart Label Printing',
          points: [
            'Generate accurate labels instantly with all required details'
          ]
        },
        {
          heading: 'Checklist Management',
          points: [
            'Ensure production and compliance checks are followed'
          ]
        },
        {
          heading: 'Role-Based Access',
          points: [
            'Employee, Store, Area Manager & Admin modules for smooth control'
          ]
        },
        {
          heading: 'Secure & Reliable',
          points: [
            'Data protection and accurate reporting for every product'
          ]
        }
      ]

    },
    {
      id: 'codspropaylite',
      title: 'CodsProPay Lite',
      description: `Managing employees doesn’t have to be complicated. CodsProPay (Lite) brings the 
essential HR and employee features into a mobile-friendly, easy-to-use platform. From 
employee records to attendance and salary details, everything is organized in one place.
 This version is specially designed for businesses that need basic employee management 
without the complexity of a full payroll suite.`,
      image: 'assets/images/codspropay-lite.png',
      keyFacilities: [
        {
          heading: 'HR Module',
          points: [
            'Manage employee data, attendance, leave, and salary details'
          ]
        },
        {
          heading: 'Employee Module',
          points: [
            'Employees can view their details, salary slips, and attendance'
          ]
        },
        {
          heading: 'Mobile-Friendly',
          points: [
            'Access on the go for both HR and employees'
          ]
        },
        {
          heading: 'Simple Interface',
          points: [
            'Easy to use, with only the essential features you need'
          ]
        },
        {
          heading: 'Secure Data',
          points: [
            'Protect sensitive employee information'
          ]
        }
      ]

    },

  ];

  goToProduct(id: string) {
    this.router.navigate(['/product', id]);
  }
}
