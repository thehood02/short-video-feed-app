/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Reels from './src/Reels';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Reels />
    </SafeAreaView>
  );
}

export default App;
