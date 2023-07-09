import { Movie } from './movie/resolvers/Movie';
import { createMovie as Mutation_createMovie } from './movie/resolvers/Mutation/createMovie';
import { deleteMovie as Mutation_deleteMovie } from './movie/resolvers/Mutation/deleteMovie';
import { updateMovie as Mutation_updateMovie } from './movie/resolvers/Mutation/updateMovie';
import { movie as Query_movie } from './movie/resolvers/Query/movie';
import { movies as Query_movies } from './movie/resolvers/Query/movies';
export const resolvers = {
    Query: { movie: Query_movie, movies: Query_movies },
    Mutation: { createMovie: Mutation_createMovie, deleteMovie: Mutation_deleteMovie, updateMovie: Mutation_updateMovie },
    Movie: Movie
};
