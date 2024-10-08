import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { defaultThemeConfig, ThemeProvider } from 'shared-ui-components';
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';
import { View } from 'react-native';
import { Image } from 'expo-image';
import welcomeScreen from '@/assets/images/welcomeScreen.png';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  console.log('appIsReady', appIsReady);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAppIsReady(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={welcomeScreen}
          contentFit="cover"
        />
      </View>
    );
  }
  if (appIsReady) {
    return (
      <Provider store={store}>
        <ThemeProvider config={defaultThemeConfig}>
          <Stack>
            <Stack.Screen
              name="home"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </Provider>
    );
  }
}
