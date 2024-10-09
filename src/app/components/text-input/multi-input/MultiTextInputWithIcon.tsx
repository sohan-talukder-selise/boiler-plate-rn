import React, {useState, ReactElement, useLayoutEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from '../floating/styles';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {globalStyles} from '../../../assets/styles/global.style.asset';

interface _floatingLabelInputProps
  extends Omit<TextInputProps, 'onChangeText'> {
  label?: string | number;
  onChangeText?: (text: string, name: string) => void;
  icon?: ReactElement;
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

const MultiTextInputWithIcon = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  icon,
  numberOfLines = 5,
  height = rs(150),
  name = '',
  placeholder,
  onChangeValue,
  ...props
}: _floatingLabelInputProps) => {
  const [val, setValue] = useState(props.value ? props.value : '');

  const onChangeText = (text: string) => {
    setValue(text);
    onChangeValue ? onChangeValue(text, name) : () => {};
  };
  const onFocusHandler = () => {
    props?.onFocus ? props?.onFocus() : () => {};
  };

  const onBlurHandler = () => {
    props?.onBlur ? props?.onBlur() : () => {};
  };

  useLayoutEffect(() => {
    if (props.defaultValue) {
      setValue(props.defaultValue);
    }
  }, [props.defaultValue]);

  return (
    <View style={[styles.inputWithIconContainer, containerStyle]}>
      <View style={[globalStyles.flexRow, {gap: rs(8)}]}>
        <Text style={[styles.labelWithIcon, labelStyle]}>{label}</Text>
        {icon}
      </View>
      <TextInput
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        style={[styles.inputWithIcon, {height}, inputStyle]}
        value={val}
        selectionColor={colors.black}
        textAlignVertical="center"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        {...props}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};
export default MultiTextInputWithIcon;
