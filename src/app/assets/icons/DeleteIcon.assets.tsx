import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {colors} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const DeleteIcon: React.FC<_iconProps> = ({
  width = rs(32),
  height = rs(32),
  fill = colors.grey,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 7h16M6 10l1.701 9.358A2 2 0 009.67 21h4.662a2 2 0 001.968-1.642L18 10M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DeleteIcon;
