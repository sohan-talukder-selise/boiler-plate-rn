import {StyleSheet} from 'react-native';
import {customPadding} from '../../../assets/styles/global.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';

export const styles = StyleSheet.create({
  container: {
    ...customPadding(20),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rs(-15),
  },
});
