import React from 'react';
import {MD3DarkTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import BottomSheetIndex from './app/components/bottom-sheet';
import RouterIndex from './app/routes/RouterIndex.routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import configStore from './app/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './app/assets/styles/global.style.asset';
import {AppProvider, RealmProvider} from '@realm/react';
import realmConfig from './app/packages/realm/realmConfig';
const MainIndex = () => {
  // TODO: Add a custom theme in a different hook / file
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // primary: 'tomato',
      // secondary: 'yellow',
    },
  };
  const appId = 'boiler-plate';
  return (
    <AppProvider id={appId}>
      <SafeAreaProvider>
        <Provider store={configStore}>
          <RealmProvider {...realmConfig}>
            <PaperProvider theme={theme}>
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
