import AsyncStorage from '@react-native-async-storage/async-storage';
import errorHandler from '../../controllers/api/root-api-handler/errorHandler.root-api';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (e) {
    errorHandler({
      from: 'store data into local storage',
      key: key,
      value: value,
      error: e,
    });
  }
};
const storeObjectData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    storeData(key, jsonValue);
  } catch (e) {
    errorHandler({
      from: 'store data into local storage',
      key: key,
      value: value,
      error: e,
    });
  }
};
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    errorHandler({
      from: 'store data into local storage',
      key: key,
      error: e,
    });
    return null;
  }
};
const getObjectData = async (key: string) => {
  try {
    let jsonValue = await getData(key);
    if (typeof jsonValue === 'string' && jsonValue === '[object Object]') {
      return null;
    }
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    errorHandler({
      from: 'store data into local storage',
      key: key,
      error: e,
    });
    return null;
  }
};
const removeFields = async (items: any) => {
  try {
    await AsyncStorage.multiRemove(items);
  } catch (e) {}
};

export {storeData, storeObjectData, getData, getObjectData, removeFields};
