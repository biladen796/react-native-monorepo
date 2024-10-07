export default ({ config }) => ({
  ...config,
  name: "HelloWorld",
  slug: "expo-template-blank-typescript",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.anonymous.expotemplateblanktypescript"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "com.anonymous.expotemplateblanktypescript"
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "expo-font",
      {
        "fonts": [
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Italic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-BoldItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBoldItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-LightItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-MediumItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBoldItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ThinItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-BlackItalic.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf",
          "./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLightItalic.ttf"
        ]
      }
    ]
  ],
});
