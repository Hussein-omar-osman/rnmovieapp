import {TouchableOpacity, Image, ActivityIndicator, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const SlideShow = ({listImages, loading, openBottomSheet, setSelected}) => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <>
      {loading ? (
        <View style={styles.loadingImage}>
          <ActivityIndicator />
        </View>
      ) : (
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}>
          {listImages.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={1}
              onPress={() => {
                openBottomSheet();
                setSelected(item.id);
              }}>
              <Image
                source={{uri: item.imgUrl}}
                loadingIndicatorSource={<ActivityIndicator />}
                style={styles.imageStyles}
              />
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      )}
    </>
  );
};

export default SlideShow;

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageStyles: {
    // margin: 10,
    width: width,
    height: height - 270,
    resizeMode: 'contain',
    borderRadius: 20,
    // borderColor: 'green',
    // borderWidth: 9,
  },
  loadingImage: {
    width: width,
    height: height - 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
