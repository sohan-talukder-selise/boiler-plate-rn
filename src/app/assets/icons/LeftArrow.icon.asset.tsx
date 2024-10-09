import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {colors} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const LeftArrowIcon: React.FC<_iconProps> = ({
  width = rs(24),
  height = rs(24),
  fill = colors.orange,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.207 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L9.914 12l5.293 5.293a1 1 0 010 1.414z"
      fill={fill}
    />
  </Svg>
);
export default LeftArrowIcon;
