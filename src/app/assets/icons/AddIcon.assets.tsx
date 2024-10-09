import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {colors} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const AddIcon: React.FC<_iconProps> = ({
  width = rs(32),
  height = rs(32),
  fill = colors.grey,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 12h-3m0 0H9m3 0V9m0 3v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default AddIcon;
