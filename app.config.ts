import { ExpoConfig, ConfigContext } from "expo/config";
module.exports = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "rn-solution-heap",
  name: "rn-solution-heap",
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    package: "com.solution.heap",
  },
  ios: {
    googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
    bundleIdentifier: "com.solution.heap",
  },
});
