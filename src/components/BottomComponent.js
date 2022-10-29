import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const BottomComponent = ({isOpen, setIsOpen}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = ['45%'];

  if (isOpen) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        animateOnMount
        onClose={() => setIsOpen(false)}
        snapPoints={snapPoints}
        backgroundComponent={() => <View style={styles.contentContainer2} />}
        handleComponent={() => (
          <View style={styles.closeLineContainer}>
            {/* <View style={styles.closeLine} /> */}
          </View>
        )}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Bottom Sheet Component 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333232',
    padding: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer2: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#333232',
  },
  closeLineContainer: {
    alignSelf: 'center',
  },
});

export default BottomComponent;
