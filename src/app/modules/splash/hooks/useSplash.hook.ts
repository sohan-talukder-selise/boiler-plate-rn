import useDelayHook from '../../../helper/hooks/useDelay.hook';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../routes/routeName.routes';

const useSplash = () => {
  const navigation = useNavigation<any>();
  useDelayHook(() => {
    initApp();
  });
  const initApp = async () => {
    await handleLocalData();
  };
  const handleLocalData = async () => {
    return navigation.replace(screens.home);
  };
  return {};
};
export default useSplash;
