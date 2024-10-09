import {ImageStyle, StyleProp} from 'react-native';

// interface _imagePreview {
//   src: string | object;
//   alt?: string;
//   containerStyle?: _viewStyles;
//   imageStyle?: _viewStyles;
//   isHide?: boolean;
// }
interface _imagePreview {
  styles?: StyleProp<ImageStyle>;
  source: {uri?: String; require?: number};
  borderRadius?: number;
  resizeMode?: String;
}

export type {_imagePreview};
