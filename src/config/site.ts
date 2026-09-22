export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Monograph",
  tagline: "Notes on building software",
  title: "Monograph ⋅ Blog of João Nuno Valente",
  description:
    "Personal programming blog by João Nuno Valente: projects, experiments, notes and lessons learned building software.",
  siteUrl: "https://monograph.joaonunovalente.com",
  authorName: "João Nuno Valente",
  authorDescription:
    "Mechanical engineer by training, software developer by passion. I write about programming, software development, and technology.",
  email: "hello@joaonunovalente.com",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "Monograph is a programming journal. It documents what I'm building, how I'm building it, and what I learn along the way. It might also contain essays on other topics related to technology that interest me.",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "https://formsubmit.co/hello@joaonunovalente.com",
    method: "post",
    responseTime: "Replies usually go out within two days.",
  },
  socials: [
    { label: "Website", href: "https://joaonunovalente.com" },
    { label: "GitHub", href: "https://github.com/joaonunovalente" },
    { label: "LinkedIn", href: "https://linkedin.com/in/joaonunovalente" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
