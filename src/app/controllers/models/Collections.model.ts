import {Realm} from '@realm/react';
import modelsName from './modelsName';

class CollectionsModel extends Realm.Object<CollectionsModel> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;

  // Define the Image schema
  static ImageSchema: Realm.ObjectSchema = {
    name: modelsName.Image,
    properties: {
      _id: 'objectId',
      uri: 'string',
    },
  };

  // Define the Collections schema
  static CollectionsSchema: Realm.ObjectSchema = {
    // The name of the schema
    name: modelsName.Collections,
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      date: 'date',
      totalItems: 'string',
      images: {
        type: 'list',
        objectType: 'Image', // Use the name of the schema, not a direct reference
      },
    },
  };

  // Assign the schema for the model
  static schema: Realm.ObjectSchema = CollectionsModel.CollectionsSchema;
}

export default CollectionsModel;
