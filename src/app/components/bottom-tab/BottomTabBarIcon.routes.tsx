import {Animated, Text, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {_bottomTabInterface} from './interface';
import bottomTabStyle from './styles.component';
import {typographies} from '../../assets/styles/typographies.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';

const BottomTabBarIcon: React.FC<
  Omit<_bottomTabInterface, 'Component' | 'route'> & {focused: boolean}
> = ({Icon, focused, name}) => {
  const colorAnimation = useRef(new Animated.Value(focused ? 1 : 0)).current;

  // Animate color change based on the focused prop
  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: focused ? 1 : 0,
      duration: 250,
      delay: 100,
      easing: Easing.out(Easing.cubic), // Smooth easing function
      useNativeDriver: false,
    }).start();
  }, [focused, colorAnimation]);

  // Interpolate the background color based on the animated value
  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [customTheme.colors.transparent, customTheme.colors.primary],
  });

  return (
    <Animated.View style={bottomTabStyle.iconContainer}>
      <Animated.View
        style={[
          {
            padding: rs(4.2),
            borderRadius: rs(500),
          },
          {backgroundColor},
        ]}>
        <Icon
          fill={focused ? customTheme.colors.black : customTheme.colors.grey}
        />
      </Animated.View>
      <Text
        style={[
          typographies.interSemiBold16,
          {
            color: focused
              ? customTheme.colors.primary
              : customTheme.colors.white,
            marginTop: rs(4),
          },
        ]}>
        {name}
      </Text>
    </Animated.View>
  );
};

export default BottomTabBarIcon;
