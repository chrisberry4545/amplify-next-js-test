// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Thing } = initSchema(schema);

export {
  Thing
};