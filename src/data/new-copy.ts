import type { Locale, LocalizedText } from "@/types";

export const destinationPortalCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    currencyAlt: string;
    loveAlt: string;
    flagAlt: string;
  }
> = {
  en: {
    eyebrow: "Discover Syria",
    title: "A country of living stories",
    description:
      "Explore Syria by governorate through a carefully organised collection of landscapes, heritage, coastlines and cuisine.",
    button: "Explore Destinations",
    currencyAlt: "Syrian currency beside a Syrian passport",
    loveAlt: "I love Syria sign",
    flagAlt: "The new Syrian flag",
  },
  de: {
    eyebrow: "Syrien entdecken",
    title: "Ein Land voller lebendiger Geschichten",
    description:
      "Entdecken Sie Syrien nach Regionen geordnet - mit Landschaften, Kulturerbe, Küsten und kulinarischen Eindrücken.",
    button: "Reiseziele entdecken",
    currencyAlt: "Syrische Währung neben einem syrischen Reisepass",
    loveAlt: "Ich-liebe-Syrien-Schild",
    flagAlt: "Die neue syrische Flagge",
  },
  ar: {
    eyebrow: "اكتشف سوريا",
    title: "بلد تروي تفاصيله حكايات حيّة",
    description:
      "تعرّف إلى سوريا من خلال أقسام مرتبة حسب المحافظات، تجمع الطبيعة والتاريخ والساحل والمطبخ السوري.",
    button: "اطّلع على الوجهات",
    currencyAlt: "العملة السورية بجانب جواز سفر سوري",
    loveAlt: "مجسم أحب سوريا",
    flagAlt: "العلم السوري الجديد",
  },
};

export const destinationsPageCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    sectionLabel: string;
    backHome: string;
    foodLabel: string;
  }
> = {
  en: {
    eyebrow: "Syria in pictures",
    title: "Destinations by governorate",
    description:
      "A high-resolution visual journey across Syria, organised by governorate and completed with a dedicated collection of Syrian cuisine.",
    sectionLabel: "Jump to a section",
    backHome: "Back to home",
    foodLabel: "Syrian cuisine",
  },
  de: {
    eyebrow: "Syrien in Bildern",
    title: "Reiseziele nach Regionen",
    description:
      "Eine hochauflösende visuelle Reise durch Syrien - nach Regionen geordnet und ergänzt um eine eigene Sammlung zur syrischen Küche.",
    sectionLabel: "Direkt zu einer Region",
    backHome: "Zur Startseite",
    foodLabel: "Syrische Küche",
  },
  ar: {
    eyebrow: "سوريا بالصور",
    title: "الوجهات حسب المحافظات",
    description:
      "رحلة بصرية عالية الدقة عبر سوريا، مرتبة حسب المحافظات، مع قسم مستقل للمطبخ السوري.",
    sectionLabel: "الانتقال إلى قسم",
    backHome: "العودة إلى الرئيسية",
    foodLabel: "المطبخ السوري",
  },
};

export const trustPoints: Array<{
  id: string;
  title: LocalizedText;
}> = [
  {
    id: "german-company",
    title: {
      en: "Licensed German Travel Company",
      de: "Lizenziertes deutsches Reiseunternehmen",
      ar: "شركة سفر ألمانية مرخّصة",
    },
  },
  {
    id: "syrian-partner",
    title: {
      en: "Trusted Local Syrian Partner",
      de: "Vertrauenswürdiger syrischer Partner vor Ort",
      ar: "شريك سوري محلي موثوق",
    },
  },
  {
    id: "support",
    title: {
      en: "24/7 Personal Assistance",
      de: "Persönliche Betreuung rund um die Uhr",
      ar: "مساعدة شخصية على مدار الساعة",
    },
  },
  {
    id: "transparent-costs",
    title: {
      en: "No Hidden Ground-Service Costs",
      de: "Keine versteckten Kosten bei den Bodenleistungen",
      ar: "لا تكاليف مخفية للخدمات الأرضية",
    },
  },
];

export const trustCopy: Record<Locale, { eyebrow: string; title: string }> = {
  en: { eyebrow: "Travel with confidence", title: "Four commitments, clearly stated" },
  de: { eyebrow: "Mit Vertrauen reisen", title: "Vier klare Leistungsversprechen" },
  ar: { eyebrow: "سافر بثقة", title: "أربع نقاط واضحة تضمن تجربة أكثر اطمئنانًا" },
};

export const formCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    travellers: string;
    date: string;
    message: string;
    submit: string;
    privacy: string;
    required: string;
    whatsappIntro: string;
  }
> = {
  en: {
    eyebrow: "Journey request",
    title: "Tell us how you would like to travel",
    description:
      "Complete the short form and your request will open in WhatsApp, ready to send directly to our travel team.",
    name: "Full name",
    email: "Email address",
    phone: "Phone / WhatsApp",
    country: "Country of residence",
    travellers: "Number of travellers",
    date: "Preferred travel date",
    message: "Your wishes or questions",
    submit: "Send Journey Request",
    privacy: "Your details are not stored on this website. They are transferred to WhatsApp only when you submit.",
    required: "Please complete all required fields.",
    whatsappIntro: "New journey request from medyatravel.de",
  },
  de: {
    eyebrow: "Reiseanfrage",
    title: "Erzählen Sie uns, wie Sie reisen möchten",
    description:
      "Füllen Sie das kurze Formular aus. Ihre Anfrage wird anschließend in WhatsApp geöffnet und kann direkt an unser Reiseteam gesendet werden.",
    name: "Vor- und Nachname",
    email: "E-Mail-Adresse",
    phone: "Telefon / WhatsApp",
    country: "Wohnsitzland",
    travellers: "Anzahl der Reisenden",
    date: "Gewünschter Reisezeitraum",
    message: "Wünsche oder Fragen",
    submit: "Reiseanfrage senden",
    privacy: "Ihre Angaben werden auf dieser Website nicht gespeichert. Sie werden erst beim Absenden an WhatsApp übergeben.",
    required: "Bitte füllen Sie alle Pflichtfelder aus.",
    whatsappIntro: "Neue Reiseanfrage über medyatravel.de",
  },
  ar: {
    eyebrow: "طلب رحلة",
    title: "أخبرنا كيف ترغب أن تكون رحلتك",
    description:
      "املأ النموذج المختصر، وسيُفتح طلبك في واتساب جاهزًا لإرساله مباشرة إلى فريق الرحلات لدينا.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف / واتساب",
    country: "بلد الإقامة",
    travellers: "عدد المسافرين",
    date: "التاريخ المفضل للسفر",
    message: "رغباتك أو استفساراتك",
    submit: "إرسال طلب الرحلة",
    privacy: "لا تُخزّن بياناتك في الموقع، بل تُنقل إلى واتساب فقط عند إرسال الطلب.",
    required: "يرجى تعبئة جميع الحقول المطلوبة.",
    whatsappIntro: "طلب رحلة جديد عبر medyatravel.de",
  },
};
