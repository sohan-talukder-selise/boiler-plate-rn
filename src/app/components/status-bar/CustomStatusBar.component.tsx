import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import statusBarStyle from './style';
import {_statusBar} from './interface';
import {statusBar} from '../../assets/styles/properties.asset';

const CustomStatusBar: React.FC<_statusBar> = ({
  barStyle = statusBar.lightContent,
  showHeader = true,
  bgColor = customTheme.colors.transparent,
  extraHeight = 0,
}) => {
  const {top} = useSafeAreaInsets();
  const statusBarProps: any = {barStyle: barStyle, animated: true};
  const style = statusBarStyle({
    height: top,
    bgColor,
    extraHeight,
  });
  if (Platform.OS === 'android') {
    statusBarProps.translucent = true;
    statusBarProps.backgroundColor = bgColor;
  }
  if (!showHeader) {
    if (Platform.OS === 'android') {
      statusBarProps.backgroundColor = customTheme.colors.transparent;
    }
    return <StatusBar {...statusBarProps} />;
  }
  return (
    <View style={style.container}>
      <StatusBar {...statusBarProps} />
    </View>
  );
};
export default CustomStatusBar;
