export type Locale = "fr" | "en" | "bn";
export type LocaleString = Record<Locale, string>;

export const newsItems = [
  {
    slug: "assemblee-generale-2026",
    title: {
      fr: "FBJA tient son Assemblée générale annuelle à Paris",
      en: "FBJA holds annual General Assembly in Paris",
      bn: "প্যারিসে এফবিজেএ-র বার্ষিক সাধারণ সভা অনুষ্ঠিত",
    } as LocaleString,
    excerpt: {
      fr: "Les membres se sont réunis pour faire le bilan de l'année et élire le nouveau bureau exécutif.",
      en: "Members gathered to review the year and elect the new executive committee.",
      bn: "বছরের কার্যক্রম পর্যালোচনা ও নতুন কার্যনির্বাহী কমিটি নির্বাচনের জন্য সদস্যরা একত্রিত হন।",
    } as LocaleString,
    date: "2026-06-14",
  },
  {
    slug: "partenariat-rfi",
    title: {
      fr: "Nouveau partenariat avec RFI pour la formation des jeunes journalistes",
      en: "New partnership with RFI to train young journalists",
      bn: "তরুণ সাংবাদিকদের প্রশিক্ষণে আরএফআই-এর সঙ্গে নতুন অংশীদারিত্ব",
    } as LocaleString,
    excerpt: {
      fr: "FBJA signe un accord de coopération avec RFI pour proposer des ateliers pratiques.",
      en: "FBJA signs a cooperation agreement with RFI to offer hands-on workshops.",
      bn: "ব্যবহারিক কর্মশালা আয়োজনে আরএফআই-এর সঙ্গে সহযোগিতা চুক্তি স্বাক্ষর করেছে এফবিজেএ।",
    } as LocaleString,
    date: "2026-05-02",
  },
  {
    slug: "soiree-solidarite",
    title: {
      fr: "Soirée de solidarité pour les journalistes en exil",
      en: "Solidarity evening for exiled journalists",
      bn: "নির্বাসিত সাংবাদিকদের জন্য সংহতি সন্ধ্যা",
    } as LocaleString,
    excerpt: {
      fr: "Une soirée organisée à Paris pour soutenir les confrères contraints à l'exil.",
      en: "An evening held in Paris to support fellow journalists forced into exile.",
      bn: "নির্বাসিত সহকর্মী সাংবাদিকদের পাশে দাঁড়াতে প্যারিসে আয়োজিত এক সন্ধ্যা।",
    } as LocaleString,
    date: "2026-03-21",
  },
];

