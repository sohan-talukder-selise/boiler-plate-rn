import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {customTheme} from './app/assets/styles/colors.style.asset';
import {globalStyles} from './app/assets/styles/global.style.asset';
import BottomSheetIndex from './app/components/bottom-sheet';
import configStore from './app/redux/store';
import RouterIndex from './app/routes/RouterIndex.routes';

const MainIndex = () => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
        <PaperProvider theme={customTheme}>
          <GestureHandlerRootView style={globalStyles.flex1}>
            <NavigationContainer>
              <RouterIndex />
              <BottomSheetIndex />
            </NavigationContainer>
          </GestureHandlerRootView>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainIndex;
