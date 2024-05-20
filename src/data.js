const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending thriller by Christopher Nolan.',
    director: 'Christopher Nolan',
    year: 2010,
    reviews: 'Positive',
    duration: 148,
    image: 'link_to_inception_image',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    stars: 5,
    category: 'Sci-Fi',
    price: {
      rent: 10000,
      purchase: 30000
    },
    imageBackground: 'inception_background.jpg'
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A journey through space and time.',
    director: 'Christopher Nolan',
    year: 2014,
    reviews: 'Very Positive',
    duration: 169,
    image: 'link_to_interstellar_image',
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'interstellar_background.jpg'
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    description: 'A crime film directed by Quentin Tarantino.',
    director: 'Quentin Tarantino',
    year: 1994,
    reviews: 'Very Positive',
    duration: 154,
    image: 'link_to_pulp_fiction_image',
    trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    stars: 5,
    category: 'Crime',
    price: {
      rent: 10000,
      purchase: 30000
    },
    imageBackground: 'pulp_fiction_background.jpg'
  },
  {
    id: 4,
    title: 'Avatar',
    description: 'A visually stunning movie by James Cameron.',
    director: 'James Cameron',
    year: 2009,
    reviews: 'Positive',
    duration: 162,
    image: 'link_to_avatar_image',
    trailer: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
    stars: 4,
    category: 'Fantasy',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'avatar_background.jpg'
  },
  {
    id: 5,
    title: 'The Matrix',
    description: 'A sci-fi action film directed by the Wachowskis.',
    director: 'Lana Wachowski, Lilly Wachowski',
    year: 1999,
    reviews: 'Positive',
    duration: 136,
    image: 'link_to_matrix_image',
    trailer: 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'matrix_background.jpg'
  },
  {
    id: 6,
    title: 'The Godfather',
    description: 'A crime film directed by Francis Ford Coppola.',
    director: 'Francis Ford Coppola',
    year: 1972,
    reviews: 'Very Positive',
    duration: 175,
    image: 'link_to_godfather_image',
    trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
    stars: 5,
    category: 'Crime',
    price: {
      rent: 10000,
      purchase: 30000
    },
    imageBackground: 'godfather_background.jpg'
  },
  {
    id: 7,
    title: 'The Dark Knight',
    description: 'A superhero film directed by Christopher Nolan.',
    director: 'Christopher Nolan',
    year: 2008,
    reviews: 'Very Positive',
    duration: 152,
    image: 'link_to_dark_knight_image',
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    stars: 5,
    category: 'Action',
    price: {
      rent: 10000,
      purchase: 30000
    },
    imageBackground: 'dark_knight_background.jpg'
  },
  {
    id: 8,
    title: 'Fight Club',
    description: 'A drama film directed by David Fincher.',
    director: 'David Fincher',
    year: 1999,
    reviews: 'Very Positive',
    duration: 139,
    image: 'link_to_fight_club_image',
    trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'fight_club_background.jpg'
  },
  {
    id: 9,
    title: 'Forrest Gump',
    description: 'A drama film directed by Robert Zemeckis.',
    director: 'Robert Zemeckis',
    year: 1994,
    reviews: 'Very Positive',
    duration: 142,
    image: 'link_to_forrest_gump_image',
    trailer: 'https://www.youtube.com/watch?v=uPIEn0M8su0',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'forrest_gump_background.jpg'
  },
  {
    id: 10,
    title: 'The Shawshank Redemption',
    description: 'A drama film directed by Frank Darabont.',
    director: 'Frank Darabont',
    year: 1994,
    reviews: 'Very Positive',
    duration: 142,
    image: 'link_to_shawshank_image',
    trailer: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'shawshank_background.jpg'
  },
  {
    id: 11,
    title: 'Star Wars: Episode IV - A New Hope',
    description: 'A sci-fi film directed by George Lucas.',
    director: 'George Lucas',
    year: 1977,
    reviews: 'Very Positive',
    duration: 121,
    image: 'link_to_star_wars_image',
    trailer: 'https://www.youtube.com/watch?v=1g3_CFmnU7k',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    imageBackground: 'star_wars_background.jpg'
  },
  {
    id: 12,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'A fantasy film directed by Peter Jackson.',
    director: 'Peter Jackson',
    year: 2001,
    reviews: 'Very Positive',
    duration: 178,
    image: 'link_to_lord_of_the_rings_image',
    trailer: 'https://www.youtube.com/watch?v=Pki6jbSbXIY',
    stars: 3,
    category: 'Fantasy',
    price: {
      rent: 5000,
      purchase: 20000
    },
    imageBackground: 'The Lord of the Rings The Fellowship of the Ring_background.jpg'
  },
  {
    id: 13,
    title: 'Gladiator',
    description: 'A historical drama film directed by Ridley Scott.',
    director: 'Ridley Scott',
    year: 2000,
    reviews: 'Very Positive',
    duration: 155,
    image: 'link_to_gladiator_image',
    trailer: 'https://www.youtube.com/watch?v=owK1qxDselE',
    stars: 3,
    category: 'Drama',
    price: {
      rent: 5000,
      purchase: 20000
    },
    imageBackground: 'Gladiator_background.jpg'     
  },
  {
    id: 14,
    title: 'Titanic',
    description: 'A romance/disaster film directed by James Cameron.',
    director: 'James Cameron',
    year: 1997,
    reviews: 'Very Positive',
    duration: 195,
    image: 'link_to_titanic_image',
    trailer: 'https://www.youtube.com/watch?v=zCy5WQ9S4c0',
    stars: 2,
    category: 'Romance',
    price: {
      rent: 3000,
      purchase: 15000
    },
    imageBackground: 'Titanic_background.jpg'
  },
  {
    id: 15,
    title: 'Saving Private Ryan',
    description: 'A war film directed by Steven Spielberg.',
    director: 'Steven Spielberg',
    year: 1998,
    reviews: 'Very Positive',
    duration: 169,
    image: 'link_to_saving_private_ryan_image',
    trailer: 'https://www.youtube.com/watch?v=zwhP5b4tD6g', 
    stars: 3,
    category: 'War',
    price: {
      rent: 5000,
      purchase: 20000
    },
    imageBackground: 'Saving Private Ryan_background.jpg'
  },
];

export default movies;


  