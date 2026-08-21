export const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "committee", href: "/about/committee" },
  { key: "members", href: "/members" },
  { key: "news", href: "/news" },
  { key: "statements", href: "/news/statements" },
  { key: "events", href: "/events" },
  { key: "training", href: "/training" },
  { key: "gallery", href: "/gallery" },
  { key: "resources", href: "/resources" },
  { key: "membership", href: "/membership" },
  { key: "partners", href: "/partners" },
  { key: "press", href: "/press" },
  { key: "contact", href: "/contact" },
] as const;

// Primary header nav — matches the requested main-nav spec.
export const mainNavKeys = [
  "home",
  "about",
  "members",
  "news",
  "events",
  "training",
  "press",
  "membership",
  "contact",
] as const;

export const mainNavItems = navItems.filter((item) =>
  (mainNavKeys as readonly string[]).includes(item.key)
);
