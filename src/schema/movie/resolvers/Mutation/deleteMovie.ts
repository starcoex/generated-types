import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteMovie: NonNullable<
  MutationResolvers["deleteMovie"]
> = async (_parent, _arg, _ctx) => {
  const { id } = _arg;
  return client.movie.delete({ where: { id } });
};
