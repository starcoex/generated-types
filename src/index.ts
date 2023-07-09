import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { getUser, protectResolver } from "./utils/users";

interface MyContext {
  authScopy?: String;
  token: String;
}
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => {
    // console.log(req.headers);
    // return {
    //   token: req.headers.token,
    // };
    return {
      loggedInUser: await getUser(req.headers.token),
      protectMiddlware: protectResolver,
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀 Server listening at: ${url}`);
