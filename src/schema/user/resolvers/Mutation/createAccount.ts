import { throws } from "assert";
import client from "../../../../libs/client";
import type { MutationResolvers } from "./../../../types.generated";
import bcrypt from "bcrypt";

export const createAccount: NonNullable<
  MutationResolvers["createAccount"]
> = async (_parent, _arg, _ctx) => {
  try {
    const { firstName, lastName, username, email, password } = _arg;

    //check if username or email are already on DB
    const existingUser = await client.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existingUser) {
      throw Error("This username/password is already taken.");
    }
    //hash password
    const uglyPassword = await bcrypt.hash(password, 10);
    //save.end return the user
    return client.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: uglyPassword,
      },
    });
  } catch (error) {
    return error;
  }
};
