import React from 'react';
import Svg, {Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {customTheme} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const CollectionIcon: React.FC<_iconProps> = ({
  width = rs(24),
  height = rs(24),
  fill = customTheme.colors.grey,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9.725 14L12 12.625 14.275 14l-.6-2.6 2-1.725-2.625-.225L12 7l-1.05 2.45-2.625.225 2 1.725-.6 2.6zM5 21V5c0-.55.196-1.02.588-1.413A1.926 1.926 0 017 3h10c.55 0 1.02.196 1.413.587C18.803 3.98 19 4.45 19 5v16l-7-3-7 3zm2-3.05l5-2.15 5 2.15V5H7v12.95z"
      fill={fill}
    />
  </Svg>
);
export default CollectionIcon;
