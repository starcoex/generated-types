import client from "../../../../libs/client";
import { getUser, protectResolver } from "../../../../utils/users";
import type { MutationResolvers } from "./../../../types.generated";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
const resolverFn = async (_parent, _arg, _ctx) => {
  //   console.log(process.cwd() + "/src");
  const {
    firstName,
    lastName,
    username,
    email,
    password: newPassword,
    bio,
    avatar,
  } = _arg;
  const { loggedInUser } = _ctx;
  let avataUrl = null;
  if (avatar) {
    const { filename, createReadStream } = await avatar;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    console.log(readStream);
    const writeStream = fs.createWriteStream(
      process.cwd() + "/src/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    avataUrl = `http://localhost:4000/static/${newFilename}`;
  }

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
      ...(avataUrl && { avatar: avataUrl }),
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
