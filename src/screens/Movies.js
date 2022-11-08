import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies, getPopularMovies} from '../services/apiService';
import SlideShow from '../components/SlideShow';
import TypeSwitcher from '../components/TypeSwitcher';
import BottomComponent from '../components/BottomComponent';
import SectionSlider from '../components/SectionSlider';
// import SectionSlider from '../components/SectionSlider';

const Movies = ({type, setType, isOpen, setIsOpen, openBottomSheet}) => {
  const [movieImages, setMovieImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('component mounted');
    setLoading(true);
    getPopularMovies()
      .then(movies => {
        let imageList = [];
        movies.forEach(movie =>
          imageList.push({
            id: movie.id,
            title: movie.title,
            imgUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }),
        );
        setMovieImages(imageList);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
    return () => {
      console.log('component unmounted');
    };
  }, []);
  return (
    <>
      <ScrollView>
        <SlideShow
          listImages={movieImages}
          loading={loading}
          setLoading={setLoading}
          openBottomSheet={openBottomSheet}
        />
        <SafeAreaView>
          <TypeSwitcher type={type} setType={setType} />
          <TouchableOpacity onPress={openBottomSheet}>
            <Text style={styles.textColor}>Top Rated movies</Text>
          </TouchableOpacity>
          <SectionSlider />
          <Text style={styles.textColor}>Popular movies</Text>
          <SectionSlider />
        </SafeAreaView>
      </ScrollView>
      {isOpen && <BottomComponent isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Movies;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
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
