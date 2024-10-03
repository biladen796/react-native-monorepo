import React from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { themeConfig, ThemeProvider } from 'shared-ui-components';
import { Provider } from 'react-redux';
import { store } from '@/src/redux/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider config={themeConfig}>
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
