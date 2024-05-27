/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Webview from './webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [loadEnded, setLoadEnded] = useState(false);
  useEffect(() => {
    if (loadEnded) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    }
  }, [loadEnded]);

  return (
    <SafeAreaProvider>
      <Webview onLoadEnded={() => setLoadEnded(true)} />
    </SafeAreaProvider>
  );
};

export default App;
