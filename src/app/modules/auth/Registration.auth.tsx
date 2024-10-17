import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../provider/app/Container.layout';
import Header from '../../components/header/Header.component';
import Logo from '../../assets/icons/Logo.icon.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import GradientButton from '../../components/button/gradient-button/GradientButton.component';
import SolidButton from '../../components/button/solid-button/SolidButton.component';
import {customTheme} from '../../assets/styles/colors.style.asset';
import IconButton from '../../components/button/icon-button/IconButton.component';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {loginStyles} from './styles/login.style';
import GoogleIcon from '../../assets/icons/Google.icon.asset';
import ClickableText from '../../components/clickable-text/ClickableText.component';
import {registrationStyles as styles} from './styles/registration.style';
import FacebookIcon from '../../assets/icons/Facebook.icon.asset';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../routes/routeName.routes';

const Registration = () => {
  const navigation = useNavigation();
  return (
    <Container ph={32}>
      <Header />
      <View style={styles.logo}>
        <Logo height={65} width={59} />
      </View>
      <Text style={[typographies.interSemiBold20, styles.topText]}>
        Sign up to continue
      </Text>
      <View style={{marginTop: rs(24), gap: rs(24)}}>
        <GradientButton
          text="Continue With Email"
          onPress={() =>
            navigation.navigate(screens.registrationEmail as never)
          }
        />
        <SolidButton
          text="Continue With Phone"
          bgColor={customTheme.colors.black}
        />
      </View>
      <View style={styles.bottom}>
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
        <View style={[globalStyles.flexRow, styles.bottomText]}>
          <ClickableText
            style={{
              ...typographies.interNormal14,
              color: customTheme.colors.orange,
            }}
            text="Terms of use"
          />
          <ClickableText
            style={{
              ...typographies.interNormal14,
              color: customTheme.colors.orange,
            }}
            text="Privacy Policy"
          />
        </View>
      </View>
    </Container>
  );
};

export default Registration;
