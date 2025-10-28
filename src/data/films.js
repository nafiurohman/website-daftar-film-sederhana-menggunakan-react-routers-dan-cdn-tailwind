const films = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    duration: "2h 28m",
    genre: "Sci-Fi, Action",
    rating: "8.8/10",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    duration: "2h 12m",
    genre: "Thriller, Drama",
    rating: "8.6/10",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: "2h 49m",
    genre: "Sci-Fi, Adventure",
    rating: "8.6/10",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    duration: "2h 32m",
    genre: "Action, Crime",
    rating: "9.0/10",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    duration: "2h 34m",
    genre: "Crime, Drama",
    rating: "8.9/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    duration: "2h 55m",
    genre: "Crime, Drama",
    rating: "9.2/10",
    poster: "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    duration: "2h 5m",
    genre: "Animation, Adventure",
    rating: "8.6/10",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    year: 2019,
    synopsis: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
    duration: "3h 1m",
    genre: "Action, Adventure",
    rating: "8.4/10",
    poster: "https://images.unsplash.com/photo-1635805737773-93d49b68f883?w=400&h=600&fit=crop"
  },
  {
    id: 9,
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
    duration: "2h 8m",
    genre: "Musical, Romance",
    rating: "8.0/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    duration: "2h 22m",
    genre: "Drama",
    rating: "9.3/10",
    poster: "https://images.unsplash.com/photo-1551524164-6ca5e3aa1c6f?w=400&h=600&fit=crop"
  },
  {
    id: 11,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    duration: "2h 22m",
    genre: "Drama, Romance",
    rating: "8.8/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 12,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    duration: "2h 16m",
    genre: "Action, Sci-Fi",
    rating: "8.7/10",
    poster: "https://images.unsplash.com/photo-1635863138275-d9b33299680a?w=400&h=600&fit=crop"
  },
  {
    id: 13,
    title: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners.",
    duration: "2h 26m",
    genre: "Biography, Crime",
    rating: "8.7/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 14,
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    year: 1994,
    synopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    duration: "1h 28m",
    genre: "Animation, Adventure",
    rating: "8.5/10",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    id: 15,
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    synopsis: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
    duration: "2h 19m",
    genre: "Drama",
    rating: "8.8/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 16,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom.",
    duration: "3h 21m",
    genre: "Adventure, Fantasy",
    rating: "8.9/10",
    poster: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?w=400&h=600&fit=crop"
  },
  {
    id: 17,
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey",
    year: 2018,
    synopsis: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals.",
    duration: "1h 57m",
    genre: "Animation, Action",
    rating: "8.4/10",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    id: 18,
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    synopsis: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
    duration: "2h 2m",
    genre: "Crime, Drama",
    rating: "8.4/10",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop"
  },
  {
    id: 19,
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored.",
    duration: "1h 46m",
    genre: "Drama, Music",
    rating: "8.5/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 20,
    title: "Dune",
    director: "Denis Villeneuve",
    year: 2021,
    synopsis: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset.",
    duration: "2h 35m",
    genre: "Adventure, Sci-Fi",
    rating: "8.0/10",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop"
  },
  {
    id: 21,
    title: "Get Out",
    director: "Jordan Peele",
    year: 2017,
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    duration: "1h 44m",
    genre: "Horror, Mystery",
    rating: "7.7/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 22,
    title: "The Social Network",
    director: "David Fincher",
    year: 2010,
    synopsis: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.",
    duration: "2h",
    genre: "Biography, Drama",
    rating: "7.7/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  },
  {
    id: 23,
    title: "Black Panther",
    director: "Ryan Coogler",
    year: 2018,
    synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
    duration: "2h 14m",
    genre: "Action, Adventure",
    rating: "7.3/10",
    poster: "https://images.unsplash.com/photo-1635805737773-93d49b68f883?w=400&h=600&fit=crop"
  },
  {
    id: 24,
    title: "Mad Max: Fury Road",
    director: "George Miller",
    year: 2015,
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    duration: "2h",
    genre: "Action, Adventure",
    rating: "8.1/10",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop"
  },
  {
    id: 25,
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    year: 2014,
    synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    duration: "1h 39m",
    genre: "Adventure, Comedy",
    rating: "8.1/10",
    poster: "https://images.unsplash.com/photo-1489599809505-f2b4efca99d0?w=400&h=600&fit=crop"
  }
];

export default films;