import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {customTheme} from '../styles/colors.style.asset';
import {_iconProps} from '../../types/icons.types';

const HomeIcon: React.FC<_iconProps> = ({
  width = rs(24),
  height = rs(24),
  fill = customTheme.colors.grey,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_643_22319)">
      <Path
        d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5zM12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_643_22319">
        <Path fill={fill} d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeIcon;
