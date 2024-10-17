import React from 'react';
import {StyleSheet, View} from 'react-native';
import {customTheme} from '../assets/styles/colors.style.asset';
import {globalStyles} from '../assets/styles/global.style.asset';
import {statusBar} from '../assets/styles/properties.asset';
import {_container} from './interface';
import CustomStatusBar from '../components/status-bar/CustomStatusBar.component';
import CustomActivityBar from '../components/activity-bar/ActivityBar.component';

const Container: React.FC<_container> = ({
  children,
  containerStyle = {},
  bg = customTheme.colors.light1,
  showActivity = false,
  showHeader = true,
  statusBarBg = customTheme.colors.light1,
  activityBgColor = customTheme.colors.light1,
  statusBarStyle = statusBar.darkContent,
  ph = 0,
}) => {
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={statusBarBg}
        showHeader={showHeader}
        barStyle={statusBarStyle}
      />
      <View style={[styles(bg, ph).container, containerStyle]}>{children}</View>
      {showActivity && <CustomActivityBar bgColor={activityBgColor} />}
    </View>
  );
};
export default Container;

const styles = (bgColor: any, ph: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
      paddingHorizontal: ph,
    },
  });
