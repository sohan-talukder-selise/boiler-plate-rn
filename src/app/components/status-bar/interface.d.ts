import {StatusBarStyle} from 'react-native';
import {colors} from './../../assets/styles/colors.style.asset';
interface _statusBarStyle {
  height: number;
  bgColor: string;
  extraHeight: number;
}
interface _statusBar {
  barStyle?: StatusBarStyle;
  showHeader?: boolean;
  bgColor?: colors;
  extraHeight?: number;
}
export type {_statusBarStyle, _statusBar};
