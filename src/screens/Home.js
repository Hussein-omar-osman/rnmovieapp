import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getPopularMovies} from '../services/apiService';

const Home = () => {
  useEffect(() => {
    getPopularMovies()
      .then(movie => console.log(movie))
      .catch(e => console.error(e));
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({});
