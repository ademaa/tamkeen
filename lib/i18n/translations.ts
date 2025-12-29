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
      title: "عملك، على الإنترنت.",
      titleGradient: "بذكاء اصطناعي، مصمم للشرق الأوسط.",
      subtitle:
        "توقف عن المعاناة مع الأدوات العالمية التي تكسر تصميم اللغة العربية. ابنِ موقعًا احترافيًا متوافقًا مع اللغة العربية في 60 ثانية - ابدأ بقالب ذكي أو اكتب رؤيتك فقط.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      submitButton: "انضم إلينا الآن",
      submitting: "جاري الإرسال...",
      successMessage: "أنت في القائمة! تحقق من بريدك الإلكتروني قريبًا.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      limitedSpots: "أماكن محدودة متاحة للنسخة التجريبية. احصل على 14 يومًا مجانًا + خصم.",
    },
    // Chat Demo
    demo: {
      title: "مثال لإنشاء الموقع",
      subtitle: "فقط صِف ما تحتاجه. تمكين يُنشئه على الفور.",
      userMessage: "أريد موقع عود فاخر بألوان أسود وذهبي.",
      aiStatus: "تم إنشاء الموقع",
      aiDescription: "تصميم أنيق باللونين الأسود والذهبي مع دعم RTL. جاهز للتخصيص بأوامر نصية.",
      logoText: "عود فاخر",
    },
    // Comparison Section
    comparison: {
      title: "لماذا لا يزال بناء موقع عربي صعبًا جدًا؟",
      subtitle: "قارن خياراتك وانظر لماذا تمكين هو الحل الوحيد المبني للعربية من الأساس.",
      globalGiants: {
        title: "العمالقة العالميون",
        subtitle: "(المنصات الاخري)",
        point1: "تخطيطات RTL معطلة",
        point2: "صور غربية عامة",
      },
      localAgencies: {
        title: "الوكالات المحلية",
        subtitle: "(وكالات التسويق)",
        point1: "مكلفة ($1,000+)",
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
      title: "كيف يعمل",
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
      title: "Your Business, Online.",
      titleGradient: "Fluent in AI, Native to MENA.",
      subtitle:
        "Stop wrestling with global tools that break your Arabic layout. Build a professional, RTL-perfect website in 60 seconds—start with a smart template or just type your vision.",
      emailPlaceholder: "Enter your email address",
      submitButton: "Join Us Now",
      submitting: "Joining...",
      successMessage: "You're on the list! Check your email soon.",
      errorMessage: "Something went wrong. Please try again.",
      limitedSpots: "Limited spots available for the Beta. Get 14 days free + a discount.",
    },
    // Chat Demo
    demo: {
      title: "See It In Action",
      subtitle: "Just describe what you need. Tamkeen creates it instantly.",
      userMessage: "I need a luxury oud store with a black and gold theme.",
      aiStatus: "Website created",
      aiDescription: "Elegant black and gold design with RTL support. Ready to customize with text commands.",
      logoText: "LUXURY OUD",
    },
    // Comparison Section
    comparison: {
      title: "Why is building an Arabic website still so hard?",
      subtitle: "Compare your options and see why Tamkeen is the only solution built for Arabic from the ground up.",
      globalGiants: {
        title: "Global Giants",
        subtitle: "(Wix/Squarespace)",
        point1: "Broken RTL layouts",
        point2: "Generic Western photos",
      },
      localAgencies: {
        title: "Local Agencies",
        subtitle: "(Marketing Agencies)",
        point1: "Expensive ($1,000+)",
        point2: "Slow turnaround (Weeks)",
      },
      tamkeen: {
        title: "Tamkeen",
        subtitle: "(Our Solution)",
        point1Title: "Native RTL:",
        point1: "Built for Arabic from code-up",
        point2Title: "Hybrid AI:",
        point2: "Chat to build or use pro templates",
      },
    },
    // Features Section
    features: {
      title: "How It Works",
      subtitle: "The Hybrid Model: Choose your path to a perfect Arabic website",
      step1: {
        badge: "Step 1",
        title: "Choose Your Path",
        optionA: "Option A:",
        optionAText:
          'The Magic Prompt - Start with a blank canvas. Type: "I need a luxury oud store with a black and gold theme."',
        optionB: "Option B:",
        optionBText: 'The Smart Template - Pick from 50+ localized designs like "Riyadh Cafe" or "Dubai Consultant."',
      },
      step2: {
        badge: "Step 2",
        title: "Customize with Chat",
        question1: "Don't like the color? Just type:",
        answer1: '"Make the buttons emerald green."',
        question2: "Need better copy? Type:",
        answer2: '"Rewrite this headline to be more formal."',
      },
      step3: {
        badge: "Step 3",
        title: "Launch & Sell",
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
        description: "Ideal for portfolios & services",
        feature1: "AI Website Builder",
        feature2: "Native RTL Support",
        feature3: "Smart Templates",
        feature4: "Mobile Responsive",
        cta: "Get Started",
      },
      pro: {
        name: "Pro",
        price: "$35",
        period: "/month",
        description: "Full E-commerce & AI Power",
        badge: "POPULAR",
        feature1: "Everything in Starter",
        feature2: "Advanced AI Features",
        feature3: "Priority Support",
        feature4: "Analytics Dashboard",
        cta: "Get Started",
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
