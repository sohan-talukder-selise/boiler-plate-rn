import {Realm} from '@realm/react';
import CollectionsModel from '../../controllers/models/Collections.model';
const realmConfig: Realm.Configuration = {
  // add your schema
  schema: [CollectionsModel.schema, CollectionsModel.ImageSchema],
};

export default realmConfig;
