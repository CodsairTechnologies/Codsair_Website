import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { CommonFooterComponent } from '../common-footer/common-footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonNavbarComponent, CommonFooterComponent, CommonModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
  selectedCard: any = null;

  constructor(private router: Router, public languageService: LanguageService) { }

  openModal(card: any) {
    this.selectedCard = card;
  }

  closeModal() {
    this.selectedCard = null;
  }

  cards = [
    {
      id: 'codsbuy',
      titleKey: 'product.codsbuy.title',
      descriptionKey: 'product.codsbuy.desc',
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
      titleKey: 'product.codscare.title',
      descriptionKey: 'product.codscare.desc',
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
      titleKey: 'product.codsevent.title',
      descriptionKey: 'product.codsevent.desc',
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
      titleKey: 'product.codshms.title',
      descriptionKey: 'product.codshms.desc',
      image: 'assets/images/cods-hms.png',
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
      id: 'codsoptima',
      titleKey: 'product.codsoptima.title',
      descriptionKey: 'product.codsoptima.desc',
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
      titleKey: 'product.codspoint.title',
      descriptionKey: 'product.codspoint.desc',
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
      titleKey: 'product.codspropay.title',
      descriptionKey: 'product.codspropay.desc',
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
      id: 'codsrms',
      titleKey: 'product.codsrms.title',
      descriptionKey: 'product.codsrms.desc',
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
      id: 'codsaudit',
      titleKey: 'product.codsaudit.title',
      descriptionKey: 'product.codsaudit.desc',
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
      titleKey: 'product.codsbill.title',
      descriptionKey: 'product.codsbill.desc',
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
      titleKey: 'product.codsbuylite.title',
      descriptionKey: 'product.codsbuylite.desc',
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
      titleKey: 'product.codslabel.title',
      descriptionKey: 'product.codslabel.desc',
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
      titleKey: 'product.codspropaylite.title',
      descriptionKey: 'product.codspropaylite.desc',
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
    }
  ];

  goToProduct(id: string) {
    this.router.navigate(['/product', id]);
    window.scrollTo(0, 0);
  }
}