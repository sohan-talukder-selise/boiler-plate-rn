import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {_buttonProps} from '../types/interface';
import {colors} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';

const SolidButton: React.FC<_buttonProps> = ({
  text = '',
  borderRadius = 16,
  bgColor,
  style = {},
  textColor,
  textStyle = {},
  onPress,
  icon,
  isLoading,
  disabled,
}) => {
  const styles = buttonStyles(borderRadius, bgColor || colors.orange, icon);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[styles.container, style]}>
      {icon}
      {isLoading ? (
        <ActivityIndicator color={colors.pureWhite} />
      ) : (
        <Text
          style={[
            typographies.interSemiBold16,
            {color: textColor || colors.white},
            textStyle,
          ]}
          numberOfLines={1}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default SolidButton;

const buttonStyles = (borderRadius: number, bgColor: string, icon: any) =>
  StyleSheet.create({
    container: {
      borderRadius,
      backgroundColor: bgColor,
      flexShrink: 1,
      paddingVertical: rs(15),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: icon ? rs(10) : 0,
    },
  });
