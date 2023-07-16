import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.john.sandbox',
  appName: 'sandbox',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
