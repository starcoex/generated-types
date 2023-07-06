/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AddBookMutationResponse } from './book/resolvers/AddBookMutationResponse';
import    { Book } from './book/resolvers/Book';
import    { Movie } from './movie/resolvers/Movie';
import    { addBook as Mutation_addBook } from './book/resolvers/Mutation/addBook';
import    { createMovie as Mutation_createMovie } from './movie/resolvers/Mutation/createMovie';
import    { deleteMovie as Mutation_deleteMovie } from './movie/resolvers/Mutation/deleteMovie';
import    { updateMovie as Mutation_updateMovie } from './movie/resolvers/Mutation/updateMovie';
import    { books as Query_books } from './book/resolvers/Query/books';
import    { movie as Query_movie } from './movie/resolvers/Query/movie';
import    { movies as Query_movies } from './movie/resolvers/Query/movies';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { books: Query_books,movie: Query_movie,movies: Query_movies,user: Query_user },
      Mutation: { addBook: Mutation_addBook,createMovie: Mutation_createMovie,deleteMovie: Mutation_deleteMovie,updateMovie: Mutation_updateMovie },
      
      AddBookMutationResponse: AddBookMutationResponse,
Book: Book,
Movie: Movie,
User: User
    }