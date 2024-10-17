import React, {ReactElement} from 'react';
import IconButton from '../button/icon-button/IconButton.component';
import LeftArrowIcon from '../../assets/icons/LeftArrow.icon.asset';
import {useNavigation} from '@react-navigation/native';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
interface _props {
  style?: ViewStyle;
  rightComponent?: ReactElement;
  text?: string;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  iconFill?: string;
  leftControl?: () => void;
}
const Header: React.FC<_props> = ({
  style,
  text,
  rightComponent,
  iconStyle,
  textStyle,
  iconFill,
  leftControl,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.rowBetween, style]}>
      <View style={globalStyles.flexRow}>
        <IconButton
          style={iconStyle}
          icon={<LeftArrowIcon fill={iconFill} />}
          onPress={() =>
            leftControl
              ? leftControl
              : navigation.canGoBack()
              ? navigation.goBack()
              : undefined
          }
        />
        {text && (
          <Text
            style={[
              typographies.interSemiBold16,
              {color: customTheme.colors.black},
              textStyle,
            ]}>
            {text}
          </Text>
        )}
      </View>
      <View>{rightComponent}</View>
    </View>
  );
};

export default Header;
