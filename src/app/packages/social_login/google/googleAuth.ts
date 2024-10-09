import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {googleConfig} from './googleConfig';

const googleSignIn = async () => {
  try {
    await googleConfig();
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    console.log(error);
    // UtilityHelper.showAlertWithOneAction({
    //   title: Messages.invalidLogin,
    //   body: error.message,
    // });
  }
};

export {googleSignIn};
