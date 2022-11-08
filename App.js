/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Movies from './src/screens/Movies';
import Tvs from './src/screens/Tvs';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  const [type, setType] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openBottomSheet = () => {
    setIsOpen(false);
    setIsOpen(true);
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.main}>
        <StatusBar barStyle={'light-content'} />
        {type ? (
          <Movies
            type={type}
            setType={setType}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            openBottomSheet={openBottomSheet}
          />
        ) : (
          <Tvs
            type={type}
            setType={setType}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            openBottomSheet={openBottomSheet}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: 'rgba(0,0,0, 0.95)', flex: 1},
});

export default App;
