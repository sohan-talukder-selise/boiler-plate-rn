import {StyleSheet} from 'react-native';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';

export const loginStyles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  continueContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 7,
    marginTop: rs(50),
  },
  border: {
    flexGrow: 1,
    height: 0.5,
    backgroundColor: customTheme.colors.grey3,
  },
  bottom: {
    gap: rs(20),
    marginTop: rs(24),
    alignSelf: 'center',
  },
});
