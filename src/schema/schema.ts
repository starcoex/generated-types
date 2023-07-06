import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";

import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";

const __filenaem = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filenaem);
// const loadedTypeDefs = await loadFiles(`${__dirname}/**/*.typeDefs.js`, {
//   ignoreIndex: true,
//   requireMethod: async (path) => {
//     return await import(url.pathToFileURL(path));
//   },
// });

const typeDefsArray = await loadFiles(`${__dirname}/**/**/*.graphql`, {
  ignoreIndex: true,
});
const resolversArray = await loadFiles(`${__dirname}/**/**/*.ts`, {
  ignoreIndex: true,
});
// const typeDefsArray = loadFilesSync(path.join(__dirname, "./**/**/*.graphql"), {
//   ignoreIndex: true,
// });
// const resolversArray = loadFilesSync(path.join(__dirname, "./**/**/*.ts"), {
//   ignoreIndex: true,
// });
const typeDefs = await loadFiles(`${__dirname}/**/**/*.graphql`);

// const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);
const shcema = makeExecutableSchema({ typeDefs, resolvers });

export default resolversArray;
