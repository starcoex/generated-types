import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
export const updateMovie: NonNullable<
  MutationResolvers["updateMovie"]
> = async (_parent, _arg, _ctx) => {
  const { id, year } = _arg;
  return client.movie.update({
    where: { id },
    data: {
      year,
    },
  });
};
