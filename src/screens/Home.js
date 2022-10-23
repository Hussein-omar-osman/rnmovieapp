import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../services/apiService';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const [movieImages, setMovieImages] = useState([]);
  console.log(width);
  console.log(height);
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
      <Animated.ScrollView horizontal>
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
    margin: 10,
    width: width - 20,
    height: height,
    objectFit: 'contain',
  },
});
