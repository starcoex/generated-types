import client from "../../../../libs/client";
import { getUser, protectResolver } from "../../../../utils/users";
import type { MutationResolvers } from "./../../../types.generated";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
const resolverFn = async (_parent, _arg, _ctx) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password: newPassword,
    bio,
    avatar,
  } = _arg;
  const { filename, createReadStream } = await avatar;
  const readStream = createReadStream();
  const writeStream = fs.createWriteStream(
    process.cwd() + "/uploads/" + filename
  );
  readStream.pipe(writeStream);
  const { loggedInUser, protectMiddlware } = _ctx;
  //   protectMiddlware(loggedInUser);
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
      bio,
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
export const editProfile: NonNullable<MutationResolvers["editProfile"]> =
  protectResolver(resolverFn);
