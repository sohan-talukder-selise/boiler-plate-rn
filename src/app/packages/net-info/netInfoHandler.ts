import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';

const netInfoEventListener = (callback: (params: any) => void) => {
  return NetInfo.addEventListener((state: any) => callback(state));
};
const hasInternetConnection = async () => {
  let flag = false;
  const {isConnected, isInternetReachable, type} = await NetInfo.fetch();
  if (isConnected && isInternetReachable && type !== NetInfoStateType.none) {
    flag = true;
  }
  return flag;
};
export {netInfoEventListener, hasInternetConnection};
