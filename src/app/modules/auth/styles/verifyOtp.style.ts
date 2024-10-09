import {StyleSheet} from 'react-native';
import getHexaOpacityColorCode from '../../../helper/utilities/getHexaOpacityColor.utility';
import {colors} from '../../../assets/styles/colors.style.asset';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../assets/ts/core.data';

export const verifyOtpStyles = StyleSheet.create({
  overLey: {
    position: 'absolute',
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: getHexaOpacityColorCode(colors.black, 0.6),
    zIndex: 999,
  },
});
