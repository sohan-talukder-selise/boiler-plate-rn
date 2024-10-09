import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomSheetIndex from './app/components/bottom-sheet';
import RouterIndex from './app/routes/RouterIndex.routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import configStore from './app/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './app/assets/styles/global.style.asset';

const MainIndex = () => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
        <GestureHandlerRootView style={globalStyles.flex1}>
          <NavigationContainer>
            <RouterIndex />
            <BottomSheetIndex />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainIndex;
