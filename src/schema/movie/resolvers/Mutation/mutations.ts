import { Movie, MutationResolvers } from "../../../../generated/graphql";
import client from "../../../../libs/client";

const mutations: MutationResolvers = {
  Mutation: {
    createMovie: async (_, { title, year, genre }: Movie) => {
      return client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      });
    },
    deleteMovie: async (_, { id }: Movie) => {
      return client.movie.delete({ where: { id } });
    },
    updateMovie: async (_, { id, year }: Movie) => {
      return client.movie.update({
        where: { id },
        data: {
          year,
        },
      });
    },
  },
};

export default mutations;
