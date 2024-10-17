import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../provider/app/Container.layout';
import Header from '../../components/header/Header.component';
import IconButton from '../../components/button/icon-button/IconButton.component';
import {loginStyles} from './styles/login.style';
import GradientButton from '../../components/button/gradient-button/GradientButton.component';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {screens} from '../../routes/routeName.routes';
import ClickableText from '../../components/clickable-text/ClickableText.component';
import {useNavigation} from '@react-navigation/native';
import GoogleIcon from '../../assets/icons/Google.icon.asset';
import FacebookIcon from '../../assets/icons/Facebook.icon.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import FloatingTextInput from '../../components/text-input/floating/FloatingTextInput';
import PasswordTextInput from '../../components/text-input/floating/PasswordTextInput';
import useRegistrationEmail from './hooks/useRegistrationEmail.hook';

const RegistrationEmail = () => {
  const navigation = useNavigation();
  const {handleSubmit, isLoading, onChangeValue, values} =
    useRegistrationEmail();
  return (
    <Container ph={32}>
      <Header />
      <View style={{gap: rs(6)}}>
        <Text style={[typographies.interSemiBold20, {marginTop: rs(60)}]}>
          Continue with Email
        </Text>
        <Text
          style={[
            typographies.interNormal16,
            {color: customTheme.colors.grey},
          ]}>
          Already a member?{' '}
          <ClickableText
            text="Login"
            onPress={() => navigation.navigate(screens.login as never)}
            style={{
              ...typographies.interSemiBold16,
              color: customTheme.colors.pink,
            }}
          />
        </Text>
        <Text
          style={[
            typographies.interNormal12,
            {color: customTheme.colors.grey},
          ]}>
          Please enter your valid email. We will send you a 4-digit code to
          verify your account.
        </Text>
      </View>
      <View style={{gap: rs(12), marginTop: rs(50)}}>
        <FloatingTextInput
          label={'Enter Email'}
          inputMode="email"
          autoComplete="email"
          onChangeValue={onChangeValue}
          name="email"
          autoCapitalize="none"
          defaultValue={values.current.email}
        />
        <PasswordTextInput
          label={'Password'}
          inputMode="text"
          onChangeValue={onChangeValue}
          name="password"
          autoCapitalize="none"
          defaultValue={values.current.password}
        />
        <PasswordTextInput
          label={'Confirm Password'}
          inputMode="text"
          onChangeValue={onChangeValue}
          name="confirm_password"
          defaultValue={values.current.confirm_password}
          autoCapitalize="none"
        />
      </View>
      <GradientButton
        onPress={handleSubmit}
        text="Create Account"
        isLoading={isLoading}
        style={{marginTop: rs(24)}}
      />
      <View style={loginStyles.continueContainer}>
        <View style={loginStyles.border} />
        <Text style={typographies.interNormal12}>or sign up with</Text>
        <View style={loginStyles.border} />
      </View>
      <View style={[globalStyles.flexRow, loginStyles.bottom]}>
        <IconButton
          style={{height: rs(68), width: rs(68)}}
          icon={<FacebookIcon />}
        />
        <IconButton
          style={{height: rs(68), width: rs(68)}}
          icon={<GoogleIcon />}
        />
      </View>
    </Container>
  );
};

export default RegistrationEmail;
