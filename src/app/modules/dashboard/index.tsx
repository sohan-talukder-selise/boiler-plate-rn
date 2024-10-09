import {ScrollView} from 'react-native';
import React from 'react';
import Container from '../../layout/Container.layout';
import rs from '../../assets/styles/responsiveSize.style.asset';
import SolidButton from '../../components/button/solid-button/SolidButton.component';
import IconButton from '../../components/button/icon-button/IconButton.component';
import HomeIcon from '../../assets/icons/HomeIcon.assets';
import InputWithIcon from '../../components/text-input/InputWithIcon.core.component';
import PasswordTextInput from '../../components/text-input/floating/PasswordTextInput';
import CustomSwitch from '../../components/switch/CustomSwitch';
import Badge from '../../components/badge/Badge.c';
import DatePickerInput from '../../components/date-time/date-input/index.component';
import TimePickerInput from '../../components/date-time/time-input/index.component';
import RangeDate from '../../components/date-time/RangeDate.component';
import FloatingTextInput from '../../components/text-input/floating/FloatingTextInput';
import ImagePreview from '../../components/image-preview/Index.component';
import {globalStyles} from '../../assets/styles/global.style.asset';
import CustomSelect from '../../components/custom-select/CustomSelect.app';

const Dashboard = () => {
  return (
    <Container ph={20}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: rs(20)}}>
        <SolidButton text="Hello World" />
        <IconButton icon={<HomeIcon />} />
        <InputWithIcon onChangeText={() => {}} placeholder="Hello" />
        <PasswordTextInput onChangeText={() => {}} placeholder="Password" />
        <CustomSwitch />
        <Badge text="Hello" />
        <DatePickerInput />
        <TimePickerInput />
        <RangeDate />
        <FloatingTextInput label="Hello" />
        <ImagePreview
          source={{uri: ''}}
          styles={[globalStyles.widthFull, {height: rs(200)}]}
        />
        <CustomSelect
          data={['New', 'Old']}
          label="Select"
          name="select"
          placeholder="Select "
          onChange={() => {}}
        />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
