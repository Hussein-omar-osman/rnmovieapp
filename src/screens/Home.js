import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../services/apiService';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const [movieImages, setMovieImages] = useState([]);
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        let imageList = [];
        movies.forEach(movie =>
          imageList.push(`https://image.tmdb.org/t/p/w500${movie.poster_path}`),
        );
        setMovieImages(imageList);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {movieImages.map((item, i) => (
          <Image key={i} source={{uri: item}} style={styles.imageStyles} />
        ))}
      </Animated.ScrollView>
      <Text>hello</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageStyles: {
    // margin: 10,
    width: width,
    height: height - 300,
    resizeMode: 'contain',
    borderRadius: 35,
    // borderColor: 'green',
    // borderWidth: 9,
  },
});
