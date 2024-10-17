import {StyleSheet} from 'react-native';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {customPadding} from '../../../assets/styles/global.style.asset';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: customTheme.colors.white,
    borderWidth: 1,
    borderColor: customTheme.colors.grey3,
    borderRadius: rs(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: rs(16),
  },
  inputWithIconContainer: {
    backgroundColor: customTheme.colors.white,
  },
  input: {
    ...typographies.bodyText1,
    color: customTheme.colors.black,
    width: '90%',
    ...customPadding(17, 16, 17, 16),
  },
  inputWithIcon: {
    borderWidth: 1,
    borderColor: customTheme.colors.grey3,
    ...typographies.bodyText1,
    color: customTheme.colors.black,
    width: '100%',
    borderRadius: 4,
    ...customPadding(17, 16, 17, 16),
    marginTop: 10,
  },
  label: {
    ...typographies.interNormal14,
  },
  labelWithIcon: {
    ...typographies.interSemiBold16,
    color: customTheme.colors.black,
  },
  animatedStyle: {
    top: 12,
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    marginHorizontal: rs(16),
    backgroundColor: customTheme.colors.white,
  },
});

export default styles;
