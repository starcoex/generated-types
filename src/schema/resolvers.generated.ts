/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { EditProfileResult } from "./user/resolvers/EditProfileResult";
import { LoginResult } from "./user/resolvers/LoginResult";
import { createAccount as Mutation_createAccount } from "./user/resolvers/Mutation/createAccount";
import { editProfile as Mutation_editProfile } from "./user/resolvers/Mutation/editProfile";
import { login as Mutation_login } from "./user/resolvers/Mutation/login";
import { seeProfile as Query_seeProfile } from "./user/resolvers/Query/seeProfile";
import { SeeProfileResult } from "./user/resolvers/SeeProfileResult";
// import    { Upload } from './base/resolvers/Upload';
import { User } from "./user/resolvers/User";
export const resolvers: Resolvers = {
  Query: { seeProfile: Query_seeProfile },
  Mutation: {
    createAccount: Mutation_createAccount,
    editProfile: Mutation_editProfile,
    login: Mutation_login,
  },

  EditProfileResult: EditProfileResult,
  LoginResult: LoginResult,
  SeeProfileResult: SeeProfileResult,
  //   Upload: Upload,
  User: User,
};
