import type { Locale } from "@/types";

type SiteCopy = {
  languageName: string;
  languageSwitchLabel: string;
  common: {
    home: string;
    mainNavigation: string;
    openMenu: string;
    closeMenu: string;
    bookNow: string;
  };
  hero: {
    eyebrow: string;
    headingLineOne: string;
    headingLineTwo: string;
    description: string;
    destinationsButton: string;
    catalogueButton: string;
    route: string;
    floatingLabel: string;
  };
  destinations: {
    eyebrow: string;
    title: string;
    description: string;
  };
  experiences: {
    eyebrow: string;
    title: string;
    description: string;
    arrivalEyebrow: string;
    arrivalTitle: string;
    airplaneAlt: string;
  };
  catalogue: {
    eyebrow: string;
    title: string;
    description: string;
    downloadButton: string;
    itinerariesButton: string;
    partnerAlt: string;
    partnerDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
    founderAlt: string;
    partnerAlt: string;
    partnerLabel: string;
  };
  footer: {
    slogan: string;
    description: string;
    planJourney: string;
    navigate: string;
    contact: string;
    generalEnquiries: string;
    bookings: string;
    whatsapp: string;
    instagramAria: string;
    facebookAria: string;
    rights: string;
    navigationAria: string;
  };
  socialDock: {
    aria: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    email: string;
  };
};

