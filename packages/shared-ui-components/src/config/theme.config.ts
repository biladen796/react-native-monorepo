import { config } from '@tamagui/config/v3';
import { createMedia } from '@tamagui/react-native-media-driver';
import { createTamagui, createTokens } from 'tamagui';

import { bodyFont, headingFont } from './font.config';
import * as themes from './theme-output';

export const tokens = createTokens({
  ...config.tokens,
});

const appConfig = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: headingFont,
    body: bodyFont,
  },

  tokens,

  // For more on themes, see the Themes page
  themes,
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,
});

type AppConfig = typeof appConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}

  // if you want types for group styling props, define them like so:
  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}

export default appConfig;
