import {Pressable} from 'react-native';
import React, {useState} from 'react';
import FloatingTextInput, {_floatingLabelInputProps} from './FloatingTextInput';
import EyeOffIcon from '../../../assets/icons/EyeOff.icon.asset';
import EyeOnIcon from '../../../assets/icons/EyeOn.icon.asset';

const PasswordTextInput: React.FC<_floatingLabelInputProps> = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  onChangeValue,
  inputRef,
  name,
  ...props
}) => {
  const [show, setShow] = useState(false);
  return (
    <FloatingTextInput
      secureTextEntry={!show}
      label={label}
      containerStyle={containerStyle}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
      {...props}
      inputRef={inputRef}
      onChangeValue={onChangeValue}
      name={name}
      rightIcon={
        show ? (
          <Pressable onPress={() => setShow(!show)}>
            <EyeOffIcon />
          </Pressable>
        ) : (
          <Pressable onPress={() => setShow(!show)}>
            <EyeOnIcon />
          </Pressable>
        )
      }
    />
  );
};

export default PasswordTextInput;
