import React from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { themeConfig, ThemeProvider } from 'shared-ui-components';

export default function RootLayout() {
  return (
    <ThemeProvider config={themeConfig}>
      <Stack>
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
