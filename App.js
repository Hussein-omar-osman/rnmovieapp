/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import Movies from './src/screens/Movies';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  console.log('hello world');
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <Movies />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: 'rgba(0,0,0, 0.92)', flex: 1},
});

export default App;
