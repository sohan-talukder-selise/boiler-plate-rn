import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {AppProvider, RealmProvider} from '@realm/react';
import realmConfig from './app/packages/realm/realmConfig';
import {globalStyles} from './app/assets/styles/global.style.asset';
import BottomSheetIndex from './app/components/bottom-sheet';
import configStore from './app/redux/store';
import RouterIndex from './app/routes/RouterIndex.routes';
import {customTheme} from './app/assets/styles/colors.style.asset';

const MainIndex = () => {
  const appId = 'boiler-plate';
  return (
    <AppProvider id={appId}>
      <SafeAreaProvider>
        <Provider store={configStore}>
          <RealmProvider {...realmConfig}>
            <PaperProvider theme={customTheme}>
              <GestureHandlerRootView style={globalStyles.flex1}>
                <NavigationContainer>
                  <RouterIndex />
                  <BottomSheetIndex />
                </NavigationContainer>
              </GestureHandlerRootView>
            </PaperProvider>
          </RealmProvider>
        </Provider>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default MainIndex;
