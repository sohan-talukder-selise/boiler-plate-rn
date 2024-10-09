import {StyleSheet} from 'react-native';
import rs from '../../../assets/styles/responsiveSize.style.asset';

export const registrationStyles = StyleSheet.create({
  logo: {alignItems: 'center', marginTop: rs(60)},
  topText: {marginTop: rs(50), textAlign: 'center'},
  bottom: {
    position: 'absolute',
    width: '100%',
    marginHorizontal: rs(32),
    bottom: 40,
  },
  bottomText: {
    gap: rs(25),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: rs(60),
  },
});
