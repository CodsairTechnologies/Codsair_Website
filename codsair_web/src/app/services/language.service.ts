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
      'about.text1': "At Codsair Technologies, we believe that technology is not just software, but the creation of experiences, solving real problems, and shaping the future. We are more than just a software development company; we are architects of digital innovation, driven by passion, creativity, and strategy.",
      'about.text2': "Our distinguished team of software engineers, product design pioneers, and technology consultants is always striving to transform ambitious ideas into impactful solutions. From websites and smart applications to digital marketing, robotics, IoT, and creative design, we are redefining the boundaries of what’s possible in the digital world.",
      'about.text3': "What sets us apart is our culture of excellence and loyalty. We don’t just deliver projects; we build genuine partnerships that enable businesses to grow globally while leaving a positive impact on society.",
      'about.text4': "At Codsair, innovation is not just a slogan — it is a way of life. Together, let’s reimagine the future, renew the world with technology, and create what’s next.",
      
      // Process section
      'process.title': 'Our Innovation Journey',
      'process.brainstorming': 'Brainstorming',
      'process.idea': 'Idea',
      'process.research': 'Research',
      'process.qa': 'Quality Assurance',
      'process.launching': 'Launching',
      
      // Expertise section
      'expertise.title': 'Our Core Strengths',
      'expertise.subtitle': 'Delivering innovative computing solutions rooted in proven experience and strengthened by trusted technology',
      'expertise.mobile.title': 'Mobile App Development',
      'expertise.mobile.desc': 'We craft high-performing Android and iOS applications that blend seamless functionality, modern design, and business-driven features. Whether you’re a startup or an enterprise, our mobile solutions are built for scalability, impact, and long-term success.',//'We build powerful Android and iOS applications with seamless performance, modern UI, and business-focused features. From startups to enterprises, our mobile solutions deliver scalability and lasting value.',     
      'expertise.web.title': 'Web Development',
      'expertise.web.desc': 'We design and build scalable, secure, and responsive websites that balance creativity with performance. From e-commerce platforms to enterprise portals, our solutions deliver speed, reliability, and user-focused design to help businesses grow online.',//'Our team delivers scalable, creative, and responsive websites — from e-commerce platforms to enterprise portals. We focus on speed, security, and user-friendly designs that help businesses grow online.',
      'expertise.digital.title': 'Digital Marketing',
      'expertise.digital.desc': 'We craft data-driven digital strategies that enhance visibility, build brand awareness, and deliver measurable results. Through SEO, content marketing, and social media campaigns, we help businesses engage the right audience and maximize ROI across platforms.',//'Boost your visibility with SEO, content, and social media marketing strategies that drive real engagement. Our digital campaigns are tailored to maximize ROI and brand awareness across platforms.',
      'expertise.iot.title': 'Internet of Things (IoT)',
      'expertise.iot.desc': 'We develop intelligent IoT solutions that seamlessly connect devices, automate workflows, and provide actionable insights. From smart homes and healthcare to industrial systems and enterprise environments, our platforms enhance efficiency, security, and decision-making on a global scale.',//'We design IoT solutions that connect devices, automate workflows, and enable smarter decisions. Our IoT platforms enhance efficiency in homes, industries, healthcare, and enterprise environments worldwide.',
      'expertise.robotics.title': 'Robotics',
      'expertise.robotics.desc': 'We deliver cutting-edge robotics solutions that merge intelligent design with advanced automation to streamline operations and improve efficiency. From robotic arms and autonomous systems to smart machines with real-world precision, our innovations empower businesses to achieve higher productivity, accuracy, and scalability.',//'Our robotics solutions combine intelligent design and advanced automation to optimize business operations. From robotic arms to smart machines, we create systems that simulate real-world movement and precision.',
      'expertise.uiux.title': 'UI/UX Design',
      'expertise.uiux.desc': 'We design intuitive and engaging digital experiences that align with your brand identity and user needs. By combining creativity with usability, our UI/UX solutions enhance functionality, customer satisfaction, and engagement across web, mobile, and desktop platforms.',//'We craft user-friendly digital experiences with intuitive interfaces that reflect your brand identity. Our designs improve usability, engagement, and customer satisfaction across web, mobile, and desktop platforms.',
      'expertise.graphic.title': 'Graphic Design',
      'expertise.graphic.desc': 'We create impactful visual identities that communicate your brand story with clarity and creativity. From logos and brand assets to marketing collateral and digital visuals, our designs ensure consistency, engagement, and a lasting impression across all platforms.',//'Our graphic design services deliver compelling visuals, branding assets, and creative storytelling that elevate your communication. From logos to marketing collateral, we design with impact and consistency.',
      'expertise.advertisement.title': 'Advertisement',
      'expertise.advertisement.desc': 'We deliver innovative advertising solutions that combine creativity, storytelling, and strategic execution. From video ads and digital campaigns to visual creatives with clear messaging, our approach engages audiences, strengthens brand presence, and drives measurable business growth.',//'We create innovative advertising campaigns with powerful visuals and clear messaging that inspire audiences. Our strategies blend creativity with data-driven execution to achieve measurable business growth.',
      'expertise.academic.title': 'Academic Projects',
      'expertise.academic.desc': 'We provide expert mentorship for students tackling academic and practical projects, enhancing coding, design, and problem-solving skills. Our guidance ensures hands-on learning, innovative thinking, and stronger career prospects, preparing students for real-world challenges.',//'We guide students through academic projects with expert mentorship, improving coding, design, and problem-solving skills. Our support ensures practical learning, innovation, and better career opportunities.',


      
      // Products section
      'products.title': 'Products & Platforms',
      'products.subtitle': 'Innovative technologies designed to drive your business forward, empower growth, and transform ideas into impactful solutions',
      'products.mobile': 'Mobile Products',
      'products.web': 'Web Products',
      'products.technologies': 'Technologies We Work With',
      'products.webdev': 'Web Development',
      'products.mobiledev': 'Mobile Development',
      'products.clients': 'Brands That Trust Us',
      
      // Mobile products
      'mobile.codspropay.title': 'CodsAudit',
      'mobile.codspropay.desc': 'Audit Smarter. Manage Better',
      'mobile.codscare.title': 'CodsLabel',
      'mobile.codscare.desc': 'Smart Label Printing for Smarter Food Safety',
      'mobile.codsbill.title': 'Codsbill',
      'mobile.codsbill.desc': 'Mobile-first solutions for modern businesses.',
      'mobile.codspoint.title': 'CodsBUY',
      'mobile.codspoint.desc': 'Smart Shopping in Your Pocket',
      
      // Web products
      'web.codscare.title': 'CodsCARE',
      'web.codscare.desc': 'Smart Healthcare Management for Dental & Dermatology Clinics',
      'web.codspropay.title': 'CodsProPay',
      'web.codspropay.desc': 'Simplify Payroll, Empower Your Workforce',
      'web.codscommerce.title': 'CodsPoint',
      'web.codscommerce.desc': 'Smart Billing. Smarter Business',
      'web.codsadmin.title': 'CodsRMS',
      'web.codsadmin.desc': 'Smart Restaurant Management, All in One Place',
      
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
      'showcase.locations': 'Our Presence',
      'showcase.experience': 'By the Numbers',
      'showcase.projects': 'Projects Delivered',
      'showcase.clients': 'Happy Clients',
      'showcase.years': 'Years Experience',
      'showcase.rating': 'Client Rating',
      'showcase.clientrating': 'Client Rating',
      'showcase.blogs.title': 'Blogs and News',
      
      'showcase.blogs.subtitle': 'What’s New',
      'showcase.blogs.description': 'Discover the latest updates, insights, and stories from the world of technology and innovation. In this section, we share expert articles, industry news, and company highlights that matter to you. Whether it\'s the launch of new projects, emerging trends in IT, or valuable tips from our team, our blogs and news updates are designed to keep you informed, inspired, and ahead in today\'s fast-changing digital era.',
      'showcase.blog1': 'Codsair Launches New Mobile App Solutions',
      'showcase.blog2': 'Revolutionary Web Development Trends 2024',
      'showcase.blog3': 'AI Integration in Modern Business Solutions',
      'showcase.india': 'India',
      'showcase.uae': 'UAE',
      'showcase.canada': 'UK',
      'showcase.germany': 'KSA'
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
      'about.text1': 'في Codsair Technologies نؤمن أن التكنولوجيا ليست مجرد برمجيات، بل هي صناعة تجارب، وحل مشكلات حقيقية، ورسم ملامح المستقبل. نحن أكثر من مجرد شركة تطوير برمجيات؛ نحن معماريّو الابتكار الرقمي، مدفوعون بالشغف والإبداع والاستراتيجية.',
      'about.text2': 'فريقنا المتميز من مهندسي البرمجيات، وروّاد تصميم المنتجات، ومستشاري التكنولوجيا يسعى دائمًا لتحويل الأفكار الطموحة إلى حلول مؤثرة. بدءًا من مواقع الويب والتطبيقات الذكية، وصولاً إلى التسويق الرقمي، والروبوتات، وإنترنت الأشياء، والتصميم الإبداعي، نعيد تعريف حدود الممكن في العالم الرقمي.',
      'about.text3': 'ما يميزنا هو ثقافة التميز والوفاء. نحن لا نكتفي بتسليم المشاريع، بل نبني شراكات حقيقية تمكّن الأعمال من النمو عالميًا مع ترك بصمة إيجابية في المجتمع.',
      'about.text4': 'في Codsair، الابتكار ليس مجرد شعار، بل هو أسلوب حياة. معًا، لنقم بـ إعادة تخيل المستقبل، وتجديد العالم بالتكنولوجيا، وصناعة القادم.',
      
      // Process section
      'process.title': 'رحلتنا الابتكارية',
      'process.brainstorming': 'العصف الذهني',
      'process.idea': 'الفكرة',
      'process.research': 'البحث',
      'process.qa': 'ضمان الجودة',
      'process.launching': 'الإطلاق',
      
      // Expertise section
      'expertise.title': 'نقاط قوتنا الأساسية',
      'expertise.subtitle': 'تقديم حلول حوسبة مبتكرة مستندة إلى خبرة مُثبتة ومعزَّزة بتقنيات موثوقة',
      'expertise.mobile.title': 'تطوير تطبيقات الهاتف المحمول',
      'expertise.mobile.desc': 'نحن نصمّم ونطوّر تطبيقات أندرويد (Android) و آي أو إس (iOS) عالية الأداء، تجمع بين الوظائف السلسة، والتصميم العصري، والميزات الموجهة للأعمال. سواء كنت شركة ناشئة أو مؤسسة كبرى، فإن حلولنا في مجال التطبيقات المحمولة مصممة لتحقيق قابلية التوسع، والتأثير، والنجاح المستدام على المدى الطويل.',//'نبني تطبيقات أندرويد وآي أو إس قوية بأداء سلس وواجهة مستخدم حديثة وميزات تركز على الأعمال. من الشركات الناشئة إلى المؤسسات، تقدم حلولنا المحمولة قابلية التوسع والقيمة الدائمة.',
      'expertise.web.title': 'تطوير الويب',
      'expertise.web.desc': 'نحن نصمّم ونبني مواقع إلكترونية قابلة للتوسع، آمنة، وسريعة الاستجابة تجمع بين الإبداع والأداء. بدءًا من منصات التجارة الإلكترونية وصولًا إلى بوابات المؤسسات، توفّر حلولنا السرعة، والموثوقية، وتصميمًا يركز على المستخدم لمساعدة الأعمال على النمو عبر الإنترنت.',//'يقدم فريقنا مواقع ويب قابلة للتوسع وإبداعية ومتجاوبة - من منصات التجارة الإلكترونية إلى بوابات المؤسسات. نركز على السرعة والأمان والتصاميم سهلة الاستخدام التي تساعد الشركات على النمو عبر الإنترنت.',
      'expertise.digital.title': 'التسويق الرقمي',
      'expertise.digital.desc': 'نحن نصيغ استراتيجيات رقمية مدفوعة بالبيانات تعزز من الظهور الرقمي، وتبني الوعي بالعلامة التجارية، وتحقق نتائج قابلة للقياس. من خلال تحسين محركات البحث (SEO)، وتسويق المحتوى، وحملات وسائل التواصل الاجتماعي، نساعد الشركات على جذب الجمهور المناسب وزيادة العائد على الاستثمار (ROI) عبر مختلف المنصات.',//'عزز ظهورك باستراتيجيات تحسين محركات البحث والمحتوى ووسائل التواصل الاجتماعي التي تحفز المشاركة الحقيقية. حملاتنا الرقمية مصممة خصيصاً لتعظيم العائد على الاستثمار والوعي بالعلامة التجارية عبر المنصات.',
      'expertise.iot.title': 'إنترنت الأشياء',
      'expertise.iot.desc': 'نحن نطوّر حلول إنترنت الأشياء (IoT) الذكية التي تربط الأجهزة بسلاسة، وتعمل على أتمتة العمليات، وتوفّر رؤى قابلة للتنفيذ. بدءًا من المنازل الذكية والرعاية الصحية وصولًا إلى الأنظمة الصناعية وبيئات المؤسسات، تعمل منصاتنا على تعزيز الكفاءة، والأمان، ودعم اتخاذ القرار على نطاق عالمي.',//'نصمم حلول إنترنت الأشياء التي تربط الأجهزة وتؤتمت سير العمل وتمكن من اتخاذ قرارات أذكى. منصاتنا لإنترنت الأشياء تعزز الكفاءة في المنازل والصناعات والرعاية الصحية وبيئات المؤسسات في جميع أنحاء العالم.',
      'expertise.robotics.title': 'الروبوتات',
      'expertise.robotics.desc': 'نحن نقدّم حلول الروبوتات المتطورة التي تمزج بين التصميم الذكي والأتمتة المتقدمة بهدف تبسيط العمليات وتحسين الكفاءة. بدءًا من الأذرع الروبوتية والأنظمة المستقلة وصولًا إلى الآلات الذكية ذات الدقة العالية في العالم الواقعي، تمكّن ابتكاراتنا الشركات من تحقيق إنتاجية أعلى، ودقة أفضل، وقابلية توسع أكبر.',//'تجمع حلولنا الروبوتية بين التصميم الذكي والأتمتة المتقدمة لتحسين عمليات الأعمال. من الأذرع الروبوتية إلى الآلات الذكية، نبتكر أنظمة تحاكي الحركة والدقة في العالم الحقيقي.',
      'expertise.uiux.title': 'تصميم واجهة المستخدم/تجربة المستخدم',
      'expertise.uiux.desc': 'نحن نصمّم تجارب رقمية بديهية وجذّابة تتماشى مع هوية علامتك التجارية واحتياجات المستخدمين. من خلال الجمع بين الإبداع وسهولة الاستخدام، تعمل حلول واجهة المستخدم وتجربة المستخدم (UI/UX) على تعزيز الوظائف، ورضا العملاء، وزيادة التفاعل عبر منصات الويب والهاتف المحمول وسطح المكتب.',//'نصنع تجارب رقمية سهلة الاستخدام بواجهات بديهية تعكس هوية علامتك التجارية. تصاميمنا تحسن سهولة الاستخدام والمشاركة ورضا العملاء عبر منصات الويب والهاتف المحمول وسطح المكتب.',
      'expertise.graphic.title': 'التصميم الجرافيكي',
      'expertise.graphic.desc': 'نحن نبتكر هويّات بصرية مؤثرة تنقل قصة علامتك التجارية بوضوح وإبداع. بدءًا من الشعارات والأصول البصرية وصولًا إلى المواد التسويقية والتصاميم الرقمية، تضمن تصاميمنا الاتساق، وجذب الانتباه، وترك انطباع دائم عبر جميع المنصات.',//'تقدم خدمات التصميم الجرافيكي لدينا مرئيات مقنعة وأصول علامة تجارية وسرد إبداعي يرفع من مستوى تواصلك. من الشعارات إلى المواد التسويقية، نصمم بتأثير واتساق.',
      'expertise.advertisement.title': 'الإعلان',
      'expertise.advertisement.desc': 'نحن نقدّم حلولًا إعلانية مبتكرة تجمع بين الإبداع، وسرد القصص، والتنفيذ الاستراتيجي. بدءًا من الإعلانات المرئية والحملات الرقمية وصولًا إلى التصاميم الإبداعية ذات الرسائل الواضحة، يضمن نهجنا جذب الجمهور، وتعزيز حضور العلامة التجارية، وتحقيق نمو ملموس في الأعمال.',//'نبتكر حملات إعلانية مبتكرة بمرئيات قوية ورسائل واضحة تلهم الجماهير. استراتيجياتنا تمزج الإبداع مع التنفيذ المدفوع بالبيانات لتحقيق نمو أعمال قابل للقياس.',
      'expertise.academic.title': 'المشاريع الأكاديمية',
      'expertise.academic.desc': 'نحن نقدّم إرشادًا خبيرًا للطلاب الذين يتعاملون مع المشاريع الأكاديمية والعملية، لتعزيز مهارات البرمجة، والتصميم، وحل المشكلات. يضمن توجيهنا التعلم العملي، والتفكير الإبداعي، وتعزيز فرص الحياة المهنية، مما يجهّز الطلاب لمواجهة التحديات الواقعية.',//'نوجه الطلاب خلال المشاريع الأكاديمية بإرشاد خبير، محسنين مهارات البرمجة والتصميم وحل المشكلات. دعمنا يضمن التعلم العملي والابتكار وفرص مهنية أفضل.',
      
      // Products section
      'products.title': 'المنتجات والمنصات',
      'products.subtitle':'تقنيات مبتكرة مصممة لدفع أعمالك نحو الأمام، تمكين النمو، وتحويل الأفكار إلى حلول ذات تأثير ملموس.',
      'products.mobile': 'منتجات الهاتف المحمول',
      'products.web': 'منتجات الويب',
      'products.technologies': 'التقنيات التي نعمل بها',
      'products.webdev': 'تطوير الويب',
      'products.mobiledev': 'تطوير تطبيقات الهاتف المحمول',
      'products.clients': 'العلامات التجارية التي تثق بنا',
      
      // Mobile products
      'mobile.codspropay.title': 'كودز أوديت',
      'mobile.codspropay.desc': 'التدقيق بذكاء. إدارة أفضل.',
      'mobile.codscare.title': 'كودز ليبل',
      'mobile.codscare.desc': 'طباعة الملصقات الذكية لضمان سلامة الغذاء',
      'mobile.codsbill.title': 'كودزبيل',
      'mobile.codsbill.desc': 'حلول محمولة أولاً للشركات الحديثة.',
      'mobile.codspoint.title': 'كودز باي',
      'mobile.codspoint.desc': 'تسوق ذكي في جيبك',
      
      // Web products
      'web.codscare.title': 'كودس كير',
      'web.codscare.desc':'إدارة ذكية للرعاية الصحية لعيادات الأسنان والجلدية',
      'web.codspropay.title': 'كودس برو باي',
      'web.codspropay.desc': 'بسّط إدارة الرواتب، ومكّن فريق عملك',
      'web.codscommerce.title': 'كودس بوينت',
      'web.codscommerce.desc': 'فواتير ذكية. أعمال أذكى',
      'web.codsadmin.title': 'كودس آر إم إس',
      'web.codsadmin.desc':'إدارة المطاعم الذكية، كل ذلك في مكان واحد',
      
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
      
      // Showcase section
      'showcase.locations': 'حضورنا',
      'showcase.experience': 'بالأرقام',
      'showcase.projects': 'المشاريع المنجزة',
      'showcase.clients': 'العملاء السعداء',
      'showcase.years': 'سنوات الخبرة',
      'showcase.rating': 'تقييم العملاء',
      'showcase.clientrating': 'تقييم العملاء',
      'showcase.blogs.title': 'المدونات والأخبار',

      'showcase.blogs.subtitle':'ما هو الجديد',
      'showcase.blogs.description': 'اكتشف آخر التحديثات والرؤى والقصص من عالم التكنولوجيا والابتكار. في هذا القسم، نشارك المقالات المتخصصة وأخبار الصناعة وأبرز أحداث الشركة التي تهمك. سواء كان إطلاق مشاريع جديدة أو الاتجاهات الناشئة في تكنولوجيا المعلومات أو النصائح القيمة من فريقنا، فإن مدوناتنا وتحديثات الأخبار مصممة لإبقائك مطلعاً وملهماً ومتقدماً في العصر الرقمي سريع التغير اليوم.',
      'showcase.blog1': 'كودزاير تطلق حلول تطبيقات محمولة جديدة',
      'showcase.blog2': 'اتجاهات تطوير الويب الثورية 2024',
      'showcase.blog3': 'تكامل الذكاء الاصطناعي في حلول الأعمال الحديثة',
      'showcase.india': 'الهند',
      'showcase.uae': 'الإمارات العربية المتحدة',
      'showcase.canada': 'كندا',
      'showcase.germany': 'ألمانيا',
      
      // Footer
      'footer.address': 'رقم 1716، الطابق السابع، هايلايت بيزنس بارك، بالاجي، كوجيكود، كيرالا 673014',
      'footer.phone': 'الهاتف: +91 9497428487، +91 8848027097',
      'footer.email': 'البريد الإلكتروني: info@codsairtechnologies.com infocodsair@gmail.com',
      'footer.portfolio': 'المحفظة',
      'footer.services': 'الخدمات',
      'footer.webdev': 'تطوير الويب',
      'footer.digitalmarketing': 'التسويق الرقمي',
      'footer.uiux': 'تصميم واجهة المستخدم/تجربة المستخدم',
      'footer.appdev': 'تطوير التطبيقات',
      'footer.iot': 'إنترنت الأشياء',
      'footer.graphic': 'مصمم جرافيك'
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

  isRTL(): boolean {
    return this.getCurrentLanguage() === 'ar';
  }
}