/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {collectionStates} from '../../../redux/allSelector.state';
import {getCollectionsList} from '../../../redux/features/collections/collections.slice.m';
import {useQuery, useRealm} from '@realm/react';
import {CollectionsModel} from '../../../controllers/models/Collections.model';

const useCollections = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const realm = useRealm();
  const data = useQuery(CollectionsModel);
  const {isLoading, refreshing, hasMore, list, firstRender} =
    useSelector(collectionStates);
  useLayoutEffect(() => {
    if (!firstRender && data?.length !== 0) {
      dispatch(getCollectionsList());
    }
  }, []);
  useEffect(() => {
    data.length > 0 &&
      // need to update
      realm.write(() => {
        for (let i of list) {
          realm.create(CollectionsModel, i);
        }
      });
  }, [list]);
  return {
    navigation,
    isLoading,
    refreshing,
    hasMore,
    list: data || list,
  };
};

export default useCollections;
