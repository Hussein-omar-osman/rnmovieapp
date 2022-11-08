import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const SectionSlider = () => {
  return (
    <ScrollView horizontal style={styles.categorySlide}>
      <View style={styles.imgScroll}>
        <Image
          style={styles.imageSize}
          source={{
            url: 'https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
          }}
        />
        <Image
          style={styles.imageSize}
          source={{
            url: 'https://image.tmdb.org/t/p/w500/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
          }}
        />
        <Image
          style={styles.imageSize}
          source={{
            url: 'https://image.tmdb.org/t/p/w500/qAv0UoAQVZWd6HGc83fsli1aKmo.jpg',
          }}
        />
        <Image
          style={styles.imageSize}
          source={{
            url: 'https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SectionSlider;

const styles = StyleSheet.create({
  categorySlide: {
    marginVertical: 10,
  },
  imageSize: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 10,

    // resizeMode: 'contain',
  },
  imgScroll: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 15,
  },
});
