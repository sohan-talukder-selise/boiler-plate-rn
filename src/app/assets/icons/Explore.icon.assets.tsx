import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {customTheme} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const ExploreIcon: React.FC<_iconProps> = ({
  width = rs(24),
  height = rs(24),
  fill = customTheme.colors.grey,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_643_22324)">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_643_22324">
        <Path fill={fill} d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ExploreIcon;
