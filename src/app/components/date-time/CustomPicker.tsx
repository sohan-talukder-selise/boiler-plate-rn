import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {useColorScheme} from 'react-native';
import {_dateTime} from './interface';
import {customTheme} from '../../assets/styles/colors.style.asset';

const CustomPicker: React.FC<_dateTime> = ({
  value = new Date(),
  mode = 'date',
  onChange = () => {},
  minimumDate,
}) => {
  const theme = useColorScheme() || 'light';
  return (
    <RNDateTimePicker
      value={value}
      mode={mode}
      onChange={onChange}
      themeVariant={theme}
      accentColor={customTheme.colors.pink}
      minimumDate={minimumDate}
    />
  );
};

export default CustomPicker;
