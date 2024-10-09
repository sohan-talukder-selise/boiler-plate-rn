import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import imagePicker from '../../packages/image-picker/imagePicker';
import LeftArrowIcon from '../../assets/icons/LeftArrow.icon.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {
  globalStyles,
  customPadding,
  customMargin,
} from '../../assets/styles/global.style.asset';
import getHexaOpacityColorCode from '../../helper/utilities/getHexaOpacityColor.utility';
import CameraIcon from '../../assets/icons/Camera.icon.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import GalleryFillIcon from '../../assets/icons/GalleryFill.icon.asset';
import {colors} from '../../assets/styles/colors.style.asset';

const ImagePickerBottomSheet: React.FC<{
  success: (params: any) => void;
  failed: (params: any) => void;
  multiple?: boolean;
  maxFiles?: number;
}> = ({success, failed, multiple = false, maxFiles = 2}) => {
  const handleOpenCamera = () => {
    global.showBottomSheet({flag: false});
    imagePicker.openCamera({success, failed});
  };
  const handleOpenGallery = () => {
    global.showBottomSheet({flag: false});
    imagePicker.openGallery({
      success,
      failed,
      multiple: multiple,
      maxFiles,
    });
  };
  return (
    <View>
      <View style={styles.topHeader}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            global.showBottomSheet({flag: false});
          }}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={[
            typographies.interSemiBold16,
            globalStyles.flexShrink1,
            {color: colors.black},
          ]}>
          Image Picker
        </Text>
      </View>
      <View style={[globalStyles.rowBetween, styles.middleHeader]}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.6}
          onPress={handleOpenCamera}>
          <View style={styles.imageContainer}>
            <CameraIcon height={rs(40)} width={rs(40)} fill={colors.pink} />
          </View>
          <Text style={typographies.interMedium14}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.6}
          onPress={handleOpenGallery}>
          <View style={styles.imageContainer}>
            <GalleryFillIcon
              height={rs(40)}
              width={rs(40)}
              fill={colors.pink}
            />
          </View>
          <Text style={typographies.interMedium14}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickerBottomSheet;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...customPadding(10, 20, 10, 20),
  },
  container: {
    alignItems: 'center',
    width: '50%',
  },
  imageContainer: {
    height: rs(88),
    width: rs(88),
    backgroundColor: getHexaOpacityColorCode(colors.grey3, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    ...customMargin(0, 0, 8),
  },
  middleHeader: {...customPadding(20, 0, 20, 0), flex: 0, gap: 0},
});
