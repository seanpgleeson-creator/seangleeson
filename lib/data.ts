export const hero = {
  name: "Sean Gleeson",
  positioningStatement:
    "I'm a product strategist and builder. At Target, I work on pricing tools that help make things more affordable and build trust in our guests with authentic pricing. I'm a hands-on practitioner, getting better at AI by actually building with it. This site is one of those experiments. Glad you're here.",
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
      body: "I like to pair intuition with evidence. I'll happily follow a hunch, but approach it as a hypothesis in a science experiment, looking for proof with evidence and testing. I build teams where trust, healthy disagreement, curiosity, and a bit of entrepreneurial scrappiness are the norm.",
    },
    {
      kind: "section",
      heading: "How I think",
      body: [
        "I think good decisions start with a hypothesis, not a conclusion. I'll form a point of view early, then keep updating it as evidence is found, which means the fastest way to learn is usually to do something and see what happens.",
        "A small, perhaps imperfect, version in production teaches you more than a perfect one in a deck.",
      ],
    },
    {
      kind: "section",
      heading: "How I lead",
      body: [
        "Leadership is hard and a responsibility to others — namely your team. My job as a leader is to create the conditions for good thinking to happen, then get out of the way. That means removing obstacles, setting context clearly, creating a culture of safety, and embracing disagreement.",
        "Celebrate the failures like you celebrate the wins.",
      ],
    },
    {
      kind: "section",
      heading: "The path here",
      body: [
        "Merchandising \u2192 eCommerce \u2192 platform-building \u2192 pricing. I helped grow Chewy into one of retail\u2019s most loved brands, then joined Target to build Target Plus while the playbook was still being written. These days I\u2019m building pricing tools that help a $100B retailer ensure guests get fair pricing, extraordinary deals, and transparency. The through-line has always been the same: stay close to the problem, and build the thing that doesn\u2019t exist yet.",
      ],
    },
    {
      kind: "section",
      heading: "Building outside the job",
      body: [
        "AI has made it possible for me to build things I couldn\u2019t have shipped alone a couple years ago, and honestly that\u2019s been a thrill. I feel like a kid in a sandbox. I like being a bit of a change agent, at work and after hours, and pointing my curiosity at small tools and apps that actually deliver something useful.",
      ],
    },
    {
      kind: "section",
      heading: "Life outside of work",
      body: [
        "When I\u2019m not building, I\u2019m usually outside. Fly fishing, chasing powder, getting humbled at CrossFit, or sitting in a rocking chair\u2026all while being a girl dad, golden retriever dad, and husband.",
      ],
    },
    {
      kind: "signoff",
      body: "This site is a little window into how I think, what I\u2019ve built, and what I\u2019m curious about. Thanks for spending a few minutes here.",
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
      "I joined Chewy in the scrappy, fast-growing early years and stuck around long enough to watch it become one of the most beloved brands in retail. I helped build the assortment from scratch, launching new brands, leading vendor negotiations, and building new capabilities like their first container and drop-ship programs to widen selection and bring costs down. What I learned there about moving fast, working shoulder-to-shoulder with founders and small brands, and building infrastructure that scales has stuck with me ever since.",
    metric: "TODO",
  },
  {
    company: "Target Plus",
    title: "Building the playbook for a marketplace that didn't have one yet",
    description:
      "When I joined Target Plus, the platform was young and the categories were wide open. I led the launch of Pet Supplies, Vitamins & Supplements, Beauty, and Grocery, working directly with sellers and internal teams to figure out what \"good\" even looked like on a platform that was still figuring itself out.",
    metric: "TODO",
  },
  {
    company: "Target",
    title: "Building the tools that make pricing trustworthy at scale",
    description:
      "Pricing is one of the most sensitive surfaces in retail. Guests notice when something feels off, even if they can't quite say why. I've led development of tools that span the full price lifecycle, from how prices get set to how they show up for guests.",
    metric: "TODO",
  },
  {
    company: "Target",
    title: "Struck the right chord on pricing communication",
    description:
      "When Target.com rolled out enhanced strikethrough messaging with \"New Lower Price,\" it was more than a design tweak — it was a small signal that guests could trust what they were looking at. It drove a 7% lift in conversion.",
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
    url: "https://www.hcmcshiftswap.com/",
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
