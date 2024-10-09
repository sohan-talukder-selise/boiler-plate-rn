import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {_iconButton} from '../types/interface';

const IconButton: React.FC<_iconButton> = ({
  icon,
  onPress,
  bgColor = colors.white,
  borderColor = colors.grey3,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: bgColor, borderColor},
        style,
      ]}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: rs(52),
    width: rs(52),
    borderRadius: rs(15),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
