import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

export function upperDirectiveTransformer(schema: GraphQLSchema, directiveName: string) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig: any) => {
      const upperDirective = getDirective(schema, fieldConfig, directiveName)?.[0];

      if (upperDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (source: any, args: any, context: any, info: any) {
          const result = await resolve(source, args, context, info);
          console.log(directiveName);
          if (typeof result === 'string') {

            return result.toUpperCase();
          }
          return result;
        };
        return fieldConfig;
      }
    },
  });
}