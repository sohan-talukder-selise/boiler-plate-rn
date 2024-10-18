import {Realm} from '@realm/react';
import {
  CollectionsModel,
  ImageModel,
} from '../../controllers/models/Collections.model';
const realmConfig: Realm.Configuration = {
  // add your schema
  schema: [CollectionsModel, ImageModel],
};

export default realmConfig;
