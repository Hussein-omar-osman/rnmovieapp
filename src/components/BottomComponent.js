import React, {useCallback, useEffect, useRef} from 'react';
import {View, BackHandler, Text, StyleSheet} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const BottomComponent = ({isOpen, setIsOpen, children}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // handle back press events for Android
  useEffect(() => {
    const onBackPress = () => {
      // check if modal is open and fire onClose event
      if (!isOpen) {
        return false;
      }

      bottomSheetRef?.current?.close();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [isOpen]);

  // variables
  const snapPoints = ['45%'];

  useEffect(() => {
    isOpen
      ? bottomSheetRef?.current?.expand()
      : bottomSheetRef?.current?.close();
  }, [isOpen]);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        style={[
          props.style,
          {
            backgroundColor: 'black',
          },
        ]}
        pressBehavior="collapse"
        enableTouchThrough={false}
        onPress={() => console.log('clicked')}
      />
    ),
    [],
  );
  if (isOpen) {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        // animateOnMount
        onClose={() => setIsOpen(false)}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        // onChange={index =>
        //   index === 0 ? console.log('open') : console.log('closed')
        // }
        // backgroundComponent={() => <View style={styles.contentContainer2} />}
        handleComponent={() => <></>}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={{color: 'white'}}>Bottom Sheet Component 🎉</Text>
          {children}
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
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  // contentContainer2: {
  //   // ...StyleSheet.absoluteFillObject,
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   backgroundColor: '#333232',
  // },
  // closeLineContainer: {
  //   alignSelf: 'center',
  // },
});

export default BottomComponent;
