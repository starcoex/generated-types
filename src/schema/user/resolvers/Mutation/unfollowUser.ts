import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
export const unfollowUser: NonNullable<
  MutationResolvers["unfollowUser"]
> = async (_parent, _arg, _ctx) => {
  const { tofollow } = _arg;
  const { loggedInUser } = _ctx;
  const ok = client.user.findUnique({
    where: {
      username: tofollow,
    },
  });
  if (!ok) {
    return {
      ok: false,
      error: "Can't unfollow user.",
    };
  }
  await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      following: {
        disconnect: {
          username: tofollow,
        },
      },
    },
  });
  return {
    ok: true,
  };
};
