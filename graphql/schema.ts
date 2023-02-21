import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "./type";
import resolvers from "./resolvers";
import { upperDirectiveTransformer } from "./directives";

const TypeSchema: GraphQLSchema = makeExecutableSchema({ 
  typeDefs,
  resolvers: [resolvers] 
});

export default upperDirectiveTransformer(TypeSchema, 'upper');