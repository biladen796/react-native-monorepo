import { config } from '@tamagui/config/v3';
import { createFont } from 'tamagui';

const beVietNamFace = {
  normal: { normal: 'BeVietnamPro-Regular', italic: 'BeVietnamPro-Italic' },
  bold: { normal: 'BeVietnamPro-Bold', italic: 'BeVietnamPro-BoldItalic' },
  100: { normal: 'BeVietnamPro-Thin', italic: 'BeVietnamPro-ThinItalic' },
  200: {
    normal: 'BeVietnamPro-ExtraLight',
    italic: 'BeVietnamPro-ExtraLightItalic',
  },
  300: { normal: 'BeVietnamPro-Light', italic: 'BeVietnamPro-LightItalic' },
  400: { normal: 'BeVietnamPro-Regular', italic: 'BeVietnamPro-Italic' },
  500: { normal: 'BeVietnamPro-Medium', italic: 'BeVietnamPro-MediumItalic' },
  600: {
    normal: 'BeVietnamPro-SemiBold',
    italic: 'BeVietnamPro-SemiBoldItalic',
  },
  700: { normal: 'BeVietnamPro-Bold', italic: 'BeVietnamPro-BoldItalic' },
  800: {
    normal: 'BeVietnamPro-ExtraBold',
    italic: 'BeVietnamPro-ExtraBoldItalic',
  },
  900: {
    normal: 'BeVietnamPro-Black',
    italic: 'BeVietnamPro-BlackItalic',
  },
};

const headingFont = createFont({
  size: config.fonts.heading.size,
  lineHeight: config.fonts.heading.lineHeight,
  weight: config.fonts.heading.weight,
  letterSpacing: config.fonts.heading.letterSpacing,
  face: beVietNamFace,
});

const bodyFont = createFont({
  size: config.fonts.body.size,
  lineHeight: config.fonts.body.lineHeight,
  weight: config.fonts.body.weight,
  letterSpacing: config.fonts.body.letterSpacing,
  face: beVietNamFace,
});

export { headingFont, bodyFont };
