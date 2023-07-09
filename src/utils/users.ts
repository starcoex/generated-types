import jwt from "jsonwebtoken";
import client from "../libs/client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id }: any = await jwt.verify(token, process.env.TOKEN_KEY);
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const protectResolver = (ourResolver) => (root, args, context, info) => {
  if (!context.loggedInUser) {
    return {
      ok: false,
      error: "Please log in to perform this action.",
    };
  }
  return ourResolver(root, args, context, info);
};
