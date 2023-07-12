import "dotenv/config";
import morgan from "morgan";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Router } from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

import { readFileSync } from "fs";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { getUser, protectResolver } from "./utils/users";

const PORT = process.env.PORT;
interface MyContext {
  token?: string;
}
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const app = express();
const httpServer = http.createServer(app);
app.use(morgan("tiny"));

const server = new ApolloServer<MyContext>({
  typeDefs: typeDefs,
  resolvers: resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    // ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});
await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
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
app.use("/static", express.static(__dirname + "uploads"));

app.get("/users", (req, res) => {
  res.send("Users");
});
console.log(`🚀 Server ready at http://localhost:4000/`);

function ApolloServerPluginLandingPageLocalDefault(arg0: {
  embed: boolean;
}): import("@apollo/server").ApolloServerPlugin<MyContext> {
  throw new Error("Function not implemented.");
}
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
