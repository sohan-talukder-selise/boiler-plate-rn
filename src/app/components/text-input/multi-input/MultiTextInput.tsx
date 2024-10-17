/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, ReactElement, useLayoutEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Animated,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import styles from '../floating/styles';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';

interface _floatingLabelInputProps
  extends Omit<TextInputProps, 'onChangeText'> {
  label?: string | number;
  onChangeText?: (text: string, name: string) => void;
  rightIcon?: ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  numberOfLines?: number;
  height?: number;
  name?: string;
  onChangeValue?: (text: string, value: string) => void;
}

const MultiTextInput = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  rightIcon,
  numberOfLines = 5,
  height = rs(157),
  name = '',
  placeholder,
  onChangeValue,
  ...props
}: _floatingLabelInputProps) => {
  const [val, setValue] = useState(props.value ? props.value : '');

  const moveText = useRef(new Animated.Value(props.value ? 1 : 0)).current;

  const onChangeText = (text: string) => {
    setValue(text);
    onChangeValue ? onChangeValue(text, name) : () => {};
  };
  const onFocusHandler = () => {
    moveTextTop();
    props?.onFocus ? props?.onFocus() : () => {};
  };

  const onBlurHandler = () => {
    if (!val) {
      moveTextBottom();
    }
    props?.onBlur ? props?.onBlur() : () => {};
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  useLayoutEffect(() => {
    if (props.defaultValue) {
      setValue(props.defaultValue);
    }
  }, [props.defaultValue]);
  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });
  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };
  return (
    <View
      style={[
        styles.inputContainer,
        {paddingRight: rightIcon ? rs(17) : 0},
        containerStyle,
      ]}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Pressable onPress={onFocusHandler}>
          <Text
            style={{
              ...styles.label,
              ...labelStyle,
            }}>
            {label}
          </Text>
        </Pressable>
      </Animated.View>
      <TextInput
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        style={[
          styles.input,
          {width: rightIcon ? '90%' : '100%', height},
          inputStyle,
        ]}
        value={val}
        selectionColor={customTheme.colors.black}
        textAlignVertical="center"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        {...props}
        onChangeText={text => onChangeText(text)}
      />
      {rightIcon}
    </View>
  );
};
export default MultiTextInput;
