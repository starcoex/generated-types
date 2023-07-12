import client from "../../../libs/client";
import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  totalFollowing: ({ id }) => {
    return client.user.count({
      where: {
        followers: { some: { id } },
      },
    });
  },

  totalFollowers: ({ id }) => {
    return client.user.count({
      where: {
        following: {
          some: { id },
        },
      },
    });
  },

  isMe: ({ id }, _args, _ctx) => {
    const { loggedInUser } = _ctx;
    if (!loggedInUser) {
      return false;
    }
    return (id = loggedInUser.id);
  },

  isFollowing: async ({ id }, _args, _ctx) => {
    const { loggedInUser } = _ctx;
    if (!loggedInUser) {
      return false;
    }
    // const ok = await client.user
    //   .findUnique({ where: { username: loggedInUser.username } })
    //   .following({
    //     where: { id },
    //   });
    const ok = await client.user.count({
      where: {
        following: {
          some: {
            id,
          },
        },
      },
    });
    // return ok.length !== 0;
    return Boolean(ok);
  },
};
