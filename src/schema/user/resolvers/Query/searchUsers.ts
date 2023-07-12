import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const searchUsers: NonNullable<QueryResolvers["searchUsers"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { keyword } = _arg;
  const foundUsers = await client.user.findMany({
    where: {
      username: {
        startsWith: keyword.toLowerCase(),
      },
    },
  });
  return foundUsers;
};
