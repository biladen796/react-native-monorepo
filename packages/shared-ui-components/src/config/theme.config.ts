import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';

const themeConfig = createTamagui(config);

type Conf = typeof themeConfig;
declare module '@tamagui/core' {
  interface ThemeCustomConfig extends Conf {}
}

export default themeConfig;
