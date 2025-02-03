import React, { useState } from "react";

const moviesData = [
  { title: "Inception", releaseYear: 2010, genre: "Sci-Fi", rating: 8.8 },
  { title: "The Dark Knight", releaseYear: 2008, genre: "Action", rating: 9.0 },
  { title: "Titanic", releaseYear: 1997, genre: "Romance", rating: 7.8 },
  { title: "The Matrix", releaseYear: 1999, genre: "Sci-Fi", rating: 8.7 },
  { title: "The Godfather", releaseYear: 1972, genre: "Crime", rating: 9.2 },
  { title: "Avatar", releaseYear: 2009, genre: "Sci-Fi", rating: 7.8 },
  { title: "The Shawshank Redemption", releaseYear: 1994, genre: "Drama", rating: 9.3 },
];

export default function MovieCatalog() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  // Sort Movies by Rating
  const sortMoviesByRating = () => {
    setMovies([...movies].sort((a, b) => b.rating - a.rating));
  };

  // Find Movie by Title
  const findMovie = (title) => {
    return movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase()) || "Movie not found";
  };

  // Get Movies with Rating > 8
  const highRatedMovies = movies.filter((movie) => movie.rating > 8);

  // List All Movie Titles
  const movieTitles = movies.map((movie) => movie.title);

  // Count Movies in a Genre
  const countMoviesByGenre = (genre) => {
    return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase()).length;
  };

  // Check if All Movies Are Rated Above 7
  const allAboveSeven = movies.every((movie) => movie.rating > 7);

  // Get Movies Released After 2000
  const recentMovies = movies.filter((movie) => movie.releaseYear > 2000);

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Movie Catalog</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={sortMoviesByRating}>
        Sort by Rating
      </button>

      <input
        type="text"
        placeholder="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => alert(JSON.stringify(findMovie(search), null, 2))}
      >
        Find Movie
      </button>

      <input
        type="text"
        placeholder="Filter by Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border p-2 rounded ml-2"
      />
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={() => alert(`Movies in ${genre}: ${countMoviesByGenre(genre)}`)}
        >
        Count Genre
        </button>


      <div className="mt-4">
        <h2 className="text-xl font-semibold">Movie List:</h2>
        <ul className="list-disc pl-5">
          {movies.map((movie, index) => (
            <li key={index}>{movie.title} ({movie.releaseYear}) - {movie.rating}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Other Stats:</h2>
        <p>High Rated Movies: {highRatedMovies.length}</p>
        <p>All Movies Rated Above 7: {allAboveSeven ? "Yes" : "No"}</p>
        <p>Recent Movies (Post-2000): {recentMovies.length}</p>
      </div>
    </div>
  );
}