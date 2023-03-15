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

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={{fontFamily: 'Montserrat-Medium'}}>My new app</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
