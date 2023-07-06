import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const movie: NonNullable<QueryResolvers["movie"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { id } = _arg;
  return client.movie.findFirst({ where: { id } });
};
