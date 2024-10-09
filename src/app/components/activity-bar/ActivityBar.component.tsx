import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/styles/colors.style.asset';
import {config} from '../../../config';
import {activityHeight} from '../../helper/utilities/activityHeight.utility';
interface _activityBar {
  bgColor?: string;
}
const CustomActivityBar: React.FC<_activityBar> = ({
  bgColor = colors.transparent,
}) => {
  const style = activityBarStyle(config.activityHeight, bgColor);
  return <View style={style.container} />;
};
export default CustomActivityBar;

const activityBarStyle = (height: any, bgColor: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      height: Platform.OS === 'ios' ? height : activityHeight(),
    },
  });
