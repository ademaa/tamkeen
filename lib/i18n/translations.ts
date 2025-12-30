export type Language = "ar" | "en"

export const translations = {
  ar: {
    // Navbar
    nav: {
      features: "المميزات",
      howItWorks: "كيف يعمل",
      joinNow: "انضم الآن",
    },
    // Hero Section
    hero: {
      title: "فكرتك، موقعك..",
      titleGradient: " بذكاء اصطناعي يفهم لغتك وسوقك",
      subtitle:
        "تمكين هو أول صانع مواقع بالذكاء الاصطناعي مصمم خصيصاً للمنطقة العربية. لا مزيد من التصاميم المكسورة أو الترجمات الضعيفة.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      submitButton: "كن أول من يختبر قوة تمكين",
      submitting: "جاري الإرسال...",
      successMessage: "أنت في القائمة! تحقق من بريدك الإلكتروني قريبًا.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      limitedSpots: "انضم لقائمة الانتظار واحصل على خصم 20% عند الإطلاق الرسمي.",
    },
    // Chat Demo
    demo: {
      title: "مثال لإنشاء الموقع",
      subtitle: "أهلاً! صف لي مشروعك وسأقوم ببناء الموقع لك فوراً...",
      userMessage: "أريد موقع عود فاخر بألوان أسود وذهبي.",
      aiStatus: "تم إنشاء الموقع",
      aiDescription: "تصميم أنيق باللونين الأسود والذهبي مع دعم RTL. جاهز للتخصيص بأوامر نصية.",
      logoText: "عود فاخر",
    },
    // Comparison Section
    comparison: {
      title: "لماذا يختار المحترفون تمكين؟",
      subtitle: "حلول ذكية مصممة خصيصاً لاحتياجات السوق المحلي",
      globalGiants: {
        title: "دعم كامل للغة العربية (RTL)",
        subtitle: "(المنصات الاخري)",
        point1:
          "انسَ مشاكل الخطوط المكسورة أو القوائم المقلوبة. قوالبنا مبنية من الصفر لتدعم اتجاه الكتابة من اليمين لليسار.",
        point2: "صور غربية عامة",
      },
      localAgencies: {
        title: "تعديل بالدردشة",
        subtitle: "(وكالات التسويق)",
        point1:
          "هل تريد تغيير الألوان؟ أو إضافة قسم جديد؟ فقط اطلب من الذكاء الاصطناعي وسيتم التنفيذ فوراً دون كتابة سطر كود واحد.",
        point2: "تسليم بطيء (أسابيع)",
      },
      tamkeen: {
        title: "تمكين",
        subtitle: "(منصتنا)",
        point1Title: "RTL أصلي:",
        point1: "مبني للعربية من الكود",
        point2Title: "ذكاء اصطناعي هجين:",
        point2: "دردش لبناء أو استخدم قوالب احترافية",
      },
    },
    // Features Section
    features: {
      title: "كيف يعمل؟",
      subtitle: "نموذج القوالب: اختر طريقك لموقع عربي مثالي",
      step1: {
        badge: "الخطوة 1",
        title: "اختر طريقك",
        optionA: "الخيار أ:",
        optionAText: 'الرسالة السحرية - ابدأ بلوحة فارغة. اكتب: "أحتاج متجر عود فاخر بألوان أسود وذهبي."',
        optionB: "الخيار ب:",
        optionBText: 'القالب الذكي - اختر من 50+ تصميم محلي مثل "كافيه الرياض" أو "مستشار دبي."',
      },
      step2: {
        badge: "الخطوة 2",
        title: "خصص بالدردشة",
        question1: "لا يعجبك اللون؟ فقط اكتب:",
        answer1: '"اجعل الأزرار خضراء زمردية."',
        question2: "تحتاج نصًا أفضل؟ اكتب:",
        answer2: '"أعد كتابة هذا العنوان ليكون أكثر رسمية."',
      },
      step3: {
        badge: "الخطوة 3",
        title: "أطلق مشروعك",
        point1: "اربط نطاقك.",
        point2: "انطلق في دقائق.",
      },
    },
    // Pricing Section
    pricing: {
      title: "جودة الوكالة. سرعة المستقل. تسعير SaaS.",
      subtitle: "انسَ عرض الوكالة بـ $2,000.",
      starter: {
        name: "المبتدئ",
        price: "$15",
        period: "/شهريًا",
        description: "مثالي للسير الذاتية والخدمات",
        feature1: "أداة إنشاء المواقع بالذكاء الاصطناعي",
        feature2: "دعم RTL الأصلي",
        feature3: "قوالب ذكية",
        feature4: "متجاوب مع الهواتف",
        cta: "ابدأ الآن",
      },
      pro: {
        name: "احترافي",
        price: "$35",
        period: "/شهريًا",
        description: "التجارة الإلكترونية الكاملة وقوة الذكاء الاصطناعي",
        badge: "الأكثر شعبية",
        feature1: "كل شيء في المبتدئ",
        feature2: "ميزات الذكاء الاصطناعي المتقدمة",
        feature3: "دعم ذو أولوية",
        feature4: "لوحة تحليلات",
        cta: "ابدأ الآن",
      },
      annualSave: "وفر 15% مع الفوترة السنوية",
    },
    // Footer
    footer: {
      copyright: "© 2025 تمكين. جميع الحقوق محفوظة.",
    },
  },
  en: {
    // Navbar
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      joinNow: "Join Us Now",
    },
    // Hero Section
    hero: {
      title: "Your Idea, Your Website..",
      titleGradient: "With AI That Speaks Your Language & Market",
      subtitle:
        "Tamkeen is the first AI website builder designed specifically for the Arab region. No more broken designs or weak translations.",
      emailPlaceholder: "Enter your email address",
      submitButton: "Be the first to experience Tamkeen's power",
      submitting: "Submitting...",
      successMessage: "You're on the list! Check your email soon.",
      errorMessage: "Something went wrong. Please try again.",
      limitedSpots: "Join the waitlist and get 20% off at official launch.",
    },
    // Chat Demo
    demo: {
      title: "Website Creation Example",
      subtitle: "Hello! Describe your project and I'll build the website for you instantly...",
      userMessage: "I want a luxury oud website with black and gold colors.",
      aiStatus: "Website created",
      aiDescription: "Elegant black and gold design with RTL support. Ready to customize with text commands.",
      logoText: "Luxury Oud",
    },
    // Comparison Section
    comparison: {
      title: "Why Professionals Choose Tamkeen?",
      subtitle: "Smart solutions designed specifically for local market needs",
      globalGiants: {
        title: "Full Arabic Language Support (RTL)",
        subtitle: "(Other Platforms)",
        point1:
          "Forget broken fonts or flipped menus. Our templates are built from scratch to support right-to-left writing direction.",
        point2: "Generic Western images",
      },
      localAgencies: {
        title: "Edit with Chat",
        subtitle: "(Marketing Agencies)",
        point1:
          "Want to change colors? Or add a new section? Just ask the AI and it'll be done instantly without writing a single line of code.",
        point2: "Slow delivery (Weeks)",
      },
      tamkeen: {
        title: "Tamkeen",
        subtitle: "(Our Platform)",
        point1Title: "Native RTL:",
        point1: "Built for Arabic from the code",
        point2Title: "Hybrid AI:",
        point2: "Chat to build or use professional templates",
      },
    },
    // Features Section
    features: {
      title: "How Does It Work?",
      subtitle: "Template Model: Choose your path to a perfect Arabic website",
      step1: {
        badge: "Step 1",
        title: "Choose Your Path",
        optionA: "Option A:",
        optionAText:
          'Magic Message - Start with a blank canvas. Type: "I need a luxury oud store with black and gold colors."',
        optionB: "Option B:",
        optionBText: 'Smart Template - Choose from 50+ local designs like "Riyadh Cafe" or "Dubai Consultant."',
      },
      step2: {
        badge: "Step 2",
        title: "Customize with Chat",
        question1: "Don't like the color? Just type:",
        answer1: '"Make the buttons emerald green."',
        question2: "Need better text? Type:",
        answer2: '"Rewrite this headline to be more formal."',
      },
      step3: {
        badge: "Step 3",
        title: "Launch Your Project",
        point1: "Connect your domain.",
        point2: "Go live in minutes.",
      },
    },
    // Pricing Section
    pricing: {
      title: "Agency Quality. Freelancer Speed. SaaS Pricing.",
      subtitle: "Forget the $2,000 agency quote.",
      starter: {
        name: "Starter",
        price: "$15",
        period: "/month",
        description: "Perfect for resumes and services",
        feature1: "AI Website Builder",
        feature2: "Native RTL Support",
        feature3: "Smart Templates",
        feature4: "Mobile Responsive",
        cta: "Start Now",
      },
      pro: {
        name: "Pro",
        price: "$35",
        period: "/month",
        description: "Full E-commerce & AI Power",
        badge: "MOST POPULAR",
        feature1: "Everything in Starter",
        feature2: "Advanced AI Features",
        feature3: "Priority Support",
        feature4: "Analytics Dashboard",
        cta: "Start Now",
      },
      annualSave: "Save 15% with Annual Billing",
    },
    // Footer
    footer: {
      copyright: "© 2025 Tamkeen. All rights reserved.",
    },
  },
}

export type Translations = typeof translations.ar
