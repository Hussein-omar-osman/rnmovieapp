/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  console.log('hello world');
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: 'rgba(0,0,0, 0.92)', flex: 1},
});

export default App;
