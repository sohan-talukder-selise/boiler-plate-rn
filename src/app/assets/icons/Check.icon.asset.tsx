import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {customTheme} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const CheckIcon: React.FC<_iconProps> = ({
  width = 24,
  height = 24,
  fill = customTheme.colors.pink,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.737 6.324a1 1 0 01-.061 1.413l-10.91 10a1 1 0 01-1.35 0l-4.092-3.75a1 1 0 011.352-1.474l3.415 3.13 10.233-9.38a1 1 0 011.413.061z"
      fill={fill}
      fillOpacity={1}
    />
  </Svg>
);
export default CheckIcon;
