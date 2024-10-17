import React, {useRef} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';

interface _props {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  rightHandler?: () => void;
  placeholder?: string;
  onChangeText: (
    value: any,
    name?: any,
    validationRules?: boolean | any | undefined,
  ) => void;
  defaultValue?: any;
  name?: string | any | undefined;
  validationRules?: () => boolean | undefined | any;
  inputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  icon?: React.ReactElement;
}
const InputWithIcon: React.FC<_props> = ({
  rightHandler,
  leftIcon,
  rightIcon,
  placeholder = '',
  onChangeText,
  defaultValue = '',
  name,
  validationRules = undefined,
  inputProps = {},
  style = {},
  label,
  inputStyle,
  containerStyle,
  icon,
  labelStyle,
}) => {
  const containerRef = useRef<any>(null);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name, validationRules);
    } else {
      onChangeText(text, undefined, validationRules);
    }
  };
  return (
    <View style={[globalStyles.flexGrow1, containerStyle]}>
      {label && (
        <View style={[globalStyles.flexRow, {gap: rs(8), marginBottom: rs(8)}]}>
          <Text
            style={[
              typographies.interMedium14,
              {color: customTheme.colors.black},
              labelStyle,
            ]}>
            {label}
          </Text>
          {icon}
        </View>
      )}
      <View style={[styles.container, style]} ref={containerRef}>
        {leftIcon && <View>{leftIcon}</View>}
        <TextInput
          style={[styles.input, inputStyle]}
          numberOfLines={1}
          onChangeText={handleOnChange}
          placeholder={placeholder}
          placeholderTextColor={customTheme.colors.grey}
          defaultValue={defaultValue?.toString()}
          {...inputProps}
        />
        {rightIcon && (
          <TouchableOpacity activeOpacity={0.5} onPress={rightHandler}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: customTheme.colors.grey3,
    ...customPadding(0, 16, 0, 16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    ...typographies.searchInput,
    color: customTheme.colors.grey,
    flexGrow: 1,
    flex: 1,
    paddingVertical: rs(14),
  },
});
