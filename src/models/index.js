// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Dorm } = initSchema(schema);

export {
  Review,
  Dorm
};