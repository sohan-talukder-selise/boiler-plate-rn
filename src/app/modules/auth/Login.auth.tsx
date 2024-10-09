import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../provider/app/Container.layout';
import ClickableText from '../../components/clickable-text/ClickableText.component';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import FloatingTextInput from '../../components/text-input/floating/FloatingTextInput';
import PasswordTextInput from '../../components/text-input/floating/PasswordTextInput';
import Checkbox from '../../components/check-box/CheckBox.component';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import GradientButton from '../../components/button/gradient-button/GradientButton.component';
import IconButton from '../../components/button/icon-button/IconButton.component';
import GoogleIcon from '../../assets/icons/Google.icon.asset';
import AppleIcon from '../../assets/icons/Apple.icon.asset';
import {loginStyles as styles} from './styles/login.style';
import {screens} from '../../routes/routeName.routes';
import useLogin from './hooks/useLogin.hook';

const LoginIndex = () => {
  const {
    emailInputRef,
    handleLogin,
    isLoading,
    navigation,
    onChangeValue,
    passwordInputRef,
    defaultValues,
    rememberMe,
  } = useLogin();
  return (
    <Container ph={32} containerStyle={styles.container}>
      <View>
        <View style={{gap: rs(6)}}>
          <Text style={[typographies.interSemiBold20, {marginTop: rs(60)}]}>
            Sign in to continue
          </Text>
          <Text style={[typographies.interNormal16, {color: colors.grey}]}>
            Not a member?{' '}
            <ClickableText
              text="Sign up"
              onPress={() => navigation.navigate(screens.registration as never)}
              style={{...typographies.interSemiBold16, color: colors.pink}}
            />
          </Text>
          <Text style={[typographies.interNormal12, {color: colors.grey}]}>
            Please enter your email and password to log in.
          </Text>
        </View>
        <View style={{gap: rs(12), marginTop: rs(50)}}>
          <FloatingTextInput
            inputRef={emailInputRef}
            onChangeValue={onChangeValue}
            label={'Email'}
            defaultValue={defaultValues.email}
            name="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <PasswordTextInput
            label={'Password'}
            inputRef={passwordInputRef}
            name="password"
            inputMode="text"
            defaultValue={defaultValues.password}
            onChangeValue={onChangeValue}
            autoCapitalize="none"
          />
          <View style={[globalStyles.rowBetween, {marginTop: rs(12)}]}>
            <View style={[globalStyles.flexRow, {gap: rs(8)}]}>
              <Checkbox
                fill={true}
                size={18}
                defaultValue={defaultValues.check}
                onChange={(value: boolean) => (rememberMe.current = value)}
              />
              <Text style={[typographies.interNormal12, {color: colors.black}]}>
                Remember me
              </Text>
            </View>
            <ClickableText text="Forgot Password?" />
          </View>
        </View>
        <GradientButton
          text="Login"
          isLoading={isLoading}
          onPress={handleLogin}
          style={{marginTop: rs(60)}}
        />
      </View>
      <View style={{...customPadding(0, 0, 60)}}>
        <View style={styles.continueContainer}>
          <View style={styles.border} />
          <Text style={typographies.interNormal12}>or continue with</Text>
          <View style={styles.border} />
        </View>
        <View style={[globalStyles.flexRow, styles.bottom]}>
          <IconButton
            style={{height: rs(68), width: rs(68)}}
            icon={<GoogleIcon />}
            // onPress={googleSignIn}
          />
          <IconButton
            style={{height: rs(68), width: rs(68)}}
            icon={<AppleIcon />}
          />
        </View>
      </View>
    </Container>
  );
};

export default LoginIndex;
