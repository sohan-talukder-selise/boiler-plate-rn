/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useRef,
  ReactElement,
  RefObject,
  useEffect,
} from 'react';
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
import styles from './styles';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';

export interface _floatingLabelInputProps extends TextInputProps {
  label?: string | number;
  onChangeValue?: (text: string, value: string) => void;
  rightIcon?: ReactElement;
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  inputRef?: RefObject<TextInput>;
  name?: string;
}

const FloatingTextInput = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  rightIcon,
  inputRef,
  onChangeValue,
  name,
  ...props
}: _floatingLabelInputProps) => {
  const [val, setValue] = useState('');
  const moveText = useRef(new Animated.Value(val ? 1 : 0)).current;
  const onChangeText = (text: string) => {
    setValue(text);
    onChangeValue ? onChangeValue(text, name || '') : () => {};
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
  useEffect(() => {
    if (props.defaultValue) {
      setValue(props.defaultValue);
      moveTextTop();
    } else {
      moveTextBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.defaultValue]);
  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -22],
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
        style={[styles.input, {width: rightIcon ? '90%' : '100%'}, inputStyle]}
        value={val}
        ref={inputRef}
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
export default FloatingTextInput;
