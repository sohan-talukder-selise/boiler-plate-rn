import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';

interface _eachItemProps {
  onChange: (params: listItem) => void;
  select?: listItem;
  item: listItem;
}
const EachItem: React.FC<_eachItemProps> = ({onChange, select, item}) => {
  const onPress = () => {
    onChange(item);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            item.value === select?.value ? colors.pink : colors.lintPinkBg,
        },
      ]}>
      <Text
        style={[
          typographies.interNormal14,
          styles.textCenter,
          {
            color: item.value === select?.value ? colors.white : colors.black,
          },
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
interface listItem {
  name: string;
  value: string;
}
const EventStatusTab = () => {
  const list: Array<listItem> = [
    {name: 'Upcoming', value: 'UPCOMING'},
    {name: 'Joined', value: 'JOINED'},
    {name: 'Created', value: 'CREATED'},
  ];
  const [isSelect, setIsSelect] = useState(list[0]);
  const handleChange = (value: listItem) => {
    setIsSelect(value);
  };

  return (
    <View style={styles.container}>
      {list.map((item: listItem, index: number) => (
        <EachItem
          key={index}
          item={item}
          onChange={handleChange}
          select={isSelect}
        />
      ))}
    </View>
  );
};

export default EventStatusTab;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexRow,
    gap: 13,
    ...customPadding(4, 4, 4, 4),
    borderRadius: 4,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  itemContainer: {
    ...customPadding(6, 14, 6, 14),
    borderRadius: 4,
    flexGrow: 1 / 3,
  },
  textCenter: {
    textAlign: 'center',
  },
});
