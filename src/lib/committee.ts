export type CommitteeSocials = {
  facebook?: string;
  linkedin?: string;
  x?: string;
};

export type CommitteeBio = {
  en?: string;
  fr?: string;
  bn?: string;
};

export type CommitteeMember = {
  name: string;
  role: string;
  outlet?: string;
  extra?: string[];
  photo?: string;
  bio?: CommitteeBio;
  slug: string;
  socials?: CommitteeSocials;
};

function slugify(name: string) {
  return name
    .replace("MD:", "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const rawCommittee: Omit<CommitteeMember, "slug">[] = [
  {
    name: "Mohammad Mahbub Hossain",
    role: "Coordinator of FBJA",
    outlet: "The Daily Naya Diganta",
    photo: "/images/members/mohammad-mahbub-hossain.jpeg",
    bio: {
      en: "Mohammad Mahbub Hossain was born in Malibagh, Dhaka, Bangladesh. His ancestral home is in Bakerganj, Barishal. After completing his Master's degree in History, he earned an LL.B degree.\n\nHe began his journalism career with the now-defunct daily newspapers Dainik Shakti and Dainik Millat. Over the years, he worked with several media organizations, including Weekly Sugandha, Bangabani, Mohammadi News Agency, Monthly Upokontho, and Bangladesh News Agency (BNA).\n\nIn the early 1990s, he was an enlisted presenter for Bangladesh Betar's popular programmes \"Ajker Dhaka\" and \"Darpan\" magazine programme.\n\nBeyond journalism, Mohammad Mahbub Hossain has been actively involved in social and organizational activities. As a founding member of the prominent social organization Nagorik Forum, he served as its Secretary General for more than a decade.\n\nCurrently, he is based in Paris, France, and holds dual citizenship of France and Bangladesh. He serves as the France Correspondent of Bangladesh's leading daily, Naya Diganta. He regularly participates in television talk shows on contemporary Bangladeshi politics and contributes articles to various journals and publications.\n\nAs Coordinator of FBJA, he continues to contribute to strengthening professional networks, promoting journalism, and fostering engagement among Bangladeshi journalists and communities in France.",
      fr: "Mohammad Mahbub Hossain est né à Malibagh, à Dhaka, au Bangladesh. Sa famille est originaire de Bakerganj, dans le district de Barisal. Après avoir obtenu un master en histoire, il a également obtenu un diplôme de droit (LL.B).\n\nIl a commencé sa carrière journalistique au sein des quotidiens aujourd'hui disparus Dainik Shakti et Dainik Millat. Au cours de sa carrière, il a collaboré avec plusieurs médias, notamment Weekly Sugandha, Bangabani, Mohammadi News Agency, Monthly Upokontho et la Bangladesh News Agency (BNA).\n\nAu début des années 1990, il a été présentateur agréé des émissions populaires « Ajker Dhaka » et « Darpan » diffusées sur Bangladesh Betar, la radio nationale du Bangladesh.\n\nParallèlement à son activité journalistique, Mohammad Mahbub Hossain joue un rôle actif dans la vie sociale et associative. En tant que membre fondateur de l'organisation sociale reconnue Nagorik Forum, il a exercé pendant plus d'une décennie la fonction de secrétaire général.\n\nIl réside actuellement à Paris, en France, et se définit comme franco-bangladais. Il est actuellement correspondant en France du quotidien bangladais Naya Diganta. Il intervient régulièrement dans des émissions de télévision consacrées à la politique contemporaine du Bangladesh et publie des articles dans différents journaux, revues et publications spécialisées.\n\nEn tant que Coordinateur de la FBJA, il contribue au développement des réseaux professionnels, à la promotion du journalisme et au renforcement des liens entre les journalistes bangladais et les communautés établies en France.",
      bn: "মোহাম্মদ মাহবুব হোসাইন ঢাকার মালিবাগে জন্মগ্রহণ করেন। তাঁর আদি নিবাস বরিশাল জেলার বাকেরগঞ্জে। ইতিহাস বিষয়ে মাস্টার্স সম্পন্ন করার পর তিনি এলএলবি ডিগ্রি অর্জন করেন। অধুনালুপ্ত দৈনিক শক্তি ও দৈনিক মিল্লাত-এ কাজের মধ্য দিয়ে তাঁর সাংবাদিকতা জীবনের সূচনা। পরবর্তীতে তিনি সাপ্তাহিক সুগন্ধা, বঙ্গবাণী, মোহাম্মদী নিউজ এজেন্সি, মাসিক উপকণ্ঠ এবং বাংলাদেশ নিউজ এজেন্সি (বিএনএ)-তে বিভিন্ন সময়ে কর্মরত ছিলেন।\n\nনব্বইয়ের দশকের শুরুতে বাংলাদেশ বেতারের 'আজকের ঢাকা' ও 'দর্পণ' ম্যাগাজিন অনুষ্ঠানে এনলিস্টেড উপস্থাপক ছিলেন।\n\nসামাজিক ও সাংগঠনিক কর্মকাণ্ডেও তাঁর সক্রিয় ভূমিকা রয়েছে। বাংলাদেশের জনপ্রিয় সামাজিক সংগঠন 'নাগরিক ফোরাম'-এর প্রতিষ্ঠাতা সদস্য হিসেবে তিনি এক যুগেরও বেশি সময় সংগঠনটির সেক্রেটারি জেনারেলের দায়িত্ব পালন করেন।\n\nবর্তমানে তিনি বাংলাদেশের জনপ্রিয় দৈনিক নয়াদিগন্ত-এর ফ্রান্স প্রতিনিধি হিসেবে দায়িত্ব পালন করছেন। পাশাপাশি বাংলাদেশের সমকালীন রাজনীতি নিয়ে নিয়মিত টেলিভিশন টকশোতে অংশগ্রহণের পাশাপাশি বিভিন্ন জার্নাল ও সাময়িকীতে লেখালেখি করেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Mohammed Kamruzzaman",
    role: "Co-Coordinator of FBJA",
    outlet: "Former Finance Secretary, Dhaka Reporters Unity (DRU)",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Mohammad Arif Ullah",
    role: "Spokesperson of FBJA",
    outlet: "InfoMigrants",
    photo: "/images/members/mohammad-arif-ullah.jpeg",
    extra: ["RFI", "France 24", "France Médias Monde (MCD)", "Member, BJIM"],
    bio: {
      en: "Mohammad Arif Ullah is a Franco-Bangladeshi journalist, originally from Chittagong, Bangladesh, and has been living in France since 2015. He is an alumnus of Université Paris 1 Panthéon-Sorbonne and Sciences Po Paris, where he studied applied social sciences.\n\nSince 2021, he has been working as a full-time journalist at France Médias Monde (FMM) for its platform InfoMigrants, which focuses on migration-related issues. His reporting mainly covers migration, diaspora communities, and European Union migration and asylum policies.\n\nHe regularly contributes analysis and commentary on migration issues and has participated in programmes on France 24 and RFI, particularly on migration trends involving Bangladesh and South Asia. He also writes columns and opinion pieces for international media outlets.\n\nBeyond journalism, Mohammad Arif Ullah is actively involved with French human rights organizations, contributing to discussions and initiatives related to migration, integration, and social justice.\n\nIn addition to his role as Spokesperson of FBJA, he is also a member of BJIM (Bangladesh Journalists in International Media), a Dhaka-based organization representing Bangladeshi journalists working in international media.\n\nThrough his journalistic career and civic engagement, he contributes to strengthening dialogue between France, Bangladesh, and South Asian communities in Europe, with a focus on migration, human rights, and international journalism.",
      fr: "Mohammad Arif Ullah est un journaliste franco-bangladais, originaire de Chittagong, au Bangladesh, et installé en France depuis 2015. Il est diplômé de l'Université Paris 1 Panthéon-Sorbonne et de Sciences Po Paris, où il a suivi des formations en sciences sociales appliquées.\n\nDepuis 2021, il travaille comme journaliste à temps plein au sein de France Médias Monde (FMM) pour sa plateforme InfoMigrants, consacrée aux questions migratoires. Il couvre principalement les thématiques liées aux migrations, aux diasporas ainsi qu'aux politiques migratoires et d'asile de l'Union européenne.\n\nIl intervient régulièrement dans des émissions et débats consacrés aux enjeux migratoires sur France 24 et RFI, notamment sur les questions liées aux migrations en provenance du Bangladesh et d'Asie du Sud. Il publie également des chroniques et tribunes dans des médias internationaux.\n\nEn parallèle de son activité journalistique, Mohammad Arif Ullah est engagé auprès d'associations françaises de défense des droits humains, notamment sur les questions liées aux migrations, à l'intégration et à la justice sociale.\n\nOutre sa fonction de porte-parole de la FBJA, il est également membre de BJIM (Bangladesh Journalists in International Media), une organisation basée à Dhaka regroupant des journalistes bangladais travaillant dans les médias internationaux.\n\nÀ travers son parcours journalistique et son engagement associatif, il contribue au rapprochement entre la France, le Bangladesh et les communautés sud-asiatiques en Europe, en mettant l'accent sur les migrations, les droits humains et le journalisme international.",
      bn: "মোহাম্মদ আরিফ উল্লাহ একজন ফ্রাঙ্কো-বাংলাদেশি সাংবাদিক। তার বাড়ি বাংলাদেশের চট্টগ্রাম শহরে। ২০১৫ সাল থেকে তিনি ফ্রান্সে বসবাস করছেন। তিনি প্যারিসের পন্থেওঁ-সর্বন বিশ্ববিদ্যালয় এবং প্যারিস ইনস্টিটিউট অব পলিটিক্যাল স্টাডিজ বা সায়েন্স পো প্যারিসে পড়াশোনা করেছেন। সেখানে তিনি এপ্লাইড সোশ্যাল সায়েন্সে পড়াশোনা করেন।\n\n২০২১ সাল থেকে তিনি ফরাসি রাষ্ট্রীয় সম্প্রচারমাধ্যম ফ্রান্স টুয়েন্টিফোরের ইনফোমাইগ্রেন্টস ডেস্কে পূর্ণকালীন সাংবাদিক হিসেবে কাজ করছেন। তাঁর কাজের মূল বিষয় অভিবাসন, প্রবাসী এবং ইউরোপীয় ইউনিয়নের অভিবাসন ও আশ্রয়নীতি।\n\nঅভিবাসন নিয়ে তিনি নিয়মিত প্রতিবেদন, বিশ্লেষণ ও মতামত প্রকাশ করেন। বাংলাদেশ ও দক্ষিণ এশিয়ার অভিবাসন পরিস্থিতি নিয়ে তিনি ফ্রান্স ২৪ ও রেডিও ফ্রান্স ইন্টারন্যাশনালের বিভিন্ন অনুষ্ঠানে অংশ নিয়ে মতামত দেন। পাশাপাশি আন্তর্জাতিক বিভিন্ন গণমাধ্যমে তাঁর কলাম ও মতামতধর্মী লেখা প্রকাশিত হয়।\n\nসাংবাদিকতার পাশাপাশি তিনি ফ্রান্সের বিভিন্ন মানবাধিকার সংগঠনের সঙ্গেও সক্রিয়ভাবে যুক্ত। অভিবাসন, সমাজে নতুনদের একীভূত হওয়া এবং সামাজিক ন্যায়বিচার নিয়ে বিভিন্ন আলোচনা ও উদ্যোগে তিনি অংশ নেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Thanbir Ahmed Tuha",
    role: "Co-Spokesperson of FBJA",
    outlet: "Daily Kalerkantho",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Habibullah Fahad",
    role: "Treasurer and Finance Secretary of FBJA",
    outlet: "Freelance Journalist, Writer and Author",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Niaz Mahmud",
    role: "Communications and Public Relations Cell of FBJA",
    outlet: "Editor, MW · Columnist, Manobzamin",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "MD: Nazmul Hasan",
    role: "Training and Skill Development Cell of FBJA",
    outlet: "Freelance Journalist, Columnist",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Sarder Hasan Yelias Tanim",
    role: "Member of FBJA",
    outlet: "The Daily Jugantor",
    extra: ["Ex-Vice President, Rajshahi University Press Club"],
    photo: "/images/members/sarder-hasan-yelias-tanim.jpeg",
    bio: {
      en: "Sarder Hasan Yelias Tanim was born in Kuliya village, Debhata Upazila, Satkhira District, Bangladesh.\n\nHe completed his Bachelor's and Master's degrees from University of Rajshahi. He later earned a Master's degree in Information Science and Library Management from Global University of Bangladesh and an MPhil degree from the National University of Bangladesh.\n\nTanim began his journalism career as a campus journalist in 2009 with Lal Golap newspaper. He later worked with several Bangladeshi media outlets, including Dainik Sangbad, Prothom Alo, Samakal, Ittefaq, Amar Desh, and Dainik Sangram. He also served as Vice President of the 24th Executive Committee of the Rajshahi University Press Club.\n\nHe currently serves as the France correspondent for Daily Jugantor and Daily Agamir Shomoy. Alongside journalism, he is active as a columnist and social activist. He has also been involved with Amnesty International and the Bangladeshi human rights organization Odhikar.",
      fr: "Sarder Hasan Yelias Tanim est né dans le village de Kuliya, dans l'upazila de Debhata, district de Satkhira, au Bangladesh.\n\nIl a obtenu ses diplômes de licence et de master à l'Université de Rajshahi. Il a ensuite obtenu un master en sciences de l'information et gestion des bibliothèques à la Global University of Bangladesh, ainsi qu'un diplôme de MPhil à l'Université nationale du Bangladesh.\n\nTanim a commencé sa carrière dans le journalisme en 2009 comme journaliste étudiant au sein du journal Lal Golap. Il a ensuite travaillé pour plusieurs médias bangladais, notamment Dainik Sangbad, Prothom Alo, Samakal, Ittefaq, Amar Desh et Dainik Sangram. Il a également été vice-président du 24e comité exécutif du Rajshahi University Press Club.\n\nIl est actuellement correspondant en France des journaux Daily Jugantor et Daily Agamir Shomoy. Parallèlement à son activité journalistique, il écrit en tant que chroniqueur et s'engage dans des activités sociales. Il a également été impliqué auprès d'Amnesty International et de l'organisation bangladaise de défense des droits humains Odhikar.",
      bn: "সরদার হাসান ইলিয়াছ তানিম সাতক্ষীরা জেলার দেবহাটা উপজেলার কুলিয়া গ্রামে জন্মগ্রহণ করেন।\n\nতিনি রাজশাহী বিশ্ববিদ্যালয়ের আরবী বিভাগ থেকে অনার্স ও মাস্টার্স সম্পন্ন করার পর গ্লোবাল ইউনিভার্সিটি অব বাংলাদেশ থেকে ইনফরমেশন সায়েন্স অ্যান্ড লাইব্রেরি ম্যানেজমেন্ট বিষয়ে মাস্টার্স এবং জাতীয় বিশ্ববিদ্যালয় থেকে এমফিল ডিগ্রি অর্জন করেন।\n\nতার এমফিল গবেষণার বিষয় ছিল \"হযরত আব্দুল্লাহ ইবনে রাওয়াহা (রা.)-এর কাব্যে নবীপ্রেম : একটি সাহিত্যিক মূল্যায়ন\"।\n\n২০০৯ সালে লাল গোলাপ পত্রিকার মাধ্যমে ক্যাম্পাস সাংবাদিক হিসেবে তার সাংবাদিকতা জীবনের শুরু। পরবর্তীতে দৈনিক সংবাদ, প্রথম আলো, সমকাল, ইত্তেফাক, আমার দেশ ও দৈনিক সংগ্রামসহ বিভিন্ন গণমাধ্যমে কাজ করেন। তিনি রাজশাহী বিশ্ববিদ্যালয় প্রেসক্লাবের ২৪তম কার্যনির্বাহী কমিটির ভাইস প্রেসিডেন্ট হিসেবেও দায়িত্ব পালন করেছেন।\n\nবর্তমানে তিনি দৈনিক যুগান্তর ও দৈনিক আগামীর সময়-এর ফ্রান্স প্রতিনিধি। পাশাপাশি তিনি কলামিস্ট ও অ্যাক্টিভিস্ট হিসেবে লেখালেখির সঙ্গে যুক্ত এবং অ্যামনেস্টি ইন্টারন্যাশনাল ও মানবাধিকার সংগঠন অধিকার-এর সঙ্গে সম্পৃক্ত রয়েছেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Momin Bin Mahmud Ansari",
    role: "Planning and Event Management Cell of FBJA",
    outlet: "Daily Sun · banglanews24.com",
    extra: ["Former Vice President, Chittagong University Journalists Association"],
    photo: "/images/members/momin-bin-mahmud-ansari.jpeg",
    bio: {
      en: "Momin Ansari is a professional journalist and media worker, with his full name being Momin Bin Mahmud Ansari. Currently, he is serving as the France correspondent for the popular English-language daily Daily Sun and the online news portal Banglanews24.\n\nHe was born in the village of Paharhanda in Chakaria Upazila, Cox's Bazar District. He earned his Bachelor (Honours) in 2018 and Master's degree in 2019 with distinction from the Department of Communication and Journalism at the University of Chattogram.\n\nHis journalism career began in 2014 through his writings in the Chattogram-based local newspaper Dainik Sangu. Over his professional career, he has worked with various national dailies and online news media, among which Daily Bonik Barta and Dainik Pahar-Somudra are notable.\n\nDuring his university life, he was actively associated with the Chattogram University Journalists' Association (CUJA). He played an important role in the organization to protect journalists' rights and a free professional environment even in adverse political situations. He served very successfully as the Joint Secretary of CUJA in 2017 and as the Vice President in 2018.",
      fr: "Momin Ansari, de son nom complet Momin Bin Mahmud Ansari, est un journaliste professionnel. Il est actuellement correspondant en France du quotidien anglophone Daily Sun et du média en ligne Banglanews24.\n\nIl est né dans le village de Paharhanda, dans l'upazila de Chakaria, district de Cox's Bazar, au Bangladesh. Il a obtenu en 2018 une licence avec mention en communication et journalisme, puis un master en 2019, avec distinction, au département de communication et de journalisme de l'Université de Chattogram.\n\nIl a commencé sa carrière journalistique en 2014 en publiant ses premiers articles dans le journal local de Chattogram, Dainik Sangu. Au cours de sa carrière, il a travaillé pour plusieurs quotidiens nationaux et médias d'information en ligne, notamment Daily Bonik Barta et Dainik Pahar-Somudra.\n\nDurant ses années universitaires, il s'est activement impliqué au sein de l'Association des journalistes de l'Université de Chattogram. Il a joué un rôle important dans la défense des droits des journalistes et la promotion d'un environnement professionnel libre, y compris dans des contextes politiques difficiles.\n\nIl a notamment occupé avec succès le poste de secrétaire adjoint de l'association en 2017, puis celui de vice-président en 2018.",
      bn: "মুমিন আনসারি একজন পেশাদার সাংবাদিক ও গণমাধ্যমকর্মী। পুরো নাম- মুমিন বিন মাহমুদ আনসারি। বর্তমানে তিনি জনপ্রিয় ইংরেজি দৈনিক ডেইলি সান এবং অনলাইন সংবাদমাধ্যম বাংলানিউজ২৪ডটকম-এর ফ্রান্স প্রতিনিধি হিসেবে দায়িত্ব পালন করছেন।\n\nতিনি কক্সবাজার জেলার চকরিয়া উপজেলার পহরচাঁদা গ্রামে জন্মগ্রহণ করেন। তিনি চট্টগ্রাম বিশ্ববিদ্যালয়ের যোগাযোগ ও সাংবাদিকতা বিভাগ থেকে কৃতিত্বের সাথে ২০১৮ সালে সম্মান (অনার্স) এবং ২০১৯ সালে মাস্টার্স ডিগ্রি অর্জন করেন।\n\n২০১৪ সালে চট্টগ্রামের স্থানীয় পত্রিকা দৈনিক সাঙ্গু-তে লেখার মাধ্যমে তার সাংবাদিকতা জীবনের সূচনা হয়। পেশাগত ক্যারিয়ারে তিনি বিভিন্ন জাতীয় দৈনিক ও অনলাইন সংবাদমাধ্যমে কাজ করেছেন, যার মধ্যে দৈনিক বণিক বার্তা ও দৈনিক পাহাড়-সমুদ্র উল্লেখযোগ্য।\n\nবিশ্ববিদ্যালয় জীবনে তিনি চট্টগ্রাম বিশ্ববিদ্যালয় সাংবাদিক সমিতির (চবিসাস) সাথে সক্রিয়ভাবে যুক্ত ছিলেন। প্রতিকূল রাজনৈতিক পরিস্থিতিতেও সাংবাদিকদের অধিকার ও স্বাধীন পেশাগত পরিবেশ রক্ষায় সংগঠনটিতে তিনি গুরুত্বপূর্ণ ভূমিকা পালন করেন। তিনি অত্যন্ত সফলতার সাথে ২০১৭ সালে চবিসাসের যুগ্ম সম্পাদক এবং ২০১৮ সালে সহ-সভাপতির দায়িত্ব পালন করেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Abdullah Al Mamun",
    role: "Member of FBJA",
    outlet: "24CityPost.com",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Yeashir Arafat",
    role: "Planning and Event Management Cell FBJA",
    outlet: "Desh Rupantor · Bangla Vision",
    photo: "/images/members/yeashir-arafat.jpeg",
    bio: {
      en: "Yeashir Arafat was born in Cox's Bazar town, Bangladesh. His ancestral home is in Malumghat Union of Cox's Bazar District.\n\nHe earned a Master's degree in Sociology from Cox's Bazar City College in 2015. He began his journalism career at Dainik Himchhari. He later worked as a journalist for several media outlets, including Dainik Mukto Khobor, Dainik Jaijaidin, and BD Times News.\n\nHe currently serves as the France correspondent for Bangladesh's popular television channel Banglavision and the national daily newspaper Desh Rupantor. Based in France, he covers a wide range of important national and international issues, including the lives and concerns of Bangladeshi expatriates, Bangladesh–France relations, migration, culture, and social activities.\n\nThrough his reporting, he regularly highlights issues affecting the Bangladeshi community in France and brings important developments in France and Bangladesh to the attention of audiences in Bangladesh.",
      fr: "Yeashir Arafat est né dans la ville de Cox's Bazar, au Bangladesh. Sa famille est originaire de l'Union de Malumghat, dans le district de Cox's Bazar.\n\nIl a obtenu en 2015 un master en sociologie au Cox's Bazar City College. Il a commencé sa carrière dans le journalisme au quotidien Dainik Himchhari. Il a ensuite travaillé comme journaliste pour plusieurs médias, notamment Dainik Mukto Khobor, Dainik Jaijaidin et BD Times News.\n\nIl est actuellement correspondant en France de la chaîne de télévision bangladaise Banglavision et du quotidien national Desh Rupantor. Depuis la France, il couvre différents sujets d'actualité nationale et internationale, notamment les questions liées à la communauté bangladaise expatriée, aux relations entre le Bangladesh et la France, à l'immigration, à la culture et aux activités sociales.\n\nÀ travers ses reportages, il s'intéresse particulièrement aux enjeux auxquels sont confrontés les Bangladais vivant en France et aux événements importants qui concernent le Bangladesh, la France et leurs relations.",
      bn: "ইয়াছির আরাফাত কক্সবাজার শহরে জন্মগ্রহণ করেন। তার আদি নিবাস কক্সবাজার জেলার মালুমঘাট ইউনিয়নে। তিনি সমাজবিজ্ঞান বিষয়ে ২০১৫ সালে কক্সবাজার সিটি কলেজ থেকে মাস্টার্স ডিগ্রি অর্জন করেন। দৈনিক হিমছড়ি পত্রিকায় কাজের মধ্য দিয়ে তার সাংবাদিকতা জীবনের সূচনা। পরবর্তীতে দৈনিক মুক্তখবর, দৈনিক যায়যায়দিন, বিডিটাইমস নিউজসহ বিভিন্ন গণমাধ্যমে সাংবাদিক হিসেবে দায়িত্ব পালন করেন।\n\nবর্তমানে তিনি বাংলাদেশের জনপ্রিয় টেলিভিশন চ্যানেল বাংলাভিশন এবং জাতীয় দৈনিক দেশ রূপান্তর-এর ফ্রান্স প্রতিনিধি হিসেবে দায়িত্ব পালন করছেন। ফ্রান্সে থেকে তিনি প্রবাসী বাংলাদেশিদের বিভিন্ন বিষয়, বাংলাদেশ-ফ্রান্স সম্পর্ক, অভিবাসন, সংস্কৃতি ও সামাজিক কর্মকাণ্ডসহ গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক ঘটনা নিয়ে সংবাদ ও প্রতিবেদন তৈরি করছেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Mamunur Rashid Mahin",
    role: "Member of FBJA",
    outlet: "Daily Kalbela",
    bio: {
      en: "Md. Mamunur Rashid (Mamun Mahin) is a young journalist and media professional from Phultola village in Juri Upazila, Moulvibazar District, Bangladesh.\n\nSince 2020, he has served as the United Arab Emirates correspondent for the popular Bangladeshi satellite television channel News24. He is currently permanently based in France.\n\nIn addition to his work with News24, he has been serving as a Special Correspondent for the Bangladeshi national daily Alokito Shokal since 2023. Since 2025, he has also been working as the France correspondent for the popular Bangladeshi national daily Kalbela.\n\nEarlier, he served as the Malaysia correspondent for SA TV from 2018 to 2019 and as Malaysia Bureau Chief of Search News from 2016 to 2020.\n\nAlongside his journalism, he has played an active role in highlighting the activities of Bangladeshi expatriates in Bangladesh and abroad, as well as social and cultural issues and important events, through the media.\n\nIn his academic career, he earned a Bachelor of Arts degree from Barlekha Degree College in 2011 and a Master's degree from Sylhet MC College in 2014. He later completed a diploma in Multimedia Design from SEGi University, Malaysia, in 2020. In the same year, he received the Malaysia Sultan Education Award.",
      fr: "Md. Mamunur Rashid (Mamun Mahin) est un jeune journaliste et professionnel des médias, originaire du village de Phultola, dans l'upazila de Juri, district de Moulvibazar, au Bangladesh.\n\nDepuis 2020, il est correspondant aux Émirats arabes unis de la chaîne de télévision satellitaire bangladaise News24. Il vit actuellement de manière permanente en France.\n\nParallèlement à son travail pour News24, il est correspondant spécial du quotidien national bangladais Alokito Shokal depuis 2023. Depuis 2025, il est également correspondant en France du quotidien national bangladais Kalbela.\n\nAuparavant, il a été correspondant en Malaisie de SA TV de 2018 à 2019, puis chef du bureau de Malaisie de Search News de 2016 à 2020.\n\nEn parallèle de son activité journalistique, il joue un rôle actif dans la couverture médiatique des activités des Bangladais vivant au Bangladesh et à l'étranger, ainsi que des questions sociales et culturelles et des événements importants.\n\nSur le plan académique, il a obtenu une licence ès lettres au Barlekha Degree College en 2011, puis un master au Sylhet MC College en 2014. Il a ensuite obtenu un diplôme en conception multimédia à l'Université SEGi, en Malaisie, en 2020. La même année, il a reçu le prix d'excellence éducative du Sultan de Malaisie.",
      bn: "মামুনুর রশীদ (মাহিন) একজন তরুণ সাংবাদিক ও গণমাধ্যমকর্মী। বাংলাদেশের মৌলভীবাজার জেলার জুড়ী থানার ফুলতলা গ্রামের সন্তান তিনি। ২০২০ সাল থেকে বাংলাদেশের জনপ্রিয় স্যাটেলাইট টিভি চ্যানেল নিউজ টোয়েন্টিফোর-এর সংযুক্ত আরব আমিরাত প্রতিনিধি হিসেবে দায়িত্ব পালন করার পর বর্তমানে ফ্রান্সে স্থায়ীভাবে বসবাস করছেন।\n\nতিনি নিউজ টোয়েন্টিফোর-এর পাশাপাশি ২০২৩ সাল থেকে বাংলাদেশের জাতীয় দৈনিক আলোকিত সকাল-এর বিশেষ প্রতিনিধি হিসেবে দায়িত্ব পালন করছেন। ২০২৫ সাল থেকে তিনি বাংলাদেশের জনপ্রিয় জাতীয় দৈনিক কালবেলা-এর ফ্রান্স প্রতিনিধি হিসেবে দায়িত্ব পালন করছেন।\n\nএর আগে ২০১৮ থেকে ২০১৯ সাল পর্যন্ত এসএ টিভি এর মালয়েশিয়া প্রতিনিধি এবং ২০১৬ থেকে ২০২০ সাল পর্যন্ত সার্চ নিউজ-এর মালয়েশিয়া ব্যুরো চিফ হিসেবে দায়িত্ব পালন করেন। সাংবাদিকতার পাশাপাশি তিনি দেশ-বিদেশে প্রবাসী বাংলাদেশিদের বিভিন্ন কর্মকাণ্ড, সামাজিক ও সাংস্কৃতিক বিষয় এবং গুরুত্বপূর্ণ ঘটনাবলি গণমাধ্যমে তুলে ধরার ক্ষেত্রে সক্রিয় ভূমিকা পালন করে আসছেন।\n\nশিক্ষাজীবনে তিনি ২০১১ সালে বড়লেখা ডিগ্রি কলেজ থেকে বি.এ এবং ২০১৪ সালে সিলেট এমসি কলেজ থেকে এম.এ ডিগ্রি অর্জন করেন। পরবর্তীতে ২০২০ সালে মালয়েশিয়ার সেগি ইউনিভার্সিটি থেকে মাল্টিমিডিয়া ডিজাইনে ডিপ্লোমা সম্পন্ন করেন। তিনি ২০২০ সালে মালয়েশিয়া সুলতান এডুকেশন অ্যাওয়ার্ড লাভ করেন।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Saiful Islam",
    role: "Member of FBJA",
    outlet: "Shatmakash · Editor, PNTV24",
    photo: "/images/members/saiful-islam.jpeg",
    bio: {
      en: "Saiful Islam was born in Barlekha Upazila of Moulvibazar District, Sylhet Division, Bangladesh. From an early age, he developed a strong interest in technology, learning, and writing. He earned a Diploma in Computer Science and later completed a Bachelor of Science degree in Computer Science.\n\nAt the beginning of his professional career, he worked as an ICT technician in various government and private-sector organizations in Bangladesh.\n\nHis early interest in writing and the media led him to edit several local magazines, including Prantik, Prottasha, and Projukti Projonmo.\n\nHe contributed to the information technology section of Sylheter Dainik Dak and later worked as a regular correspondent. Through reporting and publishing important news, he became actively involved in journalism.\n\nAround 2020, he moved to France and began his life as an expatriate. He currently works as the France correspondent for Shatma Kontho, a news media outlet. From France, he continues to work actively to collect and disseminate important news from Bangladesh and around the world.\n\nHe currently serves as the editor of PNTV, an online news portal. His main goal is to deliver reliable news to readers in Bangladesh and abroad through objective, accurate, and responsible journalism.",
      fr: "Siful Islam est né dans l'upazila de Barlekha, dans le district de Moulvibazar, au Bangladesh. Dès son plus jeune âge, il s'intéresse particulièrement aux nouvelles technologies, à l'apprentissage et à l'écriture. Il a obtenu un diplôme en informatique, puis une licence en sciences informatiques.\n\nAu début de sa carrière professionnelle, il a travaillé comme technicien en technologies de l'information et de la communication dans plusieurs organismes publics et privés au Bangladesh.\n\nSon intérêt pour l'écriture et les médias l'a également conduit à participer à la rédaction et à l'édition de plusieurs magazines locaux, notamment Prantik, Prottasha et Projukti Projonmo.\n\nIl a commencé à collaborer à la rubrique informatique du journal Sylheter Dainik Dak, avant d'en devenir correspondant régulier. À travers la collecte et la publication de reportages sur des sujets importants, il s'est progressivement engagé dans le journalisme.\n\nVers 2020, il s'est installé en France et y poursuit depuis sa vie professionnelle. Il travaille actuellement comme correspondant en France du média d'information Shatma Kontho. Depuis la France, il continue de couvrir et de diffuser des informations importantes provenant du Bangladesh et de l'étranger.\n\nIl est actuellement rédacteur en chef du portail d'information en ligne PNTV. Son principal objectif est de fournir aux lecteurs au Bangladesh et à l'étranger une information fiable, grâce à un journalisme objectif, précis et responsable.",
      bn: "সাইফুল ইসলাম সিলেট বিভাগের মৌলভীবাজার জেলার বড়লেখা উপজেলায় জন্মগ্রহণ করেন। তিনি ছোটবেলা থেকেই প্রযুক্তি, জ্ঞানচর্চা ও লেখালেখির প্রতি গভীরভাবে আগ্রহী। শিক্ষাজীবনে তিনি কম্পিউটার সায়েন্সে ডিপ্লোমা এবং পরে কম্পিউটার বিজ্ঞানে বিএসসি ডিগ্রি অর্জন করেন।\n\nকর্মজীবনের শুরুতে তিনি বাংলাদেশের সরকারি ও বেসরকারি বিভিন্ন প্রতিষ্ঠানে আইসিটি টেকনিশিয়ান হিসেবে কাজ করেন।\n\nছোটবেলা থেকেই লেখালেখির অভ্যাস ও সংবাদমাধ্যমের প্রতি আগ্রহ থাকায় তিনি 'প্রান্তিক', 'প্রত্যাশা' ও 'প্রযুক্তির প্রজন্ম'সহ বেশ কয়েকটি স্থানীয় ম্যাগাজিন সম্পাদনা করেন।\n\nতিনি 'সিলেটের দৈনিক ডাক' পত্রিকার তথ্যপ্রযুক্তি বিষয়ক কলামে লেখালেখি করেন এবং পরবর্তীতে নিয়মিত প্রতিনিধি হিসেবে দায়িত্ব পালন করেন। বিভিন্ন গুরুত্বপূর্ণ সংবাদ সংগ্রহ ও প্রকাশের মাধ্যমে তিনি সাংবাদিকতায় সক্রিয় ভূমিকা রাখেন।\n\nপরবর্তীতে ২০২০ সালের দিকে তিনি প্রবাসজীবন শুরু করে ফ্রান্সে বসবাস শুরু করেন। বর্তমানে তিনি 'ষাটমা কণ্ঠ' নামের একটি সংবাদমাধ্যমের ফ্রান্স প্রতিনিধি হিসেবে কাজ করছেন। প্রবাসে থেকেও তিনি দেশ-বিদেশের গুরুত্বপূর্ণ সংবাদ সংগ্রহ ও প্রচারে নিরলসভাবে কাজ করে যাচ্ছেন।\n\nবর্তমানে তিনি 'পিএনটিভি' নামের একটি অনলাইন সংবাদমাধ্যমের সম্পাদক হিসেবে দায়িত্ব পালন করছেন। বস্তুনিষ্ঠ, নির্ভুল ও দায়িত্বশীল সাংবাদিকতার মাধ্যমে দেশ-বিদেশের পাঠকদের কাছে নির্ভরযোগ্য সংবাদ পৌঁছে দেওয়াই তার মূল লক্ষ্য।",
    },
    socials: { facebook: "", linkedin: "", x: "" },
  },
];

export const committee: CommitteeMember[] = rawCommittee.map((m) => ({
  ...m,
  slug: slugify(m.name),
}));
