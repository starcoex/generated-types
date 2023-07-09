import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { getUser, protectResolver } from "./utils/users";

const PORT = process.env.PORT;

interface MyContext {
  token?: string;
}

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  "/",
  cors(),
  bodyParser.json(),
  graphqlUploadExpress(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      // console.log(req.headers);
      // return {
      //   token: req.headers.token,
      // };
      return {
        loggedInUser: await getUser(req.headers.token),
        // protectMiddlware: protectResolver,
      };
    },
  })
);
await new Promise<void>((resolve) =>
  httpServer.listen({ port: PORT }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/`);

// const { url } = await startStandaloneServer(server, {
//   context: async ({ req, res }) => {
//     // console.log(req.headers);
//     // return {
//     //   token: req.headers.token,
//     // };
//     return {
//       loggedInUser: await getUser(req.headers.token),
//       // protectMiddlware: protectResolver,
//     };
//   },
//   listen: { port: 4000 },
// });

// console.log(`🚀 Server listening at: ${url}`);
