type _collectionItem = {
  _id: string;
  title: string;
  date: Date;
  totalItems: string;
  images: _Image[];
};

type _Image = {
  _id: string;
  uri: string;
};

export type {_collectionItem, _Image};
