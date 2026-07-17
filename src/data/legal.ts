import type { Locale } from "@/types";

export type LegalDocumentType = "imprint" | "privacy" | "cookies" | "terms";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  updated: string;
  warning?: string;
  sections: LegalSection[];
};

const companyDetails = {
  en: "MEDYA TRAVEL - full legal name and legal form must be added; service address in Germany must be added; authorised representative, register court, registration number, competent supervisory authority and VAT ID must be added where applicable.",
  de: "MEDYA TRAVEL - vollständige Firmierung und Rechtsform ergänzen; ladungsfähige Anschrift in Deutschland ergänzen; vertretungsberechtigte Person, Registergericht, Registernummer, zuständige Aufsichtsbehörde und Umsatzsteuer-ID ergänzen, soweit vorhanden.",
  ar: "MEDYA TRAVEL - يجب إضافة الاسم القانوني الكامل والشكل القانوني، والعنوان الرسمي داخل ألمانيا، واسم الممثل القانوني، والمحكمة ورقم السجل، والجهة الرقابية المختصة، والرقم الضريبي إن وُجد.",
};

const commonContact = {
  en: "Email: info@medyatravel.de | Bookings: booking@medyatravel.de | Telephone / WhatsApp: +49 163 4169253",
  de: "E-Mail: info@medyatravel.de | Buchungen: booking@medyatravel.de | Telefon / WhatsApp: +49 163 4169253",
  ar: "البريد الإلكتروني: info@medyatravel.de | الحجوزات: booking@medyatravel.de | الهاتف / واتساب: +49 163 4169253",
};

