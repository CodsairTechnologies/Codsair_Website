import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [lang: string]: Translations } = {
    en: {
      // Navbar
      'language': 'Language',
      'home': 'Home',
      'services': 'Services',
      'about': 'About Us',
      'products': 'Products',
      'contact': 'Contact Us',
      
      // Home page
      'hero.title': 'Smarter Solutions for a Digital Future',
      'hero.subtitle': "Let's Together",
      'hero.button': 'Lets Talk',
      'social.follow': 'Follow us',
      
      // About section
      'about.title': 'About Us',
      'about.text1': "We're not just another software development firm; we're architects of digital innovation, driven by a passion for excellence. Headquartered in Calicut, India, our mission is to propel businesses to global success through cutting-edge technological solutions and unwavering dedication. Comprised of a dynamic team of software engineers, visionary product designers, and seasoned technology consultants, we are committed to delivering unparalleled quality and loyalty to our clients.",
      'about.text2': "Beyond software development, our expertise spans across diverse domains including Websites, mobile application development, digital marketing, robotics, graphic design, and IoT. Driven by a vision to not only meet but exceed expectations, we strive to not only elevate businesses but also contribute to the betterment of our community. Join us as we redefine the possibilities of technology and refresh the world with innovation.",
      
      // Process section
      'process.title': 'Process',
      'process.brainstorming': 'Brainstorming',
      'process.idea': 'Idea',
      'process.research': 'Research',
      'process.qa': 'Quality Assurance',
      'process.launching': 'Launching',


      
      // Products section
      'products.title': 'Products',
      'products.subtitle': 'We design mobile apps and web applications that not only look great but also work seamlessly',
      'products.mobile': 'Mobile Products',
      'products.web': 'Web Products',
      'products.technologies': 'Technologies We Work With',
      'products.webdev': 'Web Development',
      'products.mobiledev': 'Mobile Development',
      'products.clients': 'Our Clients',
      
      // Mobile products
      'mobile.codspropay.title': 'Codspropay',
      'mobile.codspropay.desc': 'Smart payroll & employee management system.',
      'mobile.codscare.title': 'Codscare',
      'mobile.codscare.desc': 'Healthcare management simplified.',
      'mobile.codsbill.title': 'Codsbill',
      'mobile.codsbill.desc': 'Mobile-first solutions for modern businesses.',
      'mobile.codspoint.title': 'Codspoint',
      'mobile.codspoint.desc': 'Seamless mobile connectivity and integration.',
      
      // Web products
      'web.codscare.title': 'Codscare Web',
      'web.codscare.desc': 'Smart business analytics & dashboards.',
      'web.codspropay.title': 'Codspropay Web',
      'web.codspropay.desc': 'Secure payments with real-time reports.',
      'web.codscommerce.title': 'Codscommerce',
      'web.codscommerce.desc': 'E-commerce platform with advanced features.',
      'web.codsadmin.title': 'Codsadmin',
      'web.codsadmin.desc': 'Powerful admin dashboards for enterprises.',
      
      // Technologies
      'tech.react.desc': 'A JavaScript library for UI',
      'tech.node.desc': 'Server-side JS runtime',
      'tech.angular.desc': 'Frontend framework',
      'tech.python.desc': 'Versatile language for web apps',
      'tech.php.desc': 'Server-side scripting for websites',
      'tech.flutter.desc': 'Cross-platform toolkit',
      'tech.reactnative.desc': 'React for mobile',
      'tech.swift.desc': 'Native iOS language',
      'tech.kotlin.desc': 'Android language',
      'tech.ionic.desc': 'Hybrid mobile framework',
      
      // Technology names
      'tech.react': 'React JS',
      'tech.node': 'Node JS',
      'tech.angular': 'Angular',
      'tech.python': 'Python',
      'tech.php': 'PHP',
      'tech.flutter': 'Flutter',
      'tech.reactnative': 'React Native',
      'tech.swift': 'Swift',
      'tech.kotlin': 'Kotlin',
      'tech.ionic': 'Ionic',
      
      // Feature section
      'feature.title': 'Turn Ideas Into Reality – Start with our expert solutions',
      'feature.desc': 'Discover our wide range of services designed to help businesses grow in the digital era. From mobile apps and web development to digital marketing and design, we provide innovative solutions tailored to your needs.',
      'feature.button': 'Contact Us →',
      'testimonial.title': 'Real Experiences',
      
      // Testimonials
      'testimonial.neha.name': 'Neha Verma',
      'testimonial.neha.feedback': 'Codsair transformed our idea into a fully functional mobile app. Their team was highly professional, responsive, and delivered beyond expectations.',
      'testimonial.rohit.name': 'Rohit Mehta',
      'testimonial.rohit.feedback': 'Working with Codsair was seamless. They ensured timely delivery and went the extra mile to support us.',
      'testimonial.kavya.name': 'Kavya Iyer',
      'testimonial.kavya.feedback': 'We got exactly what we envisioned, with excellent support throughout the project.',
      'testimonial.aditya.name': 'Aditya Rao',
      'testimonial.aditya.feedback': 'Amazing experience! Codsair helped us scale our idea into a reliable platform.',
      'testimonial.divya.name': 'Divya Menon',
      'testimonial.divya.feedback': 'Codsair\'s team is extremely dedicated. They listened carefully to our needs and delivered beyond our expectations.',
      'testimonial.amala.name': 'Amala Nair',
      'testimonial.amala.feedback': 'The process was smooth from start to finish. The Codsair team made sure every detail was handled with care.',
      'testimonial.aarav.name': 'Aarav Sharma',
      'testimonial.aarav.feedback': 'Highly recommend Codsair! They provided outstanding support and built a product that exceeded our vision.',
      
      // Footer
      'footer.address': 'No 1716, 7th FLOOR, HILITE BUSINESS PARK, Palazhi, Kozhikode, Kerala 673014',
      'footer.phone': 'Phone: +91 9497428487, +91 8848027097',
      'footer.email': 'Email: info@codsairtechnologies.com infocodsair@gmail.com',
      'footer.portfolio': 'Portfolio',
      'footer.services': 'Services',
      'footer.webdev': 'Web Development',
      'footer.digitalmarketing': 'Digital Marketing',
      'footer.uiux': 'UI/UX Design',
      'footer.appdev': 'App Development',
      'footer.iot': 'IOT',
      'footer.graphic': 'Graphic Designer',
      
      // Showcase section
      'showcase.locations': 'Locations',
      'showcase.experience': 'Our Experience',
      'showcase.projects': 'Projects Delivered',
      'showcase.clients': 'Happy Clients',
      'showcase.years': 'Years Experience',
      'showcase.rating': 'Client Rating',
      'showcase.clientrating': 'Client Rating',
      'showcase.blogs': 'Blogs and News',
      'showcase.updates': 'Latest Updates',
      'showcase.description': 'Discover the latest updates, insights, and stories from the world of technology and innovation. In this section, we share expert articles, industry news, and company highlights that matter to you. Whether it\'s the launch of new projects, emerging trends in IT, or valuable tips from our team, our blogs and news updates are designed to keep you informed, inspired, and ahead in today\'s fast-changing digital era.',
      'showcase.blog1': 'Codsair Launches New Mobile App Solutions',
      'showcase.blog2': 'Revolutionary Web Development Trends 2024',
      'showcase.blog3': 'AI Integration in Modern Business Solutions',
      'showcase.india': 'India',
      'showcase.uae': 'UAE',
      'showcase.canada': 'Canada',
      'showcase.germany': 'Germany'
    },
    ar: {
      // Navbar
      'language': 'اللغة',
      'home': 'الرئيسية',
      'services': 'الخدمات',
      'about': 'من نحن',
      'products': 'المنتجات',
      'contact': 'اتصل بنا',
      
      // Home page
      'hero.title': 'حلول أذكى لمستقبل رقمي',
      'hero.subtitle': 'دعونا معًا',
      'hero.button': 'دعنا نتحدث',
      'social.follow': 'تابعنا',
      
      // About section
      'about.title': 'من نحن',
      'about.text1': 'نحن لسنا مجرد شركة تطوير برمجيات أخرى؛ نحن مهندسو الابتكار الرقمي، مدفوعون بشغف التميز. يقع مقرنا الرئيسي في كاليكوت، الهند، ومهمتنا هي دفع الشركات إلى النجاح العالمي من خلال الحلول التكنولوجية المتطورة والتفاني الثابت. نتكون من فريق ديناميكي من مهندسي البرمجيات ومصممي المنتجات الرؤيويين والاستشاريين التكنولوجيين المتمرسين، ونحن ملتزمون بتقديم جودة ووفاء لا مثيل لهما لعملائنا.',
      'about.text2': 'بما يتجاوز تطوير البرمجيات، تمتد خبرتنا عبر مجالات متنوعة تشمل المواقع الإلكترونية وتطوير تطبيقات الهاتف المحمول والتسويق الرقمي والروبوتات والتصميم الجرافيكي وإنترنت الأشياء. مدفوعون برؤية لا تلبي التوقعات فحسب بل تتجاوزها، نسعى ليس فقط لرفع مستوى الشركات ولكن أيضًا للمساهمة في تحسين مجتمعنا. انضم إلينا ونحن نعيد تعريف إمكانيات التكنولوجيا ونجدد العالم بالابتكار.',
      
      // Process section
      'process.title': 'العملية',
      'process.brainstorming': 'العصف الذهني',
      'process.idea': 'الفكرة',
      'process.research': 'البحث',
      'process.qa': 'ضمان الجودة',
      'process.launching': 'الإطلاق',
      
      // Products section
      'products.title': 'المنتجات',
      'products.subtitle': 'نصمم تطبيقات الهاتف المحمول وتطبيقات الويب التي لا تبدو رائعة فحسب، بل تعمل أيضاً بسلاسة',
      'products.mobile': 'منتجات الهاتف المحمول',
      'products.web': 'منتجات الويب',
      'products.technologies': 'التقنيات التي نعمل بها',
      'products.webdev': 'تطوير الويب',
      'products.mobiledev': 'تطوير تطبيقات الهاتف المحمول',
      'products.clients': 'عملاؤنا',
      
      // Mobile products
      'mobile.codspropay.title': 'كودزبروباي',
      'mobile.codspropay.desc': 'نظام ذكي للرواتب وإدارة الموظفين.',
      'mobile.codscare.title': 'كودزكير',
      'mobile.codscare.desc': 'إدارة الرعاية الصحية مبسطة.',
      'mobile.codsbill.title': 'كودزبيل',
      'mobile.codsbill.desc': 'حلول محمولة أولاً للشركات الحديثة.',
      'mobile.codspoint.title': 'كودزبوينت',
      'mobile.codspoint.desc': 'اتصال وتكامل محمول سلس.',
      
      // Web products
      'web.codscare.title': 'كودزكير ويب',
      'web.codscare.desc': 'تحليلات أعمال ذكية ولوحات معلومات.',
      'web.codspropay.title': 'كودزبروباي ويب',
      'web.codspropay.desc': 'مدفوعات آمنة مع تقارير فورية.',
      'web.codscommerce.title': 'كودزكوميرس',
      'web.codscommerce.desc': 'منصة تجارة إلكترونية بميزات متقدمة.',
      'web.codsadmin.title': 'كودزأدمين',
      'web.codsadmin.desc': 'لوحات إدارة قوية للمؤسسات.',
      
      // Technologies
      'tech.react.desc': 'مكتبة جافاسكريبت لواجهة المستخدم',
      'tech.node.desc': 'بيئة تشغيل جافاسكريبت من جانب الخادم',
      'tech.angular.desc': 'إطار عمل واجهة أمامية',
      'tech.python.desc': 'لغة متعددة الاستخدامات لتطبيقات الويب',
      'tech.php.desc': 'برمجة من جانب الخادم للمواقع',
      'tech.flutter.desc': 'مجموعة أدوات متعددة المنصات',
      'tech.reactnative.desc': 'رياكت للهاتف المحمول',
      'tech.swift.desc': 'لغة آي أو إس الأصلية',
      'tech.kotlin.desc': 'لغة أندرويد',
      'tech.ionic.desc': 'إطار عمل محمول هجين',
      
      // Technology names
      'tech.react': 'رياكت جي إس',
      'tech.node': 'نود جي إس',
      'tech.angular': 'أنجولار',
      'tech.python': 'بايثون',
      'tech.php': 'بي إتش بي',
      'tech.flutter': 'فلاتر',
      'tech.reactnative': 'رياكت نيتيف',
      'tech.swift': 'سويفت',
      'tech.kotlin': 'كوتلين',
      'tech.ionic': 'آيونيك',
      
      // Feature section
      'feature.title': 'حول الأفكار إلى واقع – ابدأ بحلولنا الخبيرة',
      'feature.desc': 'اكتشف مجموعتنا الواسعة من الخدمات المصممة لمساعدة الشركات على النمو في العصر الرقمي. من تطبيقات الهاتف المحمول وتطوير الويب إلى التسويق الرقمي والتصميم، نقدم حلولاً مبتكرة مصممة خصيصاً لاحتياجاتك.',
      'feature.button': 'اتصل بنا ←',
      'testimonial.title': 'تجارب حقيقية',
      
      // Testimonials
      'testimonial.neha.name': 'نيها فيرما',
      'testimonial.neha.feedback': 'حولت كودزاير فكرتنا إلى تطبيق محمول يعمل بكامل طاقته. كان فريقهم محترفاً للغاية ومتجاوباً وقدم أكثر من التوقعات.',
      'testimonial.rohit.name': 'روهيت ميهتا',
      'testimonial.rohit.feedback': 'العمل مع كودزاير كان سلساً. لقد ضمنوا التسليم في الوقت المحدد وبذلوا جهداً إضافياً لدعمنا.',
      'testimonial.kavya.name': 'كافيا أيير',
      'testimonial.kavya.feedback': 'حصلنا على ما تصورناه بالضبط، مع دعم ممتاز طوال المشروع.',
      'testimonial.aditya.name': 'أديتيا راو',
      'testimonial.aditya.feedback': 'تجربة مذهلة! ساعدتنا كودزاير في توسيع فكرتنا إلى منصة موثوقة.',
      'testimonial.divya.name': 'ديفيا مينون',
      'testimonial.divya.feedback': 'فريق كودزاير مخلص للغاية. استمعوا بعناية لاحتياجاتنا وقدموا أكثر من توقعاتنا.',
      'testimonial.amala.name': 'أمالا ناير',
      'testimonial.amala.feedback': 'كانت العملية سلسة من البداية إلى النهاية. تأكد فريق كودزاير من التعامل مع كل التفاصيل بعناية.',
      'testimonial.aarav.name': 'آراف شارما',
      'testimonial.aarav.feedback': 'أوصي بشدة بكودزاير! قدموا دعماً متميزاً وبنوا منتجاً تجاوز رؤيتنا.',
      
      // Footer
      'footer.address': 'رقم 1716، الطابق السابع، هيلايت بيزنس بارك، بالاجي، كوجيكود، كيرالا 673014',
      'footer.phone': 'الهاتف: +91 9497428487، +91 8848027097',
      'footer.email': 'البريد الإلكتروني: info@codsairtechnologies.com infocodsair@gmail.com',
      'footer.portfolio': 'المحفظة',
      'footer.services': 'الخدمات',
      'footer.webdev': 'تطوير الويب',
      'footer.digitalmarketing': 'التسويق الرقمي',
      'footer.uiux': 'تصميم واجهة المستخدم/تجربة المستخدم',
      'footer.appdev': 'تطوير التطبيقات',
      'footer.iot': 'إنترنت الأشياء',
      'footer.graphic': 'مصمم جرافيك',
      
      // Showcase section
      'showcase.locations': 'المواقع',
      'showcase.experience': 'خبرتنا',
      'showcase.projects': 'المشاريع المنجزة',
      'showcase.clients': 'عملاء سعداء',
      'showcase.years': 'سنوات الخبرة',
      'showcase.rating': 'تقييم العملاء',
      'showcase.clientrating': 'تقييم العملاء',
      'showcase.blogs': 'المدونات والأخبار',
      'showcase.updates': 'آخر التحديثات',
      'showcase.description': 'اكتشف آخر التحديثات والرؤى والقصص من عالم التكنولوجيا والابتكار. في هذا القسم، نشارك مقالات الخبراء وأخبار الصناعة وأبرز معالم الشركة التي تهمك. سواء كان إطلاق مشاريع جديدة أو الاتجاهات الناشئة في تقنية المعلومات أو النصائح القيمة من فريقنا، فإن تحديثات مدوناتنا وأخبارنا مصممة لإبقائك مطلعاً وملهماً ومتقدماً في عصرنا الرقمي سريع التغير.',
      'showcase.blog1': 'كودزاير تطلق حلول تطبيقات محمولة جديدة',
      'showcase.blog2': 'اتجاهات تطوير الويب الثورية 2024',
      'showcase.blog3': 'تكامل الذكاء الاصطناعي في حلول الأعمال الحديثة',
      'showcase.india': 'الهند',
      'showcase.uae': 'الإمارات العربية المتحدة',
      'showcase.canada': 'كندا',
      'showcase.germany': 'ألمانيا'
    }
  };

  constructor() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  translate(key: string): string {
    const currentLang = this.getCurrentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }
}