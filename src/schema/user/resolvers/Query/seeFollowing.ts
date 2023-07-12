import client from "../../../../libs/client";
import { User } from "../User";
import type { QueryResolvers } from "./../../../types.generated";
export const seeFollowing: NonNullable<QueryResolvers["seeFollowing"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { username, lastid } = _arg;
  const ok = client.user.findUnique({
    where: { username },
    select: {
      id: true,
    },
  });
  if (!ok) {
    return {
      ok: false,
      error: "User not found",
    };
  }
  const following = client.user
    .findUnique({
      where: {
        username,
      },
    })
    .following({
      take: 5,
      skip: lastid ? 1 : 0,
      ...(lastid && { cursor: { id: lastid } }),
    });
  //   return {
  //     ok: true,
  //     following,
  //   };
};
