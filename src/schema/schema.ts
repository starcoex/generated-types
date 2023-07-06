import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";

import path from "path";
const __filenaem = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filenaem);

const typeDefsArray = loadFilesSync(path.join(__dirname, "./**/**/*.graphql"));
// const resolversArray = loadFilesSync(path.join(__dirname, "./**/**/*.ts"));
const resolversArray = await loadFiles(`${__dirname}/**/**/*.ts`);
const resolvers = mergeResolvers(resolversArray);
// module.exports = mergeResolvers(resolversArray);

export default resolvers;
