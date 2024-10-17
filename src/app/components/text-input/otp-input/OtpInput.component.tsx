/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useRef} from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import {customPadding} from '../../../assets/styles/global.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import isEmpty from '../../../helper/utilities/isEmpty.utility';

interface _otpInputProps {
  length?: number;
  callback?: (params: string) => void;
  style?: ViewStyle;
}
const OTPInput: React.FC<_otpInputProps> = ({length = 6, callback, style}) => {
  const inputRefs = useMemo(
    () =>
      Array(length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );
  const values = useRef({});
  const handleFillUp = () => {
    let fillUp = false,
      number = '';
    for (let i = 0; i < length; i++) {
      if (isEmpty((values as any)[i])) {
        break;
      } else {
        number += (values as any)[i];
      }
      if (i === length - 1) {
        fillUp = true;
      }
    }
    if (fillUp) {
      callback && callback(number);
    }
  };
  const handleOnFocus = async (index: number) => {
    (inputRefs as any)[index].current.setNativeProps({
      style: {...styles.focus},
    });
  };
  const handleOnBlur = (index: number) => {
    (inputRefs as any)[index].current.setNativeProps({
      style: {...styles.input},
    });
  };
  const renderFields = () => {
    const view: any[] = [];
    inputRefs.map((_, index) => {
      return view.push(
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          inputMode={'numeric'}
          keyboardType="number-pad"
          placeholder="0"
          autoComplete="one-time-code"
          placeholderTextColor={customTheme.colors.light2}
          ref={(inputRefs as any)[index]}
          selectionColor={customTheme.colors.orange}
          selectTextOnFocus
          onFocus={() => handleOnFocus(index)}
          // onBlur={() => handleOnBlur(index)}
          textAlignVertical="center"
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              if (index - 1 >= 0) {
                (values as any)[index - 1] = '';
                const input = (inputRefs as any)[index - 1].current;
                if (input) {
                  input.focus();
                  handleOnBlur(index);
                }
              }
            } else {
              (inputRefs as any)[index].current = nativeEvent.key;
              (values as any)[index] = nativeEvent.key;
              if ((inputRefs as any)[index + 1]) {
                (inputRefs as any)[index + 1].current.focus();
              } else {
                if (index + 1 === length) {
                  handleFillUp();
                }
              }
            }
          }}
          value={(inputRefs as any)[index].current}
        />,
      );
    });
    return view;
  };

  if (inputRefs.length < length) {
    return null;
  }

  return <View style={[styles.container, style]}>{renderFields()}</View>;
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: rs(12),
  },
  input: {
    borderRadius: rs(15),
    ...typographies.interSemiBold34,
    backgroundColor: customTheme.colors.white,
    ...customPadding(7, 10, 7, 9),
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: rs(60),
    width: rs(45),
    borderColor: customTheme.colors.light2,
    gap: 9,
  },
  focus: {
    borderColor: customTheme.colors.pink,
    backgroundColor: customTheme.colors.pink,
  },
});
