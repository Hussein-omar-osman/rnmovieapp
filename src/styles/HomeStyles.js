import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageStyles: {
    // margin: 10,
    width: width,
    height: height - 270,
    resizeMode: 'contain',
    borderRadius: 20,
    // borderColor: 'green',
    // borderWidth: 9,
  },
});
