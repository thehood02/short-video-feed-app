/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import MyAppText from './src/CustomComponents/MyAppText';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} />
        <View style={{minHeight: '100%', backgroundColor: '#000'}}>
          <MyAppText>my new app</MyAppText>
        </View>
    </SafeAreaView>
  );
}

export default App;
