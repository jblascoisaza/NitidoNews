import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Bienvenido from './src/views/Bienvenido';

const DrawerNavigation = createDrawerNavigator({
  Welcome: {
    screen: Bienvenido,
  },
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    Welcome: {
      screen: Bienvenido,
    },
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(StackNavigation);

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // eslint-disable-next-line no-console
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return isLoadingComplete ? <AppContainer /> : <AppLoading />;
}

export default App;
