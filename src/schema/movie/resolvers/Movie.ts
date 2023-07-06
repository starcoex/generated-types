import { Resolvers } from "../../../generated/graphql";
import mutations from "./Mutation/mutations";
import queries from "./Query/queries";

const resolvers: Resolvers = { Query: queries, Mutation: mutations };

export default resolvers;
