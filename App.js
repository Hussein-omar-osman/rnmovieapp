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
  const isDarkMode = useColorScheme() === 'dark';
  console.log('hello world');
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: 'grey', flex: 1},
});

export default App;
