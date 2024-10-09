import {
  getData as getDataHelper,
  getObjectData,
  removeFields,
  storeData,
  storeObjectData,
} from './asyncStorage.package';
import {
  IS_LOGGED_IN,
  IS_STORE_GCM_TOKEN,
  LOGIN_CREDENTIALS,
  USER_TOKEN,
} from './variables';

class getLocalClass {
  async isLoggedIn() {
    const flag = await getDataHelper(IS_LOGGED_IN);
    if (flag) {
      return flag === 'true' ? true : false;
    }
    return false;
  }
  async getApiToken() {
    const token = await getDataHelper(USER_TOKEN);
    return token;
  }
  async userCredential() {
    const creds = await getObjectData(LOGIN_CREDENTIALS);
    return creds;
  }
  async gcmFlag() {
    const flag = await getDataHelper(IS_STORE_GCM_TOKEN);
    if (flag) {
      return flag === 'true' ? true : false;
    }
    return false;
  }
}
class storeLocalClass {
  loggedInFlag(value: boolean) {
    storeData(IS_LOGGED_IN, value);
  }
  apiToken(value: string) {
    storeData(USER_TOKEN, value);
  }
  userCredential(value: any) {
    storeObjectData(LOGIN_CREDENTIALS, value);
  }
}
class removeLocalStorage {
  async removeCacheForLogout() {
    await removeFields([IS_LOGGED_IN, USER_TOKEN]);
  }
  async removeCache(field: any) {
    await removeFields([field]);
  }
}
const getLocalData = new getLocalClass();
const storeLocalData = new storeLocalClass();
const removeLocalData = new removeLocalStorage();

export {getLocalData, storeLocalData, removeLocalData};
