import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
export const createMovie: NonNullable<
  MutationResolvers["createMovie"]
> = async (_parent, _arg, _ctx) => {
  const { title, year, genre } = _arg;
  return client.movie.create({
    data: {
      title,
      year,
      genre,
    },
  });
};
