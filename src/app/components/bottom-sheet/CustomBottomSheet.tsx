import React, {FC, forwardRef, memo} from 'react';
import {Animated, Pressable, View} from 'react-native';
import useBottomSheetHook from './useBottomSheet.hook';
import {_bottomSheet} from './interface';
import bottomSheetStyles from './style.component';
import CustomStatusBar from '../status-bar/CustomStatusBar.component';

const CustomBottomSheet: FC<_bottomSheet> = forwardRef(
  ({Component, backDropHandler, extraProps, style, topBar}, ref) => {
    const {opacityRef, positionRef, handleHideComponent} = useBottomSheetHook({
      ref,
      backDropHandler,
      extraProps,
    });
    return (
      <View style={bottomSheetStyles.container}>
        <CustomStatusBar showHeader={false} />
        <Animated.View
          style={[bottomSheetStyles.backdrop, {opacity: opacityRef}]}>
          <Pressable
            onPress={handleHideComponent}
            style={bottomSheetStyles.backdropHandler}
          />
          <Animated.View
            style={[
              bottomSheetStyles.viewContainer,
              {transform: [{translateY: positionRef}]},
              style,
            ]}>
            {topBar && <View style={bottomSheetStyles.topBar} />}
            {Component && <Component {...extraProps.componentProps} />}
          </Animated.View>
        </Animated.View>
      </View>
    );
  },
);

export default memo(CustomBottomSheet);
