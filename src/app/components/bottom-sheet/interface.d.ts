import {ViewStyle} from 'react-native';

interface hook {
  ref: React.Ref;
}

interface _bottomSheet {
  Component?: React.FC<T>;
  extraProps?: Object<T>;
  ref: React.Ref;
  backDropHandler: () => void;
  style?: ViewStyle;
  topBar?: boolean;
}

interface _showBottomSheetProps {
  flag: boolean;
  component?: React.FC;
  componentProps?: Object<T>;
  bottomSheetProps?: Object<T>;
  onClose?: () => void;
  onOpen?: () => void;
  style?: ViewStyle;
  topBar?: boolean;
}

export type {hook, _showBottomSheetProps, _bottomSheet};
