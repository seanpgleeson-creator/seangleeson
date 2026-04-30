export const hero = {
  name: "Sean Gleeson",
  positioningStatement:
    "I'm a product strategist and builder. At Target, I build pricing capabilities that drive affordability and trust. My goal is to be a practitioner, leveling up on AI through experimentation and curiosity. This website is one example. Welcome!",
  linkedInUrl: "https://www.linkedin.com/in/seangleeson",
  email: "SeanPGleeson@gmail.com",
};

export type AboutBlock =
  | { kind: "lede"; body: string }
  | { kind: "section"; heading: string; body: string[] }
  | { kind: "signoff"; body: string };

export const about: { blocks: AboutBlock[] } = {
  blocks: [
    {
      kind: "lede",
      body: "I pair intuition with evidence. Every intuition or idea is a hypothesis for which evidence must be sought. I build cultures based on trust, dissent, curiosity, and entrepreneurial thinking.",
    },
    {
      kind: "section",
      heading: "How I think",
      body: [
        "Good decisions start with a hypothesis, not a conclusion. I form a point of view early and update as evidence unfolds. Therefore, teams should seek evidence through action early and often.",
        "Practice over theory. Learn by shipping. An imperfect version in production beats a perfect version in a deck.",
      ],
    },
    {
      kind: "section",
      heading: "How I lead",
      body: [
        "Leadership is hard. It is a responsibility and an investment in the success of others. My job as a leader is to create the conditions for the right thinking to happen, celebrate failures as much as the wins (of which there should be both), and create a culture of confidence and trust.",
        "Remove obstacles, set context clearly and make disagreement safe.",
      ],
    },
    {
      kind: "section",
      heading: "The path here",
      body: [
        "Merchandising \u2192 eCommerce \u2192 platform-building \u2192 pricing. I helped grow Chewy to one of retail\u2019s most loved brands. Joined Target to build Target Plus before the playbook existed. Now building pricing tools that make a $100B retailer feel trustworthy one guest at a time. The through-line: always close to the problem, building new capabilities.",
      ],
    },
    {
      kind: "section",
      heading: "Building outside the job",
      body: [
        "AI has made it possible for me to build things I couldn\u2019t have shipped alone two years ago. I strive to be a change agent inside and outside of work. With new tools, I am driving my curiosity into value-delivering apps and tools.",
      ],
    },
    {
      kind: "section",
      heading: "Life outside of work",
      body: [
        "When I\u2019m not building, I\u2019m outside. Fly fishing, chasing powder, Crossfitting, being a girl dad and golden retriever dad, and a husband.",
      ],
    },
    {
      kind: "signoff",
      body: "This site is a window into how I think, what I\u2019ve built, and what I\u2019m curious about. Thanks for taking the time.",
    },
  ],
};

export type CareerHighlight = {
  company: string;
  title: string;
  description: string;
  metric: string | null;
};

export const careerHighlights: CareerHighlight[] = [
  {
    company: "Chewy",
    title:
      "Building the foundation at Chewy before anyone knew what Chewy would become",
    description:
      "I joined Chewy when it was still finding its footing — and stayed long enough to watch it grow into one of the most beloved brands in retail. In those years, I helped build the assortment from scratch: launching new brands, leading vendor negotiations, and standing up their first container and drop ship programs to expand selection and drive down cost. What I learned there about moving fast, working directly with founders and small brands, and building infrastructure that scales — I've carried into everything since.",
    metric: "TODO",
  },
  {
    company: "Target Plus",
    title: "Building the playbook for a marketplace that didn't have one yet",
    description:
      "When I joined Target Plus, the platform was early and the categories were wide open. I led the launch of Pet Supplies, Vitamins & Supplements, Beauty, and Grocery — working directly with sellers and internal teams to define what \"good\" looked like on a platform still figuring itself out.",
    metric: "TODO",
  },
  {
    company: "Target",
    title: "Building the tools that make pricing trustworthy at scale",
    description:
      "Pricing is one of the most sensitive surfaces in retail — guests notice when something feels off, even if they can't articulate why. I've led development of pricing tools that span the full price lifecycle, from how prices are set to how they're surfaced to guests.",
    metric: "TODO",
  },
  {
    company: "Target",
    title: "Struck the right chord on pricing communication",
    description:
      "When Target.com launched enhanced strikethrough messaging with \"New Lower Price,\" it wasn't just a design tweak — it was a signal to guests that they could trust what they were seeing.",
    metric: "7% lift in conversion rate.",
  },
];

export type AppStatus = "live" | "in-development";

export type App = {
  name: string;
  status: AppStatus;
  tagline: string;
  description: string;
  screenshot: string | null;
  screenshots: string[] | null;
  url: string | null;
};

export const apps: App[] = [
  {
    name: "ShiftSwap",
    status: "live",
    tagline: "Shift coordination for medical staff, simplified.",
    description:
      "ShiftSwap makes it simple for medical staff to post, find, and pick up open shifts — bringing flexibility and calm to one of the more stressful coordination problems in healthcare.",
    screenshot: null,
    screenshots: [
      "/shiftswap-browse.png",
      "/shiftswap-post.png",
      "/shiftswap-details.png",
      "/shiftswap-confirm.png",
    ],
    url: null,
  },
  {
    name: "grndwrk",
    status: "in-development",
    tagline: "Job searching, done differently.",
    description:
      "Job searching is broken. Most tools reward volume over fit, leaving candidates exhausted and under-positioned. grndwrk takes a different approach: helping job seekers identify the companies and roles where they can do their best work, then showing up to those opportunities with clarity and conviction.",
    screenshot: null,
    screenshots: null,
    url: null,
  },
];

export type Book = {
  title: string;
  author: string;
  note: string;
};

export const books: Book[] = [
  {
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    note: "TODO",
  },
  {
    title: "Working Backwards",
    author: "Colin Bryar & Bill Carr",
    note: "TODO",
  },
  {
    title: "Running Down a Dream",
    author: "Bill Gurley",
    note: "TODO",
  },
  {
    title: "Think Again",
    author: "Adam Grant",
    note: "TODO",
  },
  {
    title: "The Infinite Game",
    author: "Simon Sinek",
    note: "TODO",
  },
];

export type Podcast = {
  name: string;
  note: string;
};

export const podcasts: Podcast[] = [
  { name: "Acquired", note: "TODO" },
  { name: "Stratechery / Ben Thompson", note: "TODO" },
  { name: "The Curiosity Shop", note: "TODO" },
  { name: "Stuff You Should Know", note: "TODO" },
];
