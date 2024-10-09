import {ActivityIndicator, Text, View, ViewStyle} from 'react-native';
import {colors} from '../../assets/styles/colors.style.asset';
import React from 'react';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';

const EmptyContent: React.FC<{
  text?: string;
  style?: ViewStyle;
  forLoading?: boolean;
  loadingColor?: string;
}> = ({
  text = '',
  style = {},
  forLoading = false,
  loadingColor = colors.orange,
}) => {
  return (
    <View style={[globalStyles.centerView, style]}>
      {forLoading ? (
        <ActivityIndicator size={'large'} color={loadingColor} />
      ) : (
        <Text style={typographies.interNormal14}>{text}</Text>
      )}
    </View>
  );
};

export default EmptyContent;
