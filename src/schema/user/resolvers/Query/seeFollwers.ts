import client from "../../../../libs/client";
import type { QueryResolvers } from "./../../../types.generated";
export const seeFollwers: NonNullable<QueryResolvers["seeFollwers"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { username, page } = _arg;
  const ok = client.user.findUnique({
    where: { username },
    select: { id: true },
  });
  if (!ok) {
    return {
      ok: false,
      error: "User not found",
    };
  }
  const aFollwers = await client.user
    .findUnique({ where: { username } })
    .followers({
      take: 5,
      skip: (page - 1) * 5,
    });
  const bFollwers = await client.user.findMany({
    where: {
      following: {
        some: {
          username,
        },
      },
    },
  });
  const totalFollowers = await client.user.count({
    where: { following: { some: { username } } },
  });
  return {
    ok: true,
    followers: aFollwers,
    totalPages: Math.ceil(totalFollowers / 5),
  };
};
