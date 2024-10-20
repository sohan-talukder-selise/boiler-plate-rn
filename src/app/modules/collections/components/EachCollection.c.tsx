import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../assets/styles/global.style.asset';
import {_collectionItem} from '../types/collection.types';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import ImagePreview from '../../../components/image-preview/Index.component';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {SCREEN_WIDTH} from '../../../assets/ts/core.data';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import calculateTime from '../../../helper/utilities/calculateTime.utility';
interface _props {
  item: _collectionItem;
  index: number;
}
const EachCollection: React.FC<_props> = ({item}) => {
  const {images, title, date, totalItems} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        globalStyles.flexGrow1,
        {width: SCREEN_WIDTH / 2 - (rs(40) || 0)},
      ]}>
      <View style={styles.container}>
        <ImagePreview source={{uri: images[0]?.uri}} />
      </View>
      <View style={{marginTop: rs(16)}}>
        <Text numberOfLines={2} style={[typographies.interSemiBold16]}>
          {title}
        </Text>
        <View style={[globalStyles.flexRow, {gap: rs(12)}]}>
          <Text style={[typographies.interNormal12]}>
            {totalItems} {Number(totalItems) > 1 ? 'items' : 'item'}
          </Text>
          <View
            style={{
              height: rs(1.5),
              width: rs(1.5),
              backgroundColor: customTheme.colors.grey,
            }}
          />
          <Text style={[typographies.interNormal12]}>
            {calculateTime(date)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EachCollection;

const styles = StyleSheet.create({
  container: {height: rs(156), borderRadius: rs(4), overflow: 'hidden'},
});
