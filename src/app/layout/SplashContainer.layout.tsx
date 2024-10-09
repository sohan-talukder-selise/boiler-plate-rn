import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import CustomStatusBar from '../components/status-bar/CustomStatusBar.component';
import {colors} from '../assets/styles/colors.style.asset';
import {globalStyles} from '../assets/styles/global.style.asset';
import {statusBar} from '../assets/styles/properties.asset';
interface _props {
  children: any;
  containerStyle?: ViewStyle;
  barStyle?: statusBar;
}
const SplashContainer: React.FC<_props> = ({
  children,
  containerStyle,
  barStyle,
}) => {
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={colors.transparent}
        showHeader={false}
        barStyle={barStyle ?? 'dark-content'}
      />
      <View style={[styles(colors.white).container, containerStyle]}>
        {children}
      </View>
    </View>
  );
};
export default SplashContainer;

const styles = (bgColor: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
    },
  });
