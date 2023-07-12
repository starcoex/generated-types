import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const seeProfile: NonNullable<QueryResolvers["seeProfile"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.seeProfile resolver logic here */
  const {} = _parent;
  const { username } = _arg;
  const { loggedInUser } = _ctx;
  return await client.user.findUnique({
    where: {
      username,
    },
    include: {
      followers: true,
      following: true,
    },
  });

  // return user;
  // return user;
  // if (user) {
  //   return {
  //     ok: true,
  //   };
  // } else {
  //   return {
  //     ok: false,
  //     error: "Could not Username",
  //   };
  // }
};
