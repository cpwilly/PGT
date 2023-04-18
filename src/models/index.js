// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Dorm, Account } = initSchema(schema);

export {
  Review,
  Dorm,
  Account
};