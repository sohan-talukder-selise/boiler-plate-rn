import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../assets/styles/global.style.asset';
interface _props {}
const EachCollection: React.FC<_props> = () => {
  return (
    <View style={[globalStyles.flexGrow1]}>
      <Text>EachCollection</Text>
    </View>
  );
};

export default EachCollection;
