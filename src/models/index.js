// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Thing } = initSchema(schema);

export {
  Post,
  Thing
};