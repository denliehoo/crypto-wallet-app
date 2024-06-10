declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png" {
  const value: any; // Adjust the type based on your usage
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_PUBLIC_KEY: string;
    EXPO_PUBLIC_PRIVATE_KEY: string;
    // Add any other environment variables you have here
  }
}
