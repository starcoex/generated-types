/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { EditProfileResult } from './user/resolvers/EditProfileResult';
import    { File } from './user/resolvers/File';
import    { FollowUserResult } from './user/resolvers/FollowUserResult';
import    { LoginResult } from './user/resolvers/LoginResult';
import    { createAccount as Mutation_createAccount } from './user/resolvers/Mutation/createAccount';
import    { editProfile as Mutation_editProfile } from './user/resolvers/Mutation/editProfile';
import    { followUser as Mutation_followUser } from './user/resolvers/Mutation/followUser';
import    { login as Mutation_login } from './user/resolvers/Mutation/login';
import    { unfollowUser as Mutation_unfollowUser } from './user/resolvers/Mutation/unfollowUser';
import    { searchUsers as Query_searchUsers } from './user/resolvers/Query/searchUsers';
import    { seeFollowing as Query_seeFollowing } from './user/resolvers/Query/seeFollowing';
import    { seeFollwers as Query_seeFollwers } from './user/resolvers/Query/seeFollwers';
import    { seeProfile as Query_seeProfile } from './user/resolvers/Query/seeProfile';
import    { SearchUsersResult } from './user/resolvers/SearchUsersResult';
import    { SeeFollowersQuery } from './user/resolvers/SeeFollowersQuery';
import    { SeeFollowingQuery } from './user/resolvers/SeeFollowingQuery';
import    { SeeProfileResult } from './user/resolvers/SeeProfileResult';
import    { UnFollowUserResult } from './user/resolvers/UnFollowUserResult';
import    { User } from './user/resolvers/User';
import    { DateResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { searchUsers: Query_searchUsers,seeFollowing: Query_seeFollowing,seeFollwers: Query_seeFollwers,seeProfile: Query_seeProfile },
      Mutation: { createAccount: Mutation_createAccount,editProfile: Mutation_editProfile,followUser: Mutation_followUser,login: Mutation_login,unfollowUser: Mutation_unfollowUser },
      
      EditProfileResult: EditProfileResult,
File: File,
FollowUserResult: FollowUserResult,
LoginResult: LoginResult,
SearchUsersResult: SearchUsersResult,
SeeFollowersQuery: SeeFollowersQuery,
SeeFollowingQuery: SeeFollowingQuery,
SeeProfileResult: SeeProfileResult,
UnFollowUserResult: UnFollowUserResult,
User: User,
Date: DateResolver
    }