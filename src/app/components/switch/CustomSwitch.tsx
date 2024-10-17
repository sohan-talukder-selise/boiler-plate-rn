/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {nativeDriver} from '../../assets/styles/properties.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
interface _customSwitch {
  value?: boolean;
  onPress?: (params1: boolean, params2: string) => void;
  activeColor?: string;
  name?: string;
  bgColor?: string;
}
const CustomSwitch: React.FC<_customSwitch> = ({
  value = false,
  activeColor = customTheme.colors.orange,
  onPress = () => {},
  name,
  bgColor = customTheme.colors.grey2,
}) => {
  const valueRef = useRef(false);
  const [show, setShow] = useState<boolean>(value);
  const translateRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    value ? handleSwitch(true) : handleSwitch(false);
    setShow(value);
  }, [value]);

  const handleSwitch = (flag = false) => {
    Animated.timing(translateRef, {
      toValue: flag ? 21 : 0,
      duration: 300,
      delay: 100,
      useNativeDriver: nativeDriver(),
    }).start(() => {
      valueRef.current = flag;
    });
  };

  const backgroundColor = translateRef.interpolate({
    inputRange: [0, 21],
    outputRange: [bgColor, activeColor],
    extrapolate: 'clamp',
  });
  const handlePress = () => {
    setShow(!show);
    onPress && onPress(!show, name ? name?.trim() : '');
    !show ? handleSwitch(true) : handleSwitch(false);
  };
  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.containerStyle, {backgroundColor}]}>
        <Animated.View
          style={[
            styles.circleStyle,
            {backgroundColor: customTheme.colors.white},
            {
              transform: [
                {
                  translateX: translateRef,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  circleStyle: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  containerStyle: {
    width: 50,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 36.5,
  },
  shadowValue: {
    shadowColor: customTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
