/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import CustomBottomSheet from './CustomBottomSheet';
import {BackHandler} from 'react-native';
import useIsMountHook from '../../helper/hooks/useIsMount.hook';
import {_showBottomSheetProps} from './interface';

declare global {
  var showBottomSheet: ({
    flag,
    component,
    componentProps,
    bottomSheetProps,
    style,
    topBar,
  }: _showBottomSheetProps) => void;
}

const BottomSheetIndex = () => {
  const isMount = useIsMountHook();
  const ref = useRef<any>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const reloadRef = useRef<any>(null);
  const componentRef = useRef<any>(null);
  const propsRef = useRef<any>(null);

  global.showBottomSheet = ({
    flag,
    component = null,
    componentProps = {},
    bottomSheetProps = {},
    onClose = () => {},
    onOpen = () => {},
    style,
    topBar = true,
  }) => {
    if (flag && isShow) {
      reloadRef.current = {
        component: component,
        propsRef: {
          componentProps,
          bottomSheetProps,
          onClose,
          onOpen,
          style,
          topBar,
        },
      };
      ref?.current?.close();
      return;
    }
    if (flag) {
      componentRef.current = component;
      propsRef.current = {
        componentProps,
        bottomSheetProps,
        onClose,
        onOpen,
        style,
        topBar,
      };
      reloadRef.current = null;
      setIsShow(true);
      return;
    }
    ref?.current?.close();
  };
  useEffect(() => {
    if (!isMount) {
      return;
    }
    if (isShow) {
      ref?.current?.show();
    } else {
      if (reloadRef.current) {
        componentRef.current = reloadRef.current.component;
        propsRef.current = {...reloadRef.current.propsRef};
        reloadRef.current = null;
        setIsShow(true);
        return;
      }
      componentRef.current = null;
      propsRef.current = null;
      reloadRef.current = null;
    }
    const backAction = () => {
      if (propsRef?.current?.onClose) {
        global.showBottomSheet({flag: false});
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isShow]);
  const backDropHandler = () => {
    setIsShow(false);
    if (propsRef?.current?.onClose) {
      propsRef.current.onClose();
    }
  };
  if (!isShow) {
    return null;
  }
  return (
    <CustomBottomSheet
      ref={ref}
      backDropHandler={backDropHandler}
      Component={componentRef.current}
      style={propsRef.current?.style}
      topBar={propsRef.current?.topBar}
      extraProps={{
        ...propsRef.current,
        componentProps: {
          ...propsRef.current.componentProps,
        },
      }}
    />
  );
};
export default BottomSheetIndex;