export const legalDocuments: Record<Locale, Record<LegalDocumentType, LegalDocument>> = {
  en: {
    imprint: {
      title: "Imprint",
      updated: "Last updated: July 2026",
      warning: "Important: the mandatory company particulars below are not available in the project and must be completed before publication.",
      sections: [
        { heading: "Information pursuant to Section 5 DDG", paragraphs: [companyDetails.en] },
        { heading: "Contact", paragraphs: [commonContact.en] },
        { heading: "Editorial responsibility", paragraphs: ["The name and service address of the person responsible for editorial content must be added if the website contains journalistic-editorial content."] },
        { heading: "Consumer dispute resolution", paragraphs: ["State whether MEDYA TRAVEL is willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. This statement must reflect the company’s actual legal position."] },
        { heading: "Liability for content and links", paragraphs: ["MEDYA TRAVEL is responsible for its own content in accordance with applicable law. External links are checked when added; responsibility for linked content remains with the respective provider."] },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      warning: "This is a website-specific working draft. Add the complete controller and hosting-provider details before publication and have the final wording legally reviewed.",
      sections: [
        { heading: "Controller", paragraphs: [companyDetails.en, commonContact.en] },
        { heading: "Access data and hosting", paragraphs: ["When this website is accessed, the hosting provider may process technical log data such as IP address, date and time, requested file, referrer, browser and operating system to deliver and secure the website. Add the hosting provider’s complete identity, processing location, legal basis and retention period."] },
        { heading: "Journey request form", paragraphs: ["The journey request form is processed locally in the browser. The website does not store the entered information. When the visitor submits the form, WhatsApp opens with the completed message. Data is transferred to WhatsApp only after this action. WhatsApp’s own privacy terms then apply."] },
        { heading: "Email, telephone and social media", paragraphs: ["When you contact MEDYA TRAVEL by email, telephone, WhatsApp or through a social platform, the information you provide is processed to answer your enquiry and prepare or perform travel services. The applicable legal basis and retention period depend on the nature of the enquiry and any resulting contract."] },
        { heading: "Your rights", paragraphs: ["Subject to the GDPR requirements, you may request access, rectification, erasure, restriction, data portability and object to processing. You may also lodge a complaint with a competent data-protection supervisory authority."] },
        { heading: "International transfers", paragraphs: ["Using WhatsApp, Facebook or Instagram may involve processing outside the European Economic Area. Review and document the safeguards used by each service before publication."] },
      ],
    },
    cookies: {
      title: "Cookie Settings",
      updated: "Last updated: July 2026",
      sections: [
        { heading: "Current website status", paragraphs: ["The current version of medyatravel.de does not activate analytics, advertising or marketing cookies. It does not load tracking tools before consent."] },
        { heading: "Technically necessary functions", paragraphs: ["Essential technical requests are used to deliver the website, images, videos and security functions. These do not require an optional marketing choice where they are strictly necessary for the service requested by the visitor."] },
        { heading: "External services", paragraphs: ["WhatsApp, Instagram and Facebook are opened only after the visitor clicks the corresponding link. Their own privacy and storage rules apply after leaving this website."] },
        { heading: "Future changes", paragraphs: ["If analytics, embedded maps, advertising pixels or other non-essential technologies are added later, a consent mechanism must be implemented before those services are activated, and this page must be updated."] },
      ],
    },
    terms: {
      title: "General Terms and Conditions",
      updated: "Draft status: July 2026",
      warning: "This draft is not a substitute for travel-law advice. It must be completed and approved by a German lawyer before it is used for bookings.",
      sections: [
        { heading: "1. Scope and contracting party", paragraphs: ["These terms are intended for travel services offered by MEDYA TRAVEL. Add the full legal identity and clarify whether MEDYA TRAVEL acts as tour operator, travel agent or provider of linked travel arrangements for each offer."] },
        { heading: "2. Formation of contract", paragraphs: ["A website enquiry is non-binding. A contract is formed only after the traveller receives and accepts an individual offer or booking confirmation containing the essential travel services, total price and contractual documents."] },
        { heading: "3. Travel services and price", paragraphs: ["The scope of services is determined by the specific itinerary, offer and booking confirmation. Passport, visa, insurance, personal expenses and gratuities are included only when expressly stated."] },
        { heading: "4. Payment and insolvency protection", paragraphs: ["Add the valid deposit and final-payment rules. Where MEDYA TRAVEL is the organiser of a package travel contract, payments may be requested only in compliance with the statutory insolvency-protection requirements."] },
        { heading: "5. Changes, cancellation and withdrawal", paragraphs: ["Do not publish fixed cancellation charges until they have been legally drafted and economically calculated. Statutory traveller rights, including rights relating to unavoidable and extraordinary circumstances, remain unaffected."] },
        { heading: "6. Traveller obligations and defects", paragraphs: ["Travellers should promptly report defects and allow reasonable remedial action. Statutory rights under German package-travel law remain unaffected."] },
        { heading: "7. Passport, visa, health and insurance", paragraphs: ["The pre-contractual information must state applicable passport, visa and health requirements. Travellers remain responsible for complying with requirements applicable to their nationality unless the contract expressly provides otherwise."] },
        { heading: "8. Final provisions", paragraphs: ["Add applicable-law, jurisdiction, severability and consumer-dispute wording only after legal review and in a form compatible with mandatory consumer-protection law."] },
      ],
    },
  },
  de: {
    imprint: {
      title: "Impressum",
      updated: "Stand: Juli 2026",
      warning: "Wichtig: Die gesetzlich erforderlichen Unternehmensangaben sind im Projekt nicht vorhanden und müssen vor der Veröffentlichung vollständig ergänzt werden.",
      sections: [
        { heading: "Angaben gemäß § 5 DDG", paragraphs: [companyDetails.de] },
        { heading: "Kontakt", paragraphs: [commonContact.de] },
        { heading: "Redaktionell verantwortlich", paragraphs: ["Sofern journalistisch-redaktionelle Inhalte angeboten werden, sind Name und ladungsfähige Anschrift der verantwortlichen Person zu ergänzen."] },
        { heading: "Verbraucherstreitbeilegung", paragraphs: ["Ergänzen Sie, ob MEDYA TRAVEL bereit oder verpflichtet ist, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die Erklärung muss der tatsächlichen Rechtslage des Unternehmens entsprechen."] },
        { heading: "Haftung für Inhalte und Links", paragraphs: ["MEDYA TRAVEL ist nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich. Externe Links werden bei ihrer Aufnahme geprüft; für die Inhalte verlinkter Seiten bleibt der jeweilige Anbieter verantwortlich."] },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      updated: "Stand: Juli 2026",
      warning: "Dies ist ein auf die aktuelle Website abgestimmter Arbeitsentwurf. Verantwortlichen- und Hostingangaben müssen vor Veröffentlichung ergänzt und die Endfassung rechtlich geprüft werden.",
      sections: [
        { heading: "Verantwortlicher", paragraphs: [companyDetails.de, commonContact.de] },
        { heading: "Zugriffsdaten und Hosting", paragraphs: ["Beim Aufruf der Website kann der Hostinganbieter technische Protokolldaten wie IP-Adresse, Zeitpunkt, angeforderte Datei, Referrer, Browser und Betriebssystem verarbeiten, um die Website bereitzustellen und abzusichern. Ergänzen Sie den vollständigen Hostinganbieter, Verarbeitungsort, Rechtsgrundlage und Speicherdauer."] },
        { heading: "Formular für Reiseanfragen", paragraphs: ["Das Formular wird lokal im Browser verarbeitet. Die eingegebenen Daten werden nicht auf dieser Website gespeichert. Beim Absenden öffnet sich WhatsApp mit der vorbereiteten Nachricht. Erst durch diese Handlung werden Angaben an WhatsApp übermittelt. Anschließend gelten die Datenschutzbestimmungen von WhatsApp."] },
        { heading: "Kontakt per E-Mail, Telefon und sozialen Medien", paragraphs: ["Bei einer Kontaktaufnahme werden die mitgeteilten Angaben verarbeitet, um die Anfrage zu beantworten und Reiseleistungen vorzubereiten oder durchzuführen. Rechtsgrundlage und Speicherdauer richten sich nach Art der Anfrage und einem gegebenenfalls entstehenden Vertragsverhältnis."] },
        { heading: "Ihre Rechte", paragraphs: ["Unter den Voraussetzungen der DSGVO bestehen insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde."] },
        { heading: "Drittlandübermittlungen", paragraphs: ["Bei der Nutzung von WhatsApp, Facebook oder Instagram kann eine Verarbeitung außerhalb des Europäischen Wirtschaftsraums erfolgen. Die jeweils eingesetzten Garantien müssen vor Veröffentlichung geprüft und dokumentiert werden."] },
      ],
    },
    cookies: {
      title: "Cookie-Einstellungen",
      updated: "Stand: Juli 2026",
      sections: [
        { heading: "Aktueller Stand der Website", paragraphs: ["Die aktuelle Version von medyatravel.de setzt keine Analyse-, Werbe- oder Marketing-Cookies ein und lädt keine Trackingdienste vor einer Einwilligung."] },
        { heading: "Technisch erforderliche Funktionen", paragraphs: ["Technisch erforderliche Anfragen dienen der Bereitstellung der Website, ihrer Bilder, Videos und Sicherheitsfunktionen. Soweit sie für den ausdrücklich gewünschten Dienst unbedingt erforderlich sind, ist keine optionale Marketingeinwilligung notwendig."] },
        { heading: "Externe Dienste", paragraphs: ["WhatsApp, Instagram und Facebook werden erst geöffnet, nachdem Besucher den jeweiligen Link aktiv anklicken. Ab diesem Zeitpunkt gelten die Datenschutz- und Speicherregeln des externen Dienstes."] },
        { heading: "Künftige Änderungen", paragraphs: ["Werden künftig Analysewerkzeuge, eingebettete Karten, Werbepixel oder andere nicht erforderliche Technologien eingesetzt, muss vor ihrer Aktivierung eine Einwilligungslösung eingerichtet und diese Seite aktualisiert werden."] },
      ],
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      updated: "Entwurfsstand: Juli 2026",
      warning: "Dieser Entwurf ersetzt keine reiserechtliche Beratung. Vor Verwendung für Buchungen muss er vervollständigt und von einer in Deutschland zugelassenen Rechtsanwältin oder einem Rechtsanwalt geprüft werden.",
      sections: [
        { heading: "1. Geltungsbereich und Vertragspartner", paragraphs: ["Diese Bedingungen sind für Reiseleistungen von MEDYA TRAVEL vorgesehen. Die vollständige Firmierung ist zu ergänzen. Für jedes Angebot muss klar sein, ob MEDYA TRAVEL als Reiseveranstalter, Reisevermittler oder Vermittler verbundener Reiseleistungen handelt."] },
        { heading: "2. Vertragsschluss", paragraphs: ["Eine Anfrage über die Website ist unverbindlich. Ein Vertrag kommt erst zustande, wenn Reisende ein individuelles Angebot oder eine Buchungsbestätigung mit den wesentlichen Reiseleistungen, dem Gesamtpreis und den Vertragsunterlagen annehmen."] },
        { heading: "3. Reiseleistungen und Reisepreis", paragraphs: ["Der Leistungsumfang ergibt sich aus Reiseprogramm, Angebot und Buchungsbestätigung. Pass-, Visa- und Versicherungsleistungen, persönliche Ausgaben und Trinkgelder sind nur enthalten, wenn dies ausdrücklich zugesagt wurde."] },
        { heading: "4. Zahlung und Insolvenzsicherung", paragraphs: ["Gültige Regeln zu Anzahlung und Restzahlung sind zu ergänzen. Soweit MEDYA TRAVEL Veranstalter einer Pauschalreise ist, dürfen Zahlungen nur unter Einhaltung der gesetzlichen Anforderungen an die Insolvenzsicherung verlangt werden."] },
        { heading: "5. Änderungen, Rücktritt und Stornierung", paragraphs: ["Veröffentlichen Sie keine pauschalen Stornokosten, bevor diese rechtlich gestaltet und wirtschaftlich kalkuliert wurden. Gesetzliche Rechte der Reisenden, insbesondere bei unvermeidbaren außergewöhnlichen Umständen, bleiben unberührt."] },
        { heading: "6. Mitwirkung und Reisemängel", paragraphs: ["Reisemängel sollen unverzüglich angezeigt und eine angemessene Abhilfe ermöglicht werden. Die gesetzlichen Rechte nach dem Pauschalreiserecht bleiben unberührt."] },
        { heading: "7. Pass-, Visa-, Gesundheits- und Versicherungshinweise", paragraphs: ["Die vorvertraglichen Informationen müssen die einschlägigen Pass-, Visa- und Gesundheitsanforderungen enthalten. Reisende bleiben für die Einhaltung der für ihre Staatsangehörigkeit geltenden Vorschriften verantwortlich, soweit nichts anderes ausdrücklich vereinbart wurde."] },
        { heading: "8. Schlussbestimmungen", paragraphs: ["Regelungen zu Rechtswahl, Gerichtsstand, Teilunwirksamkeit und Streitbeilegung dürfen erst nach rechtlicher Prüfung und unter Beachtung zwingender Verbraucherschutzvorschriften ergänzt werden."] },
      ],
    },
  },
  ar: {
    imprint: {
      title: "بيانات الناشر",
      updated: "آخر تحديث: يوليو 2026",
      warning: "مهم: بيانات الشركة القانونية الإلزامية غير موجودة في ملفات المشروع، ويجب استكمالها قبل نشر الصفحة.",
      sections: [
        { heading: "البيانات الإلزامية وفق القانون الألماني", paragraphs: [companyDetails.ar] },
        { heading: "بيانات التواصل", paragraphs: [commonContact.ar] },
        { heading: "المسؤول عن المحتوى التحريري", paragraphs: ["عند نشر محتوى صحفي أو تحريري، يجب إضافة اسم وعنوان الشخص المسؤول قانونيًا عن هذا المحتوى."] },
        { heading: "تسوية نزاعات المستهلكين", paragraphs: ["يجب تحديد ما إذا كانت MEDYA TRAVEL ملزمة أو مستعدة للمشاركة في إجراءات تسوية النزاعات أمام جهة تحكيم للمستهلكين، وفق الوضع القانوني الفعلي للشركة."] },
        { heading: "المحتوى والروابط الخارجية", paragraphs: ["تتحمل MEDYA TRAVEL مسؤولية محتواها وفق القوانين المعمول بها. أما محتوى المواقع الخارجية المرتبطة فيبقى من مسؤولية مزوديها."] },
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: يوليو 2026",
      warning: "هذه مسودة عملية متوافقة مع وظائف الموقع الحالية. يجب إضافة بيانات المسؤول القانوني ومزود الاستضافة ومراجعة الصياغة قانونيًا قبل النشر النهائي.",
      sections: [
        { heading: "المسؤول عن معالجة البيانات", paragraphs: [companyDetails.ar, commonContact.ar] },
        { heading: "بيانات الدخول والاستضافة", paragraphs: ["قد يعالج مزود الاستضافة بيانات تقنية مثل عنوان IP ووقت الزيارة والملف المطلوب والموقع المُحيل والمتصفح ونظام التشغيل لتقديم الموقع وتأمينه. يجب إضافة اسم مزود الاستضافة ومكان المعالجة والأساس القانوني ومدة الاحتفاظ."] },
        { heading: "نموذج طلب الرحلة", paragraphs: ["تتم معالجة النموذج محليًا داخل المتصفح ولا يخزن الموقع البيانات المدخلة. عند الإرسال يُفتح واتساب ومعه الرسالة المجهزة، ولا تُنقل البيانات إلى واتساب إلا بعد هذا الإجراء. بعد ذلك تسري سياسة خصوصية واتساب."] },
        { heading: "التواصل عبر البريد والهاتف ووسائل التواصل", paragraphs: ["تُعالج البيانات التي يقدمها المستخدم للرد على الاستفسار والتحضير للخدمات السياحية أو تنفيذها. يختلف الأساس القانوني ومدة الاحتفاظ بحسب طبيعة الطلب ووجود علاقة تعاقدية."] },
        { heading: "حقوقك", paragraphs: ["وفق شروط اللائحة الأوروبية لحماية البيانات، قد يكون لك حق الوصول والتصحيح والحذف وتقييد المعالجة ونقل البيانات والاعتراض، إضافة إلى تقديم شكوى إلى جهة رقابية مختصة."] },
        { heading: "نقل البيانات خارج المنطقة الاقتصادية الأوروبية", paragraphs: ["قد يؤدي استخدام واتساب أو فيسبوك أو إنستغرام إلى معالجة بيانات خارج المنطقة الاقتصادية الأوروبية. يجب توثيق الضمانات المستخدمة لكل خدمة قبل النشر."] },
      ],
    },
    cookies: {
      title: "إعدادات ملفات الارتباط",
      updated: "آخر تحديث: يوليو 2026",
      sections: [
        { heading: "الوضع الحالي للموقع", paragraphs: ["لا تستخدم النسخة الحالية من medyatravel.de ملفات ارتباط للتحليلات أو الإعلانات أو التسويق، ولا تُشغّل أدوات تتبع قبل الحصول على موافقة."] },
        { heading: "الوظائف التقنية الضرورية", paragraphs: ["تُستخدم الطلبات التقنية الضرورية لعرض الموقع والصور والفيديو وتأمين الخدمة. عندما تكون ضرورية بصورة صارمة للخدمة التي طلبها الزائر، فلا تحتاج إلى موافقة تسويقية اختيارية."] },
        { heading: "الخدمات الخارجية", paragraphs: ["لا يُفتح واتساب أو إنستغرام أو فيسبوك إلا بعد ضغط الزائر على الرابط المعني. بعد مغادرة الموقع تسري سياسات الخدمة الخارجية."] },
        { heading: "التغييرات المستقبلية", paragraphs: ["إذا أُضيفت لاحقًا أدوات تحليلات أو خرائط مضمّنة أو بكسلات إعلانية أو تقنيات غير ضرورية، فيجب إنشاء نظام موافقة قبل تشغيلها وتحديث هذه الصفحة."] },
      ],
    },
    terms: {
      title: "الشروط والأحكام العامة",
      updated: "حالة المسودة: يوليو 2026",
      warning: "هذه المسودة لا تغني عن الاستشارة القانونية المتخصصة في قانون السفر الألماني، ويجب استكمالها ومراجعتها من محامٍ مختص قبل استخدامها في الحجوزات.",
      sections: [
        { heading: "1. النطاق والطرف المتعاقد", paragraphs: ["أُعدت هذه الشروط لخدمات السفر التي تقدمها MEDYA TRAVEL. يجب إضافة الاسم القانوني الكامل وتوضيح ما إذا كانت الشركة تعمل كمنظم رحلة أو وسيط سفر أو وسيط لخدمات سفر مرتبطة في كل عرض."] },
        { heading: "2. إبرام العقد", paragraphs: ["طلب الرحلة عبر الموقع غير ملزم. لا ينعقد العقد إلا بعد إرسال عرض فردي أو تأكيد حجز يبيّن الخدمات الأساسية والسعر الإجمالي والوثائق التعاقدية، وقبول المسافر له."] },
        { heading: "3. الخدمات والسعر", paragraphs: ["يُحدد نطاق الخدمات في برنامج الرحلة والعرض وتأكيد الحجز. لا تشمل خدمات الجواز والتأشيرة والتأمين والمصاريف الشخصية والإكراميات إلا إذا ذُكرت صراحة."] },
        { heading: "4. الدفع وضمان الإعسار", paragraphs: ["يجب إضافة قواعد صحيحة للدفعة المقدمة والدفعة النهائية. إذا كانت MEDYA TRAVEL منظمة لرحلة متكاملة، فلا يجوز طلب المدفوعات إلا مع الالتزام بمتطلبات ضمان الإعسار القانونية."] },
        { heading: "5. التعديلات والانسحاب والإلغاء", paragraphs: ["لا ينبغي نشر رسوم إلغاء ثابتة قبل صياغتها قانونيًا وحسابها اقتصاديًا. تبقى الحقوق القانونية للمسافرين، بما فيها الحقوق عند الظروف الاستثنائية التي لا يمكن تجنبها، محفوظة."] },
        { heading: "6. واجبات المسافر وعيوب الرحلة", paragraphs: ["ينبغي الإبلاغ عن أي عيب دون تأخير وإتاحة فرصة مناسبة لمعالجته. تبقى الحقوق القانونية بموجب قانون الرحلات المتكاملة محفوظة."] },
        { heading: "7. الجواز والتأشيرة والصحة والتأمين", paragraphs: ["يجب أن تتضمن المعلومات السابقة للتعاقد متطلبات الجواز والتأشيرة والصحة. يبقى المسافر مسؤولًا عن الالتزام بالمتطلبات الخاصة بجنسيته ما لم يُتفق صراحة على غير ذلك."] },
        { heading: "8. الأحكام الختامية", paragraphs: ["لا تُضاف قواعد اختيار القانون والمحكمة المختصة وقابلية فصل البنود وتسوية النزاعات إلا بعد مراجعة قانونية ومع مراعاة قواعد حماية المستهلك الإلزامية."] },
      ],
    },
  },
};
