import {StyleSheet} from 'react-native';
import {customPadding} from '../../../assets/styles/global.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
export const onboardingStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '58%',
    ...customPadding(0, 20, 0, 20),
  },
  logoContainer: {
    height: rs(89),
    width: rs(87),
    backgroundColor: customTheme.colors.light1,
    borderWidth: 1.55,
    borderColor: customTheme.colors.light2,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: rs(60),
  },
  middleText: {textAlign: 'center', marginTop: rs(18)},
  bottomText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
  },
});