const statementsData = [
  {
    slug: "shokbarta-debashish-dutta",
    title: {
      fr: "Message de condoléances : décès du journaliste Debashish Dutta et de sa famille à Kolkata",
      en: "Statement of condolence: journalist Debashish Dutta and his family, Kolkata",
      bn: "শোকবার্তা: কলকাতায় অগ্নিকাণ্ডে সাংবাদিক দেবাশীষ দত্ত ও পরিবারের সদস্যদের মৃত্যু",
    } as LocaleString,
    date: "2026-08-19",
    image: "/images/statement-condolence.jpg",
    body: {
      fr: "Paris, le 19 août 2026\n\nL'Association des journalistes France-Bangladesh (FBJA) exprime sa profonde tristesse et sa solidarité après le décès tragique du journaliste Debashish Dutta, de son épouse Afsana Sharmin, de leur enfant de trois ans et de son beau-père, survenu dans un incendie dévastateur dans un hôtel résidentiel de Kolkata, dans l'État du Bengale-Occidental, en Inde.\n\nLa perte soudaine et déchirante de quatre membres d'une même famille est extrêmement douloureuse. Nous sommes profondément affligés par le décès prématuré d'un confrère journaliste et des membres de sa famille.\n\nAu nom de :\nNiaz Mahmud et Momin Ansari\nCellule Communication et Relations publiques\nAssociation des journalistes France-Bangladesh (FBJA)",
      en: "Paris, 19 August 2026\n\nThe France-Bangladesh Journalists Association (FBJA) expresses its deep sorrow and solidarity following the tragic death of journalist Debashish Dutta, his wife Afsana Sharmin, their three-year-old child, and his father-in-law, in a devastating fire at a residential hotel in Kolkata, West Bengal, India.\n\nThe sudden and heartbreaking loss of four members of the same family is deeply painful. We are profoundly grieved by the untimely passing of a fellow journalist and his family members.\n\nOn behalf of:\nNiaz Mahmud and Momin Ansari\nCommunications and Public Relations Cell\nFrance-Bangladesh Journalists Association (FBJA)",
      bn: "প্যারিস, ১৯ আগস্ট ২০২৬\n\nভারতের পশ্চিমবঙ্গ রাজ্যের কলকাতার একটি আবাসিক হোটেলে ভয়াবহ অগ্নিকাণ্ডে সাংবাদিক দেবাশীষ দত্ত, তার স্ত্রী আফসানা শারমিন, তিন বছরের সন্তান ও শ্বশুরের মর্মান্তিক মৃত্যুতে ফ্রান্স-বাংলাদেশ জার্নালিস্টস অ্যাসোসিয়েশন (এফবিজেএ) গভীর শোক ও দুঃখ প্রকাশ করছে।\n\nএকই পরিবারের চারজনের এই আকস্মিক ও মর্মান্তিক মৃত্যু অত্যন্ত হৃদয়বিদারক। একজন সহকর্মী সাংবাদিকসহ তার পরিবারের সদস্যদের এমন অকালপ্রয়াণে আমরা গভীরভাবে শোকাহত।\n\nনিবেদক,\nনিয়াজ মাহমুদ ও মুমিন আনসারী\nযোগাযোগ ও জনসংযোগ সেল\nফ্রান্স-বাংলাদেশ জার্নালিস্ট অ্যাসোসিয়েশন (এফবিজেএ)",
    } as LocaleString,
  },
  {
    slug: "communique-liberte-presse-2026",
    title: {
      fr: "Communiqué à l'occasion de la Journée mondiale de la liberté de la presse",
      en: "Statement on World Press Freedom Day",
      bn: "বিশ্ব সংবাদমাধ্যম স্বাধীনতা দিবস উপলক্ষে বিবৃতি",
    } as LocaleString,
    date: "2026-05-03",
    body: {
      fr: "FBJA réaffirme son engagement pour la liberté de la presse et appelle à la protection des journalistes exerçant en France comme au Bangladesh.",
      en: "FBJA reaffirms its commitment to press freedom and calls for the protection of journalists working in France and Bangladesh alike.",
      bn: "এফবিজেএ সংবাদমাধ্যমের স্বাধীনতার প্রতি তার অঙ্গীকার পুনর্ব্যক্ত করছে এবং ফ্রান্স ও বাংলাদেশে কর্মরত সাংবাদিকদের সুরক্ষার আহ্বান জানাচ্ছে।",
    } as LocaleString,
  },
  {
    slug: "communique-securite-journalistes",
    title: {
      fr: "FBJA appelle à la protection des journalistes au Bangladesh",
      en: "FBJA calls for the protection of journalists in Bangladesh",
      bn: "বাংলাদেশে সাংবাদিকদের সুরক্ষার আহ্বান এফবিজেএ-র",
    } as LocaleString,
    date: "2026-02-11",
    body: {
      fr: "FBJA exprime son inquiétude face aux menaces visant des journalistes au Bangladesh et demande aux autorités de garantir leur sécurité.",
      en: "FBJA expresses concern over threats faced by journalists in Bangladesh and calls on authorities to guarantee their safety.",
      bn: "বাংলাদেশে সাংবাদিকদের প্রতি হুমকির বিষয়ে এফবিজেএ উদ্বেগ প্রকাশ করছে এবং কর্তৃপক্ষের কাছে তাদের নিরাপত্তা নিশ্চিতের আহ্বান জানাচ্ছে।",
    } as LocaleString,
  },
];

