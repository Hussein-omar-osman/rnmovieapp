import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getMovieTypeData,
} from '../services/apiService';
import SlideShow from '../components/SlideShow';
import TypeSwitcher from '../components/TypeSwitcher';
import BottomComponent from '../components/BottomComponent';
import SectionSlider from '../components/SectionSlider';
// import SectionSlider from '../components/SectionSlider';

const Movies = ({type, setType, isOpen, setIsOpen, openBottomSheet}) => {
  const [movieImages, setMovieImages] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const pupularMovieData = await getMovieTypeData('popular');
      const nowPlayingData = await getMovieTypeData('now_playing');
      const topRatedMoviesData = await getMovieTypeData('top_rated');
      const upcomingData = await getMovieTypeData('upcoming');
      let imageList = [];
      pupularMovieData.forEach(movie =>
        imageList.push({
          id: movie.id,
          title: movie.title,
          imgUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }),
      );
      setMovieImages(imageList);
      setPopularMovie(pupularMovieData);
      setNowPlaying(nowPlayingData);
      setTopRatedMovies(topRatedMoviesData);
      setUpcoming(upcomingData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData().then().catch();
  }, [fetchData]);
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
          <SectionSlider loading={loading} movies={topRatedMovies} />
          <Text style={styles.textColor}>Popular movies</Text>
          <SectionSlider loading={loading} movies={popularMovie.reverse()} />
          <Text style={styles.textColor}>Now Playing</Text>
          <SectionSlider loading={loading} movies={nowPlaying.reverse()} />
          <Text style={styles.textColor}>Upcoming Movies</Text>
          <SectionSlider loading={loading} movies={upcoming.reverse()} />
        </SafeAreaView>
        <Image
          source={{
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
          }}
        />
      </ScrollView>
      {isOpen && <BottomComponent isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Movies;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    marginVertical: 10,
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
