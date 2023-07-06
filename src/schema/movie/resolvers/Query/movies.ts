import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const movies: NonNullable<QueryResolvers["movies"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return client.movie.findMany();
};
