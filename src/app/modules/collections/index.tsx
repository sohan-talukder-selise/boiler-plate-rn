import {FlatList} from 'react-native';
import React from 'react';
import Container from '../../layout/Container.layout';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import EachCollection from './components/EachCollection.c';
import useCollections from './hooks/useCollections.hook';
import EmptyContent from '../../components/empty-content/EmptyContent.component';

const CollectionIndex = () => {
  const {list, isLoading} = useCollections();
  return (
    <Container>
      <FlatList
        data={list}
        keyboardDismissMode="on-drag"
        numColumns={2}
        columnWrapperStyle={{gap: rs(24)}}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={
          list?.length === 0
            ? globalStyles.emptyFlexBox
            : {gap: rs(16), ...customPadding(16, 16, 16, 16)}
        }
        renderItem={({item, index}) => (
          <EachCollection item={item} index={index} />
        )}
        ListEmptyComponent={
          <EmptyContent forLoading={isLoading} text={'No Date Found!'} />
        }
      />
    </Container>
  );
};

export default CollectionIndex;
