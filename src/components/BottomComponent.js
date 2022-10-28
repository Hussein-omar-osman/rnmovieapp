import React, {useCallback, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomComponent = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['45%', '45%'];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      enablePanDownToClose
      animateOnMount
      snapPoints={snapPoints}
      backgroundStyle="grey"
      onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>
        <Text>Bottom Sheet Component 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomComponent;