export const siteTranslations: Record<Locale, SiteCopy> = {
  en: {
    languageName: "English",
    languageSwitchLabel: "Change language",
    common: {
      home: "Home",
      mainNavigation: "Main navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      bookNow: "Book Now",
    },
    hero: {
      eyebrow: "Curated journeys to Syria",
      headingLineOne: "Reisen wie es",
      headingLineTwo: "sein sollte",
      description:
        "Bespoke journeys through Syria, created for travelers who value authenticity, culture, comfort, and unforgettable human encounters.",
      destinationsButton: "Explore Destinations",
      catalogueButton: "View Catalogue",
      route: "Germany · Syria",
      floatingLabel: "Private cultural journeys",
    },
    destinations: {
      eyebrow: "Destinations",
      title: "Extraordinary Places",
      description:
        "From ancient capitals to sun-drenched coastlines, discover Syria's most captivating destinations through the lens of luxury travel.",
    },
    experiences: {
      eyebrow: "Experiences",
      title: "Syria, Unveiled",
      description:
        "From sacred heritage sites to refined coastal escapes — every journey is composed with the eye of a curator and the care of a private concierge.",
      arrivalEyebrow: "Seamless Arrival",
      arrivalTitle: "Private aviation & white-glove transfers",
      airplaneAlt: "Luxury business travel with an airplane in flight at sunset",
    },
    catalogue: {
      eyebrow: "Catalogue",
      title: "MEDYA TRAVEL Catalogue",
      description: "Explore our luxury journeys.",
      downloadButton: "Download Brochure",
      itinerariesButton: "Explore Itineraries",
      partnerAlt: "Syrian travel partner logo",
      partnerDescription:
        "Crafted in partnership with trusted local experts to ensure every detail of your Syrian journey meets the highest standards of comfort, quality, and authenticity.",
    },
    about: {
      eyebrow: "About Us",
      title: "A New Standard in Syrian Travel",
      paragraphOne:
        "MEDYA TRAVEL was founded on a singular belief: that Syria deserves to be experienced not as a destination, but as a revelation. We design private journeys for travelers who value discretion, cultural depth, and uncompromising comfort.",
      paragraphTwo:
        "Every itinerary is personally composed — from heritage walks through Damascus to sunset dinners on the Mediterranean coast — with the precision of a luxury maison and the warmth of a trusted guide.",
      founderAlt: "MEDYA TRAVEL founder profile",
      partnerAlt: "Official Syrian partner logo",
      partnerLabel: "Official Syrian Partner",
    },
    footer: {
      slogan: "Travel as it should be",
      description:
        "Bespoke private journeys through Syria, connecting travelers from Germany with the country's history, culture, hospitality, and extraordinary human encounters.",
      planJourney: "Plan Your Journey",
      navigate: "Navigate",
      contact: "Contact",
      generalEnquiries: "General enquiries",
      bookings: "Bookings",
      whatsapp: "WhatsApp",
      instagramAria: "MEDYA TRAVEL on Instagram",
      facebookAria: "MEDYA TRAVEL on Facebook",
      rights: "All rights reserved.",
      navigationAria: "Footer navigation",
    },
    socialDock: {
      aria: "Contact MEDYA TRAVEL",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      email: "Email",
    },
  },
  de: {
    languageName: "Deutsch",
    languageSwitchLabel: "Sprache wechseln",
    common: {
      home: "Startseite",
      mainNavigation: "Hauptnavigation",
      openMenu: "Navigationsmenü öffnen",
      closeMenu: "Navigationsmenü schließen",
      bookNow: "Reise jetzt buchen",
    },
    hero: {
      eyebrow: "Sorgfältig kuratierte Reisen nach Syrien",
      headingLineOne: "Reisen wie es",
      headingLineTwo: "sein sollte",
      description:
        "Maßgeschneiderte Reisen durch Syrien für Menschen, die Authentizität, Kultur, Komfort und unvergessliche Begegnungen schätzen.",
      destinationsButton: "Reiseziele entdecken",
      catalogueButton: "Reiseprogramm ansehen",
      route: "Deutschland · Syrien",
      floatingLabel: "Private Kulturreisen",
    },
    destinations: {
      eyebrow: "Reiseziele",
      title: "Außergewöhnliche Orte",
      description:
        "Von jahrtausendealten Städten bis zu sonnenverwöhnten Küsten: Entdecken Sie Syriens faszinierendste Reiseziele mit dem Anspruch einer exklusiv geplanten Reise.",
    },
    experiences: {
      eyebrow: "Erlebnisse",
      title: "Syrien neu entdecken",
      description:
        "Von bedeutenden Kulturstätten bis zu stilvollen Rückzugsorten am Mittelmeer – jede Reise wird mit dem Blick eines Kurators und der Sorgfalt eines persönlichen Reisebegleiters gestaltet.",
      arrivalEyebrow: "Komfortabel ankommen",
      arrivalTitle: "Private Flüge und Transfers mit erstklassigem Service",
      airplaneAlt: "Exklusive Geschäftsreise mit einem Flugzeug bei Sonnenuntergang",
    },
    catalogue: {
      eyebrow: "Reiseprogramm",
      title: "MEDYA TRAVEL Reiseprogramm",
      description: "Entdecken Sie unsere exklusiv zusammengestellten Reisen.",
      downloadButton: "Reisebroschüre herunterladen",
      itinerariesButton: "Reiserouten entdecken",
      partnerAlt: "Logo unseres syrischen Reisepartners",
      partnerDescription:
        "Gemeinsam mit erfahrenen Partnern vor Ort stellen wir sicher, dass jedes Detail Ihrer Syrien-Reise höchsten Ansprüchen an Komfort, Qualität und Authentizität entspricht.",
    },
    about: {
      eyebrow: "Über uns",
      title: "Ein neuer Maßstab für Reisen nach Syrien",
      paragraphOne:
        "MEDYA TRAVEL entstand aus einer klaren Überzeugung: Syrien soll nicht nur besucht, sondern in seiner ganzen Tiefe erlebt werden. Wir gestalten private Reisen für Menschen, die Diskretion, kulturelle Substanz und kompromisslosen Komfort schätzen.",
      paragraphTwo:
        "Jede Reiseroute wird persönlich zusammengestellt – von historischen Spaziergängen durch Damaskus bis zu Abendessen bei Sonnenuntergang an der Mittelmeerküste. Präzise geplant, stilvoll umgesetzt und begleitet von echter syrischer Gastfreundschaft.",
      founderAlt: "Profilbild der Gründerin oder des Gründers von MEDYA TRAVEL",
      partnerAlt: "Logo des offiziellen syrischen Partners",
      partnerLabel: "Offizieller Partner in Syrien",
    },
    footer: {
      slogan: "Reisen wie es sein sollte",
      description:
        "Exklusiv geplante Privatreisen durch Syrien, die Reisende aus Deutschland mit Geschichte, Kultur, Gastfreundschaft und außergewöhnlichen Begegnungen verbinden.",
      planJourney: "Reise jetzt buchen",
      navigate: "Navigation",
      contact: "Kontakt",
      generalEnquiries: "Allgemeine Anfragen",
      bookings: "Buchungsanfragen",
      whatsapp: "WhatsApp",
      instagramAria: "MEDYA TRAVEL auf Instagram",
      facebookAria: "MEDYA TRAVEL auf Facebook",
      rights: "Alle Rechte vorbehalten.",
      navigationAria: "Navigation im Seitenfuß",
    },
    socialDock: {
      aria: "MEDYA TRAVEL kontaktieren",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      email: "E-Mail",
    },
  },
  ar: {
    languageName: "العربية",
    languageSwitchLabel: "تغيير اللغة",
    common: {
      home: "الصفحة الرئيسية",
      mainNavigation: "القائمة الرئيسية",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      bookNow: "احجز رحلتك الآن",
    },
    hero: {
      eyebrow: "رحلات مختارة بعناية إلى سوريا",
      headingLineOne: "سافر كما",
      headingLineTwo: "يليق بك",
      description:
        "رحلات مصممة خصيصًا عبر سوريا للمسافرين الذين يقدّرون الأصالة والثقافة والراحة واللقاءات الإنسانية التي لا تُنسى.",
      destinationsButton: "اكتشف الوجهات",
      catalogueButton: "عرض برنامج الرحلة",
      route: "ألمانيا · سوريا",
      floatingLabel: "رحلات ثقافية خاصة",
    },
    destinations: {
      eyebrow: "الوجهات",
      title: "أماكن استثنائية",
      description:
        "من المدن الضاربة في عمق التاريخ إلى السواحل المشرقة، اكتشف أجمل وجهات سوريا ضمن تجربة سفر راقية ومصممة بعناية.",
    },
    experiences: {
      eyebrow: "التجارب",
      title: "سوريا كما لم ترها من قبل",
      description:
        "من المواقع الحضارية المقدسة إلى الملاذات الراقية على الساحل، تُصاغ كل رحلة بعين الخبير وعناية المضيف الخاص.",
      arrivalEyebrow: "وصول بمنتهى السلاسة",
      arrivalTitle: "طيران خاص وتنقلات بخدمة فائقة العناية",
      airplaneAlt: "طائرة في رحلة فاخرة عند غروب الشمس",
    },
    catalogue: {
      eyebrow: "برنامج الرحلة",
      title: "برنامج رحلات MEDYA TRAVEL",
      description: "اكتشف رحلاتنا الراقية المصممة بعناية.",
      downloadButton: "تحميل كتيب الرحلة",
      itinerariesButton: "استكشف مسارات الرحلات",
      partnerAlt: "شعار شريكنا السياحي في سوريا",
      partnerDescription:
        "نعمل بالشراكة مع خبراء موثوقين داخل سوريا لضمان تنفيذ كل تفصيل في رحلتك بأعلى معايير الراحة والجودة والأصالة.",
    },
    about: {
      eyebrow: "من نحن",
      title: "معيار جديد للسفر إلى سوريا",
      paragraphOne:
        "انطلقت MEDYA TRAVEL من رؤية واضحة: أن تُعاش سوريا كتجربة متكاملة، لا أن تُزار كوجهة عابرة. نصمم رحلات خاصة للمسافرين الذين يقدّرون الخصوصية والعمق الثقافي والراحة دون تنازلات.",
      paragraphTwo:
        "يُصاغ كل برنامج بعناية شخصية، من الجولات التراثية في دمشق إلى عشاء الغروب على ساحل البحر المتوسط، بدقة تليق بتجربة سفر راقية وبدفء الضيافة السورية الأصيلة.",
      founderAlt: "صورة مؤسس أو مؤسسة MEDYA TRAVEL",
      partnerAlt: "شعار الشريك السوري الرسمي",
      partnerLabel: "الشريك الرسمي في سوريا",
    },
    footer: {
      slogan: "سافر كما يليق بك",
      description:
        "رحلات خاصة ومنتقاة بعناية عبر سوريا، تصل المسافرين من ألمانيا بتاريخ البلاد وثقافتها وكرم ضيافتها وتجاربها الإنسانية الاستثنائية.",
      planJourney: "احجز رحلتك الآن",
      navigate: "التنقل",
      contact: "تواصل معنا",
      generalEnquiries: "الاستفسارات العامة",
      bookings: "طلبات الحجز",
      whatsapp: "واتساب",
      instagramAria: "MEDYA TRAVEL على إنستغرام",
      facebookAria: "MEDYA TRAVEL على فيسبوك",
      rights: "جميع الحقوق محفوظة.",
      navigationAria: "التنقل في تذييل الموقع",
    },
    socialDock: {
      aria: "تواصل مع MEDYA TRAVEL",
      whatsapp: "واتساب",
      instagram: "إنستغرام",
      facebook: "فيسبوك",
      email: "البريد الإلكتروني",
    },
  },
};
