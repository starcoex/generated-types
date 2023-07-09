import client from "../../../../libs/client";
import { getUser, protectResolver } from "../../../../utils/users";
import type { MutationResolvers } from "./../../../types.generated";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const editProfile: NonNullable<
  MutationResolvers["editProfile"]
> = async (_parent, _arg, _ctx) => {
  const { firstName, lastName, username, email, password: newPassword } = _arg;
  const { loggedInUser, protectMiddlware } = _ctx;
  console.log(_ctx);
  protectMiddlware(loggedInUser);
  //   const { id }: any = await jwt.verify(token, process.env.TOKEN_KEY);
  let checkedPassword = null;
  if (newPassword) {
    checkedPassword = await bcrypt.hashSync(checkedPassword, 10);
  }
  const updateUser = await client.user.update({
    where: {
      id: loggedInUser.id,
    },
    data: {
      firstName,
      lastName,
      username,
      email,
      //       password: newPassword,
      //       ...(checkedPassword && { password: checkedPassword }),
      password: checkedPassword ? checkedPassword : newPassword,
    },
  });
  if (updateUser.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Coould not update profile.",
    };
  }
};
