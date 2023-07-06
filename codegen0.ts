import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:4000",
  schema: "src/**/*.graphql",
  // documents: "src/**/**/**/**/*.{ts,tsx}",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  config: {
    useIndexSignature: true,
  },
};

export default config;
