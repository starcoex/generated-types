import { Movie } from "@prisma/client";
import client from "../../../../libs/client";
import { QueryResolvers } from "../../../../generated/graphql";

const queries: QueryResolvers = {
  Query: {
    movies: async () => client.movie.findMany(),
    movie: async (_, { id }: Movie) => {
      client.movie.findFirst({ where: { id } });
    },
  },
};

export default queries;
