import {Realm, createRealmContext} from '@realm/react';
import modelsName from './modelsName';

class CollectionsModel extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: modelsName.Collections, // Register the schema name correctly
    primaryKey: '_id',
    properties: {
      _id: 'string',
      name: 'string',
      description: 'string?', // Optional field
      createdAt: 'date',
      updatedAt: 'date',
      // images: {
      //   type: 'list',
      //   objectType: 'string', // Reference Image schema by its name
      // },
    },
  };
}

// Image schema definition
const ImageSchema: Realm.ObjectSchema = {
  name: 'Image',
  properties: {
    _id: 'objectId',
    uri: 'string',
  },
};
export const RealmContext = createRealmContext({
  schema: [CollectionsModel],
});
export {CollectionsModel, ImageSchema};
