import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
export const followUser: NonNullable<MutationResolvers["followUser"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { tofollow } = _arg;
  const { loggedInUser } = _ctx;
  client.user.update({
    where: {
      id: loggedInUser.id,
    },
    data: {
      following: {
        connect: {
          username: tofollow,
        },
      },
    },
  });
  return {
    ok: true,
  };
};
