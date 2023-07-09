import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const seeProfile: NonNullable<QueryResolvers["seeProfile"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.seeProfile resolver logic here */
  const { username } = _arg;
  const user = await client.user.findUnique({
    where: {
      username,
    },
  });
  // return user;
  if (user) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Could not Username",
    };
  }
};
