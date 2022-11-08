import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const SectionSlider = ({movies}) => {
  return (
    <ScrollView horizontal style={styles.categorySlide}>
      <View style={styles.imgScroll}>
        {movies.map(movie => (
          <Image
            key={movie.id}
            style={styles.imageSize}
            source={{
              url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
          />
        ))}
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
