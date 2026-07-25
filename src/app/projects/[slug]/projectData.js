// Full case-study content per project. Keep every claim specific and true —
// this is the page that earns or loses recruiter trust.
export const projectData = {
  pulselink: {
    title: "PulseLink",
    tagline: "A blood donation platform connecting donors with the people who need them most.",
    image: "/projects/pulselink.png",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Better Auth", "JWT", "Stripe"],
    github: "https://github.com/emon-101/pulselink-client",
    live: "https://pulselink-client.vercel.app/",
    role: "Solo full-stack developer — design, backend, frontend, deployment",
    problem:
      "Blood donation requests in Bangladesh are often coordinated through scattered Facebook posts and phone chains, making it hard to find the right donor fast, verify their eligibility, or track whether a request was fulfilled.",
    solution:
      "PulseLink centralizes donor discovery, request tracking, and role-based coordination in one platform — donors, volunteers, and admins each get a dashboard suited to what they actually need to do.",
    features: [
      {
        title: "Role-based dashboards",
        desc: "Separate donor, volunteer, and admin views, each with permissions and data scoped to that role.",
      },
      {
        title: "Cascading location selects",
        desc: "District-to-upazila dropdowns for Bangladesh's administrative divisions, so requests can be matched by real location, not free text.",
      },
      {
        title: "Donation analytics",
        desc: "MongoDB aggregation pipelines using $dateTrunc to chart donation trends over time for admin reporting.",
      },
      {
        title: "Secure authentication",
        desc: "Better Auth with JWKS-based JWT verification, so tokens are validated against rotating public keys rather than a single shared secret.",
      },
      {
        title: "Payments & image hosting",
        desc: "Stripe integration for donation-drive funding, with ImgBB handling profile and campaign image uploads.",
      },
      {
        title: "Server-side pagination",
        desc: "Donor and request lists are paginated at the database level, keeping the app responsive as data grows.",
      },
    ],
    architecture: [
      "Centralized serverMutation / serverQuery API helpers wrap every request, auto-attaching JWT tokens so components never handle auth headers manually.",
      "Client/server boundary is managed deliberately — icon references are passed as string keys and resolved via lookup maps on the client, since components can't cross the server/client boundary directly in the App Router.",
      "Express routes are ordered with static routes before wildcard routes, avoiding a common bug where a generic /:id route silently swallows requests meant for a more specific endpoint.",
    ],
    challenges: [
      "Initial JWT verification used a single shared secret, which doesn't scale well or support key rotation. Migrating to Better Auth's JWKS-based verification meant re-architecting the auth middleware, but made the system meaningfully more production-realistic.",
      "Cascading district/upazila selects needed real Bangladesh administrative division data — sourcing and structuring that dataset took longer than the dropdown UI itself.",
      "If rebuilding this today, I'd add automated tests around the aggregation queries — right now correctness is verified manually, which doesn't scale as reporting features grow.",
    ],
  },

  ideavault: {
    title: "IdeaVault",
    tagline: "A place where startup ideas get shared, challenged, and refined by a community that cares.",
    image: "/projects/ideavault.png",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/emon-101/ideavault",
    live: "https://ideavault-fcaq.vercel.app/",
    role: "Solo full-stack developer — design, backend, frontend, deployment",
    problem:
      "Early-stage startup ideas usually die quietly in personal notes or private group chats, with no structured way to get outside feedback before someone invests real time building them.",
    solution:
      "IdeaVault gives founders a place to post an idea, get threaded critique from a community, and see which ideas are actually gaining traction through a trending algorithm rather than raw chronological order.",
    features: [
      {
        title: "Trending algorithm",
        desc: "Ideas surface based on engagement velocity rather than just recency, so a strong idea from yesterday doesn't get buried under low-effort posts from an hour ago.",
      },
      {
        title: "Threaded discussions",
        desc: "Nested comment threads let critique and follow-up questions stay attached to the specific point they're replying to.",
      },
      {
        title: "Authenticated posting",
        desc: "JWT-secured API routes so idea ownership and comment authorship are enforced server-side, not just hidden in the UI.",
      },
    ],
    architecture: [
      "Shares the same centralized serverMutation / serverQuery API pattern established in PulseLink, keeping auth token handling consistent across projects.",
      "Comment threads are modeled with parent references in MongoDB rather than a fully nested document structure, keeping individual comment edits and deletes cheap operations.",
    ],
    challenges: [
      "Designing the trending algorithm meant balancing recency against engagement without it feeling either stale or chaotic — early versions weighted recency too heavily and just reproduced a chronological feed.",
      "Threaded comments are straightforward to display but trickier to paginate correctly once threads get deep; this is an area I'd revisit with a more scalable comment-tree loading strategy.",
    ],
  },

  "skill-sphere": {
    title: "Skill Sphere",
    tagline: "A modern online learning platform with authentication and a full course system.",
    image: "/projects/skill-sphere.png",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/emon-101/skill-sphere",
    live: "https://skill-sphere-eh.vercel.app/",
    role: "Solo full-stack developer — design, backend, frontend, deployment",
    problem:
      "Many course platforms either overcomplicate enrollment and progress tracking or under-invest in a clean, responsive UI — learners end up fighting the interface instead of focusing on the material.",
    solution:
      "Skill Sphere focuses on a straightforward course browsing and enrollment flow with authenticated access to course content, wrapped in a responsive interface that holds up across devices.",
    features: [
      {
        title: "Course system",
        desc: "Structured course and lesson data model supporting enrollment and content access.",
      },
      {
        title: "Authentication",
        desc: "JWT-secured routes to gate enrolled content behind logged-in access.",
      },
      {
        title: "Responsive UI",
        desc: "Fully responsive layout built with Tailwind CSS, tested across mobile and desktop breakpoints.",
      },
    ],
    architecture: [
      "Built with the same Next.js + MongoDB + JWT foundation as the other projects, applying the same auth and API patterns at a smaller scale.",
    ],
    challenges: [
      "As an earlier project in the stack's evolution, this is the version without Better Auth or JWKS-based verification — a good before/after reference point against PulseLink's more mature auth implementation.",
    ],
  },

  digitools: {
    title: "DigiTools",
    tagline: "A curated collection of everyday developer utilities in one clean interface.",
    image: "/projects/digitools.png",
    tech: ["React", "Tailwind CSS", "Netlify"],
    github: "https://github.com/emon-101/DigiTools",
    live: "https://digitools-eh.netlify.app/",
    role: "Solo developer — design, frontend, deployment",
    problem:
      "Small everyday dev tasks — unit conversions, formatting, quick lookups — usually mean opening several different single-purpose websites, each with its own ads and clutter.",
    solution:
      "DigiTools brings a set of commonly needed utilities into a single, fast, distraction-free interface, so switching between tools doesn't mean switching between tabs.",
    features: [
      {
        title: "Utility collection",
        desc: "Multiple standalone tools accessible from one interface instead of scattered across separate sites.",
      },
      {
        title: "Fast, minimal UI",
        desc: "Built for speed and clarity — no ads, no unnecessary steps between opening the app and getting a result.",
      },
      {
        title: "Static deployment",
        desc: "Deployed on Netlify as a lightweight static site, keeping load times fast with no backend dependency.",
      },
    ],
    architecture: [
      "Built as a pure frontend React app with no backend — each tool runs entirely client-side, which keeps the app simple to deploy and free to host.",
    ],
    challenges: [
      "Keeping the UI consistent across tools with very different input/output shapes (converters vs. formatters vs. generators) took more design iteration than any single tool's logic did.",
      "If extended further, I'd add persisted user preferences (like default units) using local state or browser storage, since right now every tool resets on reload.",
    ],
  },

  "keen-keeper": {
    title: "Keen Keeper",
    tagline: "A task management app focused on staying out of the user's way.",
    image: "/projects/keenkeeper.png",
    tech: ["Next.js", "MongoDB", "Authentication"],
    github: "https://github.com/emon-101/keen-keeper",
    live: "https://keen-keeper-eh.vercel.app/",
    role: "Solo full-stack developer — design, backend, frontend, deployment",
    problem:
      "Many task managers bury the actual task list under dashboards, tags, and views the user never asked for, adding friction to something that should be quick: add a task, check it off.",
    solution:
      "Keen Keeper keeps the core loop fast — authenticated users get a private, real-time task list with a distraction-free layout, prioritizing speed of use over feature breadth.",
    features: [
      {
        title: "Real-time updates",
        desc: "Task changes reflect immediately in the UI without a manual refresh.",
      },
      {
        title: "Authenticated task lists",
        desc: "Each user's tasks are private and scoped to their account.",
      },
      {
        title: "Minimal, focused layout",
        desc: "Interface designed around the core add/complete/delete loop rather than a crowded dashboard.",
      },
    ],
    architecture: [
      "Built on Next.js with MongoDB for task persistence, using the same authenticated-API approach established across other projects.",
    ],
    challenges: [
      "Keeping the feature set intentionally minimal was harder than adding more — it meant saying no to dashboard-style additions that would have diluted the core fast-entry experience.",
      "A natural next step would be offline support with local-first sync, so tasks can still be added without a live connection.",
    ],
  },
};