/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {collectionStates} from '../../../redux/allSelector.state';
import {getCollectionsList} from '../../../redux/features/collections/collections.slice.m';
import {useQuery, useRealm} from '@realm/react';
import modelsName from '../../../controllers/models/modelsName';
import {CollectionsModel} from '../../../controllers/models/Collections.model';

const useCollections = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const realm = useRealm();
  const {isLoading, refreshing, hasMore, list, firstRender} =
    useSelector(collectionStates);
  useLayoutEffect(() => {
    if (!firstRender) {
      dispatch(getCollectionsList());
    }
  }, []);
  useEffect(() => {
    list.length > 0 &&
      realm.write(() => {
        realm.create(modelsName.Collections, {
          _id: new Date().toString(),
          name: 'Sohan Talukder',
          description: 'new', // Optional field
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    setTimeout(() => {
      console.log(realm.objects(modelsName.Collections));
    }, 5000);
  }, [list]);
  return {
    navigation,
    isLoading,
    refreshing,
    hasMore,
    list,
  };
};

export default useCollections;
