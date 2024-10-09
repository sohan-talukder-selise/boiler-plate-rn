import {FlatList, Text, View} from 'react-native';
import React from 'react';
import InputWithIcon from '../../components/text-input/InputWithIcon.core.component';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import EventStatusTab from './components/EventStatusTab.c';
import EachEvent from './components/EachEvent.c';
import Container from '../../layout/Container.layout';

const Events = () => {
  return (
    <Container bg={colors.lintPinkBg} statusBarBg={colors.lintPinkBg} ph={20}>
      <View style={[globalStyles.flexRow, {gap: rs(20)}]}>
        <Text style={[typographies.interSemiBold24, {color: colors.pink}]}>
          Events
        </Text>
        <InputWithIcon
          onChangeText={() => {}}
          placeholder="Search Here"
          style={globalStyles.flexShrink1}
        />
      </View>
      <EventStatusTab />
      <FlatList
        data={new Array(20).fill('')}
        keyboardDismissMode="on-drag"
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{gap: rs(12), ...customPadding(20, 0, 20)}}
        renderItem={() => <EachEvent />}
      />
    </Container>
  );
};

export default Events;
