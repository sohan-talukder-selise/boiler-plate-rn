import {ReactElement} from 'react';
import {TextStyle, StyleProp, ViewStyle} from 'react-native';
import {_iconProps} from '../../../types/icons.types';

interface _buttonProps {
  text: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactElement<_iconProps>;
  isLoading?: boolean;
  disabled?: boolean;
}
interface _gradientButton {
  text: string;
  gradient?: string[];
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactElement<_iconProps>;
  isLoading?: boolean;
  disabled?: boolean;
}
interface _iconButton {
  icon: ReactElement<_iconProps>;
  onPress?: () => void;
  bgColor?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export type {_buttonProps, _gradientButton, _iconButton};
