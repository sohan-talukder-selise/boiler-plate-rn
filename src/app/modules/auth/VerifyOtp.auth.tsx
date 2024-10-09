/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../provider/app/Container.layout';
import Header from '../../components/header/Header.component';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
import ClickableText from '../../components/clickable-text/ClickableText.component';
import OTPInput from '../../components/text-input/otp-input/OtpInput.component';
import EmptyContent from '../../components/empty-content/EmptyContent.component';
import getHexaOpacityColorCode from '../../helper/utilities/getHexaOpacityColor.utility';
import useVerifyOtp from './hooks/useVerfiyOtp.hook';
import {statusBar} from '../../assets/styles/properties.asset';
import {verifyOtpStyles as styles} from './styles/verifyOtp.style';
interface _props {
  route: {
    params: {
      email: string;
    };
  };
}
const VerifyOtp: React.FC<_props> = ({
  route: {
    params: {email},
  },
}) => {
  const {isLoading, handleOTP, resend, resendOtp} = useVerifyOtp(email);
  return (
    <Container
      ph={32}
      statusBarStyle={
        isLoading ? statusBar.lightContent : statusBar.darkContent
      }
      activityBgColor={
        isLoading ? getHexaOpacityColorCode(colors.black, 0.6) : colors.white
      }
      statusBarBg={
        isLoading ? getHexaOpacityColorCode(colors.black, 0.6) : colors.white
      }>
      {isLoading && (
        <View style={styles.overLey}>
          <EmptyContent forLoading={isLoading} />
        </View>
      )}
      <Header />
      <View style={{gap: rs(6)}}>
        <Text style={[typographies.interSemiBold20, {marginTop: rs(60)}]}>
          Please verify your email or phone number.
        </Text>
        <Text style={[typographies.interNormal12, {color: colors.grey}]}>
          We’ve sent an OTP to your phone number, verify it to continue.
        </Text>
        <Text style={{opacity: resend ? 1 : 0}}>
          <Text style={[typographies.interNormal16, {color: colors.grey}]}>
            Don't have it?{' '}
          </Text>
          <ClickableText
            text="Resend"
            onPress={resendOtp}
            style={{...typographies.interSemiBold16, color: colors.pink}}
          />
        </Text>
      </View>
      <OTPInput style={{marginTop: rs(52)}} callback={handleOTP} />
    </Container>
  );
};

export default VerifyOtp;
