export const hero = {
  name: "Sean Gleeson",
  positioningStatement:
    "I've spent 15+ years at the intersection of commerce and curiosity — building marketplaces, pricing tools, and now apps of my own. My operating philosophy: trust your intuition, verify with data, and never mistake consensus for correctness. Outside of work, I'm a girl dad, a golden retriever dad, a husband, and can be found on a stream fly fishing or chasing fresh powder when I'm not at a desk.",
  linkedInUrl: "https://www.linkedin.com/in/seangleeson",
  email: "SeanPGleeson@gmail.com",
};

export const about = {
  paragraphs: [
    "I've spent my career at the intersection of commerce and curiosity. It started in retail merchandising — learning how products move, how buyers think, how margin actually works. Then eCommerce arrived and changed everything, and I followed the pull. That took me to Chewy in its younger years, where I helped build the assortment from the ground up: launching new brands, negotiating with vendors, and standing up their first container and drop ship programs to expand what was possible while driving costs down. I stayed long enough to watch a scrappy startup grow into something that genuinely mattered to millions of pet owners.",
    "From there, Amazon. Then Target, where I joined to help build Target Plus before the playbook existed — launching Pet, Beauty, Vitamins, and Grocery on a marketplace still figuring out what it could become. What I love about that kind of work is the same thing I loved about Chewy: you're close to entrepreneurs, close to the problem, and there's no hiding behind a mature process. You just have to figure it out.",
    "Pricing is where I've spent a meaningful stretch of my career since then — building tools that span the full price lifecycle, from how prices are set to how they're communicated to guests. It's less glamorous than launching a category, but it matters enormously. A guest who trusts a price is a guest who comes back.",
    "My operating philosophy hasn't changed much across any of these roles: start with intuition, verify with data, and make space for honest disagreement. The best teams I've been part of think like scientists — they form hypotheses, run tests, and are genuinely willing to be wrong. Progress almost always starts with someone willing to say \"I think we're missing something here.\" I try to be that person, and I try to build teams where anyone can be.",
    "Lately, AI has changed what's possible for builders like me. I've started using it not just at work — to prototype faster, think more clearly, and move from idea to something real — but outside of work too. I've built an app that helps medical staff coordinate shifts, and another that helps job seekers cut through the noise of a broken search process. These projects are early, but they're real, and building them has reminded me why I got into this work in the first place.",
    "When I'm not building, I'm outside. Fly fishing, chasing powder, being a girl dad and golden retriever dad, and occasionally convincing my wife that one more trail is a good idea.",
    "This site is a window into how I think, what I've built, and what I'm curious about. Thanks for taking the time.",
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
    url: null,
  },
  {
    name: "grndwrk",
    status: "in-development",
    tagline: "Job searching, done differently.",
    description:
      "Job searching is broken. Most tools reward volume over fit, leaving candidates exhausted and under-positioned. grndwrk takes a different approach: helping job seekers identify the companies and roles where they can do their best work, then showing up to those opportunities with clarity and conviction.",
    screenshot: null,
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
