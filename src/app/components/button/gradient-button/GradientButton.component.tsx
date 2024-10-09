import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {_gradientButton} from '../types/interface';
import {colors} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton: React.FC<_gradientButton> = ({
  text = '',
  borderRadius = 16,
  gradient = [colors.orange2, colors.orange],
  style = {},
  textColor,
  textStyle = {},
  onPress,
  icon,
  isLoading,
  disabled,
}) => {
  const styles = buttonStyles(borderRadius, icon);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || isLoading}>
      <LinearGradient
        colors={gradient}
        style={[styles.container, style]}
        locations={[0, 1]}>
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const buttonStyles = (borderRadius: number, icon: any) =>
  StyleSheet.create({
    container: {
      borderRadius,
      flexShrink: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: rs(15),
      gap: icon ? rs(10) : 0,
      height: rs(56),
    },
  });
