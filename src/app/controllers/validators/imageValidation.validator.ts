import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';

const imageValidation = async (params: any) => {
  const supportedFormat = ['jpg', 'jpeg', 'png'];
  const res = Array.isArray(params) ? params[0] : params;
  let ext = res.mime?.split('/')[1];
  const isSupportedFormat = supportedFormat.indexOf(ext) > -1;
  function getFilenameFromURI(uri: string) {
    const pathArray = uri.split('/');
    return pathArray[pathArray.length - 1];
  }
  if (res.size / 1000000 <= 2 && isSupportedFormat) {
    const image = {
      ...res,
      filename: getFilenameFromURI(res.path),
      name: getFilenameFromURI(res.path),
      type: res?.mime,
      size: res.size,
      uri:
        Platform.OS === 'android' ? res.path : res.path.replace('file://', ''),
    };
    return image;
  } else {
    !isSupportedFormat
      ? Toast.show({
          type: 'error',
          text2: "Profile image allow extension 'jpg', 'jpeg', 'png'",
        })
      : Toast.show({
          type: 'error',
          text2: 'Profile image size must be less than or equal to 2 MB',
        });
  }
  return '';
};
export default imageValidation;
