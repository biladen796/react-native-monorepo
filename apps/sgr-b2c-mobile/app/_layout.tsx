import React from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { defaultThemeConfig, ThemeProvider } from 'shared-ui-components';
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   BeVietnamPro: require('../assets/fonts/BeVietnamPro-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }
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
