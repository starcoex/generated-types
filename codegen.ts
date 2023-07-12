import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import { DateTimeResolver, GraphQLDateTime } from "graphql-scalars";

import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import Upload from "graphql-upload/Upload.mjs";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "src/schema": defineConfig(),
  },
  // generates: {
  //   "types.generated.ts": {
  //     plugins: ["typescript"],
  //   },
  //   "resolvers.generated.ts": {
  //     plugins: ["add", "typescript-resolvers"],
  //     config: {
  //       content: 'import * as types from "./types.generated"',
  //       namespacedImportName: "types",
  //     },
  //   },
  // },
  config: {
    scalars: {
      ID: {
        input: "string",
        output: "string | number",
      },
      Date: DateTimeResolver,
      Upload: GraphQLUpload,
    },
  },
};
export default config;
