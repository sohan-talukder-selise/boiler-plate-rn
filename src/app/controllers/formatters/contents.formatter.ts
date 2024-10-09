export interface contentItemInterface {
  uid: string;
  thumbnailUrl: any;
  fileUrl: string;
  media_type: 'VIDEO' | 'IMAGE' | 'THUMBNAIL';
  status: string;
  rating: number;
  creatorEmail: string;
  creatorName: string;
  description: string;
}
export interface contentInterface {
  uid: string;
  campaignName: string;
  creatorEmail: string;
  creatorName: string;
  status: string;
  mediaType: 'VIDEO' | 'IMAGE' | 'THUMBNAIL';
  customValues: any;
  description: string;
  rating: number;
  fileUrl: string;
  thumbnailUrl: any;
}

const contentFormatter = (item: contentItemInterface) => {
  const {
    uid,
    campaign_name,
    creator_email,
    status,
    content,
    media_type,
    custom_values,
    description,
    rating,
    fileUrl,
    thumbnailUrl,
    storage_type,
    ...rest
  } = item || {};
  return {
    uid,
    campaignName: campaign_name,
    creatorEmail: creator_email,
    status,
    content,
    mediaType: media_type,
    customValues: custom_values,
    description,
    rating,
    fileUrl,
    thumbnailUrl,
    storageType: storage_type,
    ...rest,
  };
};

export {contentFormatter};
