import moment from 'moment-timezone';
import {BSON, Realm} from 'realm';
class ImageModel extends Realm.Object<ImageModel> {
  _id: string = new BSON.ObjectID().toString();
  uri: string = '';
}
class CollectionsModel extends Realm.Object<CollectionsModel> {
  _id: string = new BSON.ObjectID().toString();
  title: string = '';
  date: string = moment().format('DD-MM-YYYY');
  totalItems: string = '0';
  images: Realm.List<ImageModel> = [
    {_id: new BSON.ObjectID().toString(), uri: ''},
  ];
}

export {CollectionsModel, ImageModel};
