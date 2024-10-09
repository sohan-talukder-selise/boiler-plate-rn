import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {colors} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const ArrowDownIcon: React.FC<_iconProps> = ({
  width = rs(24),
  height = rs(24),
  fill = colors.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.07819 10.1558C6.54445 9.64665 7.33515 9.61193 7.84425 10.0782L12.0007 13.8849L16.1556 10.0783C16.6646 9.61198 17.4553 9.64658 17.9217 10.1556C18.388 10.6646 18.3534 11.4553 17.8444 11.9217L12.8452 16.5017C12.3675 16.9394 11.6344 16.9395 11.1566 16.5018L6.15576 11.9218C5.64665 11.4556 5.61193 10.6649 6.07819 10.1558Z"
      fill={fill}
    />
  </Svg>
);
export default ArrowDownIcon;
