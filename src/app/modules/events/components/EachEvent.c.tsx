import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePreview from '../../../components/image-preview/Index.component';
import CalenderIcon from '../../../assets/icons/Calender.icon.asset';
import moment from 'moment-timezone';
import ClockIcon from '../../../assets/icons/Clock.svg';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../routes/routeName.routes';

const list: Array<string> = [
  'https://img.freepik.com/premium-photo/hispanic-pretty-woman-looking-arrogant-successful-positive-proud-pointing-self_1194-292720.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716768000&semt=ais_user',
  'https://img.freepik.com/free-photo/lovely-sexy-black-woman-stylish-hoodie-with-back-pack-posing-pink-background-playing-with-curly-hairs_273443-25.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
  'https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72597.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719187200&semt=ais_user',
  'https://img.freepik.com/free-photo/young-amazed-woman-talks-about-awesome-promo-deal-pointing-fingers-down-say-wow-look-impressed-demonstrates-advertisement-white-background_176420-53700.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=ais_user',
  'https://st4.depositphotos.com/5228995/23373/i/450/depositphotos_233735858-stock-photo-charming-young-brunette-in-white.jpg',
  'https://img.freepik.com/free-photo/young-amazed-woman-talks-about-awesome-promo-deal-pointing-fingers-down-say-wow-look-impressed-demonstrates-advertisement-white-background_176420-53700.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=ais_user',
  'https://st4.depositphotos.com/5228995/23373/i/450/depositphotos_233735858-stock-photo-charming-young-brunette-in-white.jpg',
  'https://img.freepik.com/free-photo/young-amazed-woman-talks-about-awesome-promo-deal-pointing-fingers-down-say-wow-look-impressed-demonstrates-advertisement-white-background_176420-53700.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=ais_user',
];
const EachEvent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screens.eventDetails as never)}
      style={[globalStyles.flexRow, styles.container]}>
      <View style={styles.width}>
        <ImagePreview
          source={{
            uri: 'https://e0.pxfuel.com/wallpapers/861/237/desktop-wallpaper-natural-beauty-of-kashmir-google-search-swat.jpg',
          }}
          styles={styles.mainImage}
        />
      </View>
      <View style={globalStyles.flexShrink1}>
        <Text
          numberOfLines={1}
          style={[
            typographies.interNormal14,
            {color: customTheme.colors.black, marginBottom: rs(12)},
          ]}>
          Beach running requires considerably more muscular effort from your
          feet and legs and produces more stress on your muscles and ligaments.
        </Text>
        <View
          style={[globalStyles.flexRow, {marginBottom: rs(20), gap: rs(20)}]}>
          <View style={[globalStyles.flexRow, {gap: rs(4)}]}>
            <CalenderIcon
              height={18}
              width={18}
              fill={customTheme.colors.grey4}
            />
            <Text
              style={[
                typographies.interNormal12,
                {color: customTheme.colors.grey4},
              ]}>
              {moment().format('MMMM DD')}
            </Text>
          </View>
          <View style={[globalStyles.flexRow, {gap: rs(4)}]}>
            <ClockIcon height={18} width={18} fill={customTheme.colors.grey4} />
            <Text
              style={[
                typographies.interNormal12,
                {color: customTheme.colors.grey4},
              ]}>
              {moment().format('MMMM DD')}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          {list.slice(0, 4).map((item, index) => (
            <View
              key={index}
              style={[
                styles.perImage,
                {
                  marginLeft: index === rs(0) ? rs(0) : rs(-13),
                  borderWidth: index === rs(0) ? rs(0) : rs(1.24),
                  zIndex: index,
                },
              ]}>
              <ImagePreview source={{uri: item}} styles={styles.image} />
            </View>
          ))}
          {list.slice(4).length > 0 && (
            <View style={styles.lastView}>
              <Text
                style={[
                  typographies.interSemiBold14,
                  {
                    color: customTheme.colors.white,
                  },
                ]}>
                +{list.slice(4).length}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EachEvent;

const styles = StyleSheet.create({
  imageContainer: {flexDirection: 'row', marginTop: 7, alignItems: 'center'},
  perImage: {
    width: rs(46),
    height: rs(46),
    borderRadius: 500,
    overflow: 'hidden',
    position: 'relative',
    borderColor: customTheme.colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  lastView: {
    width: rs(36),
    height: rs(36),
    borderRadius: 500,
    overflow: 'hidden',
    position: 'relative',
    borderColor: customTheme.colors.white,
    backgroundColor: customTheme.colors.pink,
    borderWidth: 2,
    zIndex: 666,
    marginLeft: -14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    ...customPadding(8, 19, 8, 8),
    borderRadius: 8,
    backgroundColor: customTheme.colors.white,
    gap: 8,
  },
  width: {width: '40%'},
  mainImage: {width: '100%', height: rs(132), borderRadius: 12},
});
