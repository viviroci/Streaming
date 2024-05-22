import avatarImage from './Imagenes/Avatar.jpg';
import fightClubImage from './Imagenes/Fight Club.jpg';
import forrestGumpImage from './Imagenes/Forrest Gump.jpg';
import gladiatorImage from './Imagenes/Gladiator.jpg';
import inceptionImage from './Imagenes/Inception.jpg';
import interstellarImage from './Imagenes/Interstellar.jpg';
import pulpFictionImage from './Imagenes/Pulp Fiction.jpg';
import savingPrivateRyanImage from './Imagenes/Saving Private Ryan.jpg';
import starWarsImage from './Imagenes/StarWarsEpisodeIVANewHope.jpg'; 
import theDarkKnightImage from './Imagenes/The Dark Knight.jpg';
import theGodfatherImage from './Imagenes/The Godfather.jpg';
import theLordOfTheRingsImage from './Imagenes/The Lord of the Rings The Fellowship of the Ring.jpg';
import theMatrixImage from './Imagenes/The Matrix.jpg';
import titanicImage from './Imagenes/Titanic.jpg';
import shawshankImage from './Imagenes/The Shawshank Redemption.jpg';

const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending thriller by Christopher Nolan.',
    director: 'Christopher Nolan',
    year: 2010,
    reviews: 'Positive',
    duration: 148,
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    stars: 5,
    category: 'Sci-Fi',
    price: {
      rent: 10000,
      purchase: 30000
    },
    image: inceptionImage,
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
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: interstellarImage,
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
    trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    stars: 5,
    category: 'Crime',
    price: {
      rent: 10000,
      purchase: 30000
    },
    image: pulpFictionImage,
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
    trailer: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
    stars: 4,
    category: 'Fantasy',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: avatarImage,
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
    trailer: 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: theMatrixImage,
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
    trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
    stars: 5,
    category: 'Crime',
    price: {
      rent: 10000,
      purchase: 30000
    },
    image: theGodfatherImage,
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
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    stars: 5,
    category: 'Action',
    price: {
      rent: 10000,
      purchase: 30000
    },
    image: theDarkKnightImage,
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
    trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: fightClubImage,
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
    trailer: 'https://www.youtube.com/watch?v=uPIEn0M8su0',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: forrestGumpImage,
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
    trailer: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
    stars: 4,
    category: 'Drama',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: shawshankImage,
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
    trailer: 'https://www.youtube.com/watch?v=1g3_CFmnU7k',
    stars: 4,
    category: 'Sci-Fi',
    price: {
      rent: 8000,
      purchase: 25000
    },
    image: starWarsImage,
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
    trailer: 'https://www.youtube.com/watch?v=Pki6jbSbXIY',
    stars: 3,
    category: 'Fantasy',
    price: {
      rent: 5000,
      purchase: 20000
    },
    image: theLordOfTheRingsImage,
    imageBackground: 'the_lord_of_the_rings_background.jpg'
  },
  {
    id: 13,
    title: 'Gladiator',
    description: 'A historical drama film directed by Ridley Scott.',
    director: 'Ridley Scott',
    year: 2000,
    reviews: 'Very Positive',
    duration: 155,
    trailer: 'https://www.youtube.com/watch?v=owK1qxDselE',
    stars: 3,
    category: 'Drama',
    price: {
      rent: 5000,
      purchase: 20000
    },
    image: gladiatorImage,
    imageBackground: 'gladiator_background.jpg'
  },
  {
    id: 14,
    title: 'Titanic',
    description: 'A romance/disaster film directed by James Cameron.',
    director: 'James Cameron',
    year: 1997,
    reviews: 'Very Positive',
    duration: 195,
    trailer: 'https://www.youtube.com/watch?v=zCy5WQ9S4c0',
    stars: 2,
    category: 'Romance',
    price: {
      rent: 3000,
      purchase: 15000
    },
    image: titanicImage,
    imageBackground: 'Titanic_background.jpg'  },
  {
    id: 15,
    title: 'Saving Private Ryan',
    description: 'A war film directed by Steven Spielberg.',
    director: 'Steven Spielberg',
    year: 1998,
    reviews: 'Very Positive',
    duration: 169,
    trailer: 'https://www.youtube.com/watch?v=zCy5WQ9S4c',
    stars: 5,
    category: 'War',
    price: {
      rent: 12000,
      purchase: 35000
    },
    image: savingPrivateRyanImage,
    imageBackground: 'saving_private_ryan_background.jpg'
  
  },
];

export default movies;


  