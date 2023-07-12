import * as types from "./types.generated"
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => types.Maybe<TTypes> | Promise<types.Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<types.Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<types.Scalars['Date']['output']>;
  EditProfileResult: ResolverTypeWrapper<types.EditProfileResult>;
  FollowUserResult: ResolverTypeWrapper<types.FollowUserResult>;
  Int: ResolverTypeWrapper<types.Scalars['Int']['output']>;
  LoginResult: ResolverTypeWrapper<types.LoginResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SeeProfileResult: ResolverTypeWrapper<types.SeeProfileResult>;
  String: ResolverTypeWrapper<types.Scalars['String']['output']>;
  Upload: ResolverTypeWrapper<types.Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<types.User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: types.Scalars['Boolean']['output'];
  Date: types.Scalars['Date']['output'];
  EditProfileResult: types.EditProfileResult;
  FollowUserResult: types.FollowUserResult;
  Int: types.Scalars['Int']['output'];
  LoginResult: types.LoginResult;
  Mutation: {};
  Query: {};
  SeeProfileResult: types.SeeProfileResult;
  String: types.Scalars['String']['output'];
  Upload: types.Scalars['Upload']['output'];
  User: types.User;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EditProfileResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProfileResult'] = ResolversParentTypes['EditProfileResult']> = {
  error?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowUserResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowUserResult'] = ResolversParentTypes['FollowUserResult']> = {
  error?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  error?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccount?: Resolver<types.Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<types.MutationCreateAccountArgs, 'email' | 'firstName' | 'password'>>;
  editProfile?: Resolver<types.Maybe<ResolversTypes['EditProfileResult']>, ParentType, ContextType, Partial<types.MutationEditProfileArgs>>;
  followUser?: Resolver<types.Maybe<ResolversTypes['FollowUserResult']>, ParentType, ContextType, Partial<types.MutationFollowUserArgs>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<types.MutationLoginArgs, 'password' | 'username'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  seeProfile?: Resolver<types.Maybe<ResolversTypes['SeeProfileResult']>, ParentType, ContextType, Partial<types.QuerySeeProfileArgs>>;
};

export type SeeProfileResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeeProfileResult'] = ResolversParentTypes['SeeProfileResult']> = {
  error?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<types.Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<types.Maybe<ResolversTypes['Upload']>, ParentType, ContextType>;
  bio?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<types.Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<types.Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  EditProfileResult?: EditProfileResultResolvers<ContextType>;
  FollowUserResult?: FollowUserResultResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SeeProfileResult?: SeeProfileResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

