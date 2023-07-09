import client from "../../../../libs/client";
import { User } from "../User";
import type { MutationResolvers } from "./../../../types.generated";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login: NonNullable<MutationResolvers["login"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { username, password } = _arg;
  //find use with args.username
  const checkedUser = await client.user.findFirst({
    where: {
      username,
    },
  });
  if (!checkedUser) {
    return {
      ok: false,
      error: "User not found.",
    };
  }
  //check password with args.password
  const checkedPassword = await bcrypt.compareSync(
    password,
    checkedUser.password
  );
  if (!checkedPassword) {
    return {
      ok: false,
      error: "Incorrect password.",
    };
  }
  //issue a token and send it to the user
  const token = await jwt.sign({ id: checkedUser.id }, process.env.TOKEN_KEY);
  return {
    ok: true,
    token,
  };
};
