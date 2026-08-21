export type CommitteeSocials = {
  facebook?: string;
  linkedin?: string;
  x?: string;
};

export type CommitteeMember = {
  name: string;
  role: string;
  outlet?: string;
  extra?: string[];
  photo?: string;
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
    extra: ["RFI", "France 24", "France Médias Monde (MCD)", "Member, BJIM"],
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
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Momin Bin Mahmud Ansari",
    role: "Planning and Event Management Cell of FBJA",
    outlet: "Daily Sun · banglanews24.com",
    extra: ["Former Vice President, Chittagong University Journalists Association"],
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
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Mamunur Rashid Mahin",
    role: "Member of FBJA",
    outlet: "Daily Kalbela",
    socials: { facebook: "", linkedin: "", x: "" },
  },
  {
    name: "Saiful Islam",
    role: "Member of FBJA",
    outlet: "Shatmakash · Editor, PNTV24",
    socials: { facebook: "", linkedin: "", x: "" },
  },
];

export const committee: CommitteeMember[] = rawCommittee.map((m) => ({
  ...m,
  slug: slugify(m.name),
}));