export const statements = [...statementsData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const events = [
  {
    slug: "atelier-fact-checking",
    title: {
      fr: "Atelier de vérification des faits (fact-checking)",
      en: "Fact-checking workshop",
      bn: "ফ্যাক্ট-চেকিং কর্মশালা",
    } as LocaleString,
    location: "Paris, 20e arrondissement",
    startDate: "2026-09-12",
  },
  {
    slug: "conference-medias-francophones",
    title: {
      fr: "Conférence sur les médias francophones et le Bangladesh",
      en: "Conference on Francophone media and Bangladesh",
      bn: "ফরাসি ভাষাভাষী গণমাধ্যম ও বাংলাদেশ বিষয়ক সম্মেলন",
    } as LocaleString,
    location: "Maison des journalistes, Paris",
    startDate: "2026-10-05",
  },
  {
    slug: "iftar-networking",
    title: {
      fr: "Iftar et rencontre professionnelle",
      en: "Iftar and professional networking",
      bn: "ইফতার ও পেশাগত নেটওয়ার্কিং",
    } as LocaleString,
    location: "Paris",
    startDate: "2027-03-15",
  },
];

export const trainings = [
  {
    slug: "formation-video-mobile",
    title: {
      fr: "Formation : journalisme vidéo sur mobile",
      en: "Training: mobile video journalism",
      bn: "প্রশিক্ষণ: মোবাইল ভিডিও সাংবাদিকতা",
    } as LocaleString,
    description: {
      fr: "Apprenez à filmer, monter et publier des reportages avec un simple smartphone.",
      en: "Learn to shoot, edit and publish reports using just a smartphone.",
      bn: "স্মার্টফোন দিয়ে রিপোর্ট ধারণ, সম্পাদনা ও প্রকাশ শিখুন।",
    } as LocaleString,
    level: { fr: "Débutant", en: "Beginner", bn: "প্রাথমিক" } as LocaleString,
  },
  {
    slug: "formation-securite-numerique",
    title: {
      fr: "Formation : sécurité numérique pour journalistes",
      en: "Training: digital security for journalists",
      bn: "প্রশিক্ষণ: সাংবাদিকদের জন্য ডিজিটাল নিরাপত্তা",
    } as LocaleString,
    description: {
      fr: "Protéger ses sources et ses communications dans un contexte à risque.",
      en: "Protecting sources and communications in high-risk contexts.",
      bn: "ঝুঁকিপূর্ণ পরিস্থিতিতে সোর্স ও যোগাযোগ সুরক্ষিত রাখা।",
    } as LocaleString,
    level: { fr: "Intermédiaire", en: "Intermediate", bn: "মধ্যবর্তী" } as LocaleString,
  },
  {
    slug: "formation-ecriture-presse",
    title: {
      fr: "Formation : écriture journalistique en français",
      en: "Training: journalistic writing in French",
      bn: "প্রশিক্ষণ: ফরাসি ভাষায় সাংবাদিকতামূলক লেখা",
    } as LocaleString,
    description: {
      fr: "Perfectionner son style et sa rigueur pour la presse francophone.",
      en: "Refine style and rigor for the Francophone press.",
      bn: "ফরাসি ভাষাভাষী গণমাধ্যমের জন্য লেখার মান উন্নয়ন।",
    } as LocaleString,
    level: { fr: "Tous niveaux", en: "All levels", bn: "সকল স্তর" } as LocaleString,
  },
];

export const galleryImages = [
  { caption: { fr: "AG annuelle 2026", en: "2026 Annual Assembly", bn: "২০২৬ বার্ষিক সাধারণ সভা" } as LocaleString },
  { caption: { fr: "Atelier fact-checking", en: "Fact-checking workshop", bn: "ফ্যাক্ট-চেকিং কর্মশালা" } as LocaleString },
  { caption: { fr: "Soirée de solidarité", en: "Solidarity evening", bn: "সংহতি সন্ধ্যা" } as LocaleString },
  { caption: { fr: "Signature partenariat RFI", en: "RFI partnership signing", bn: "আরএফআই চুক্তি স্বাক্ষর" } as LocaleString },
  { caption: { fr: "Rencontre des membres", en: "Members meetup", bn: "সদস্যদের মিলনমেলা" } as LocaleString },
  { caption: { fr: "Conférence de presse", en: "Press conference", bn: "সংবাদ সম্মেলন" } as LocaleString },
];

export const resources = [
  {
    title: { fr: "Statuts de l'association", en: "Association bylaws", bn: "সংগঠনের গঠনতন্ত্র" } as LocaleString,
    type: "PDF",
  },
  {
    title: { fr: "Guide : demander une accréditation presse en France", en: "Guide: applying for press accreditation in France", bn: "গাইড: ফ্রান্সে প্রেস অ্যাক্রেডিটেশনের আবেদন" } as LocaleString,
    type: "PDF",
  },
  {
    title: { fr: "Charte de déontologie FBJA", en: "FBJA code of ethics", bn: "এফবিজেএ নীতিমালা সনদ" } as LocaleString,
    type: "PDF",
  },
];

export const partners = [
  { name: "RFI" },
  { name: "France 24" },
  { name: "France Médias Monde" },
  { name: "Dhaka Reporters Unity" },
  { name: "BJIM" },
  { name: "Maison des journalistes" },
];

export const pressItems = [
  {
    title: { fr: "Dossier de presse FBJA 2026", en: "FBJA 2026 press kit", bn: "এফবিজেএ ২০২৬ প্রেস কিট" } as LocaleString,
    date: "2026-01-15",
  },
  {
    title: { fr: "FBJA dans les médias : revue de presse", en: "FBJA in the media: press review", bn: "গণমাধ্যমে এফবিজেএ: প্রেস রিভিউ" } as LocaleString,
    date: "2026-04-08",
  },
];
