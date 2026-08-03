export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-live-music-matters-in-aged-care",
    title: "Why Live Music Matters in Aged Care Communities",
    excerpt:
      "Music has a unique way of reaching residents that other activities can't. Here's what we've learned from years of performing in care facilities.",
    content: [
      "Music has a way of reaching people that conversation sometimes can't. For residents living with dementia or memory loss, a familiar song can unlock a moment of connection that felt lost — a lyric sung along to, a hand tapping the rhythm, a smile at a tune from decades ago.",
      "Over the years of performing in care facilities, we've seen this again and again. It's not just entertainment — it's a genuine emotional and cognitive lift, and it's one of the reasons we built Meals and Melodies around the idea of pairing great food with live performance.",
      "Whether it's a themed excursion at New Farm Bistro or an in-house incursion at your facility, the goal is always the same: create a moment residents genuinely look forward to.",
    ],
    category: "Community",
    date: "March 3, 2026",
    readTime: "4 min read",
    image: "/services.png",
  },
  {
    slug: "planning-your-first-group-excursion",
    title: "Planning Your First Group Excursion: A Simple Guide",
    excerpt:
      "Thinking about taking your group off-site for the first time? Here's what to consider before you book.",
    content: [
      "Organising an excursion for a group can feel like a lot to coordinate — numbers, transport, dietary needs, timing. Here's a simple breakdown of what to think about before you book.",
      "Start with your numbers. Our excursions require a minimum of 20 persons, so it helps to have a rough headcount early. From there, think about transport — we don't organise this ourselves, so it's worth confirming your group's transport plan before locking in a date.",
      "Finally, think about themes. If you want a themed event, let us know early so we can tailor the food and music to match, whether it's a Bollywood Bash, a French Bastille Day, or a Mexican Fiesta.",
    ],
    category: "Guides",
    date: "February 18, 2026",
    readTime: "3 min read",
    image: "/services.png",
  },
  {
    slug: "behind-the-scenes-with-valerie-and-sandra",
    title: "Behind the Scenes: A Day With Valerie and Sandra",
    excerpt:
      "Meet the two people behind every Meals and Melodies event — one in the kitchen, one on stage.",
    content: [
      "Every Meals and Melodies event is built around two people: Valerie, who prepares every dish from scratch, and Sandra, who leads the live performance. We spent a day with them to see what goes into a single event.",
      "The morning starts early with prep — sourcing ingredients, planning the menu around dietary needs, and setting up. By the time guests arrive, Valerie is already plating the first course while Sandra runs a quick soundcheck.",
      "It's this combination — a genuinely good meal paired with a live, tailored performance — that makes each event feel less like a scheduled activity and more like an occasion.",
    ],
    category: "Our Team",
    date: "January 27, 2026",
    readTime: "5 min read",
    image: "/services.png",
  },
];