/* ==========================================================
   data.js  -  our "fake database"
   Later this data will come from a real backend (MongoDB).
   ========================================================== */

const movies = [
  { id: 1,  title: "Stranger Things", image: "https://placehold.co/300x170/1a1a2e/e50914?text=Stranger+Things", category: "trending",   year: 2016, rating: 8.7, description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces." },
  { id: 2,  title: "Money Heist",     image: "https://placehold.co/300x170/2e1a1a/e50914?text=Money+Heist",     category: "trending",   year: 2017, rating: 8.2, description: "A criminal mastermind recruits eight people to carry out the biggest heist in recorded history." },
  { id: 3,  title: "Dark",            image: "https://placehold.co/300x170/16213e/e50914?text=Dark",            category: "trending",   year: 2017, rating: 8.8, description: "A missing child causes four families to unravel a mind-bending time-travel conspiracy." },
  { id: 4,  title: "Lupin",           image: "https://placehold.co/300x170/0f3e2e/e50914?text=Lupin",           category: "trending",   year: 2021, rating: 7.5, description: "A gentleman thief takes inspiration from Arsene Lupin to seek revenge for his father's death." },
  { id: 5,  title: "Peaky Blinders",  image: "https://placehold.co/300x170/2a2a2a/e50914?text=Peaky+Blinders",  category: "trending",   year: 2013, rating: 8.8, description: "A gangster family epic set in 1900s England, centred on a gang who sew razor blades in their caps." },
  { id: 6,  title: "The Crown",       image: "https://placehold.co/300x170/0f3460/e50914?text=The+Crown",       category: "toprated",   year: 2016, rating: 8.6, description: "Follows the political rivalries and romance of Queen Elizabeth II's reign." },
  { id: 7,  title: "Breaking Bad",    image: "https://placehold.co/300x170/1a2e1a/e50914?text=Breaking+Bad",    category: "toprated",   year: 2008, rating: 9.5, description: "A chemistry teacher diagnosed with cancer turns to manufacturing drugs to secure his family's future." },
  { id: 8,  title: "The Witcher",     image: "https://placehold.co/300x170/3e2e0f/e50914?text=The+Witcher",     category: "toprated",   year: 2019, rating: 8.0, description: "A mutated monster hunter struggles to find his place in a world where people are often more wicked than beasts." },
  { id: 9,  title: "Narcos",          image: "https://placehold.co/300x170/2e2e3e/e50914?text=Narcos",          category: "toprated",   year: 2015, rating: 8.8, description: "The true story of the rise and fall of the notorious Colombian drug cartels." },
  { id: 10, title: "Ozark",           image: "https://placehold.co/300x170/1e2e2e/e50914?text=Ozark",           category: "toprated",   year: 2017, rating: 8.5, description: "A financial adviser drags his family to the Missouri Ozarks to launder money for a cartel." },
  { id: 11, title: "Wednesday",       image: "https://placehold.co/300x170/2e2e1a/e50914?text=Wednesday",       category: "newrelease", year: 2022, rating: 8.1, description: "Wednesday Addams investigates a monstrous killing spree while making friends at Nevermore Academy." },
  { id: 12, title: "Squid Game",      image: "https://placehold.co/300x170/3e0f0f/e50914?text=Squid+Game",      category: "newrelease", year: 2021, rating: 8.0, description: "Cash-strapped players accept an invitation to compete in children's games for a tempting prize." },
  { id: 13, title: "The Night Agent", image: "https://placehold.co/300x170/0f1e3e/e50914?text=Night+Agent",     category: "newrelease", year: 2023, rating: 7.6, description: "A low-level FBI agent works in the basement of the White House manning a phone that never rings." },
  { id: 14, title: "Delhi Crime",     image: "https://placehold.co/300x170/3e2a0f/e50914?text=Delhi+Crime",     category: "newrelease", year: 2019, rating: 8.5, description: "Following the Delhi Police investigation into a case that shook the nation." },
  { id: 15, title: "Sacred Games",    image: "https://placehold.co/300x170/2a0f3e/e50914?text=Sacred+Games",    category: "newrelease", year: 2018, rating: 8.5, description: "A troubled police officer is drawn into a labyrinthine case involving a criminal overlord in Mumbai." }
];
