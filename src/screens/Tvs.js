import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getPopularTv, getTVTypeData} from '../services/apiService';
import SlideShow from '../components/SlideShow';
import TypeSwitcher from '../components/TypeSwitcher';
import SectionSlider from '../components/SectionSlider';

const Tvs = ({type, setType, isOpen, setIsOpen, openBottomSheet}) => {
  const [tvImages, setTvImages] = useState([]);
  const [nowPlayingTV, setNowPlayingTV] = useState([]);
  const [pupularTV, setPupularTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [latestTV, setTatestTV] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTVData = useCallback(async () => {
    setLoading(true);
    try {
      const pupularTVData = await getTVTypeData('popular');
      const nowPlayingTVData = await getTVTypeData('on_the_air');
      const topRatedTVData = await getTVTypeData('top_rated');
      const latestTVData = await getTVTypeData('latest');
      let tvList = [];
      pupularTVData.forEach(tv =>
        tvList.push({
          id: tv.id,
          title: tv.original_name,
          imgUrl: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
        }),
      );
      setTvImages(tvList);
      setPupularTV(pupularTVData);
      setNowPlayingTV(nowPlayingTVData);
      setTopRatedTV(topRatedTVData);
      setTatestTV(latestTVData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   getPopularTv()
  //     .then(shows => {
  //       let tvList = [];
  //       shows.forEach(tv =>
  //         tvList.push({
  //           id: tv.id,
  //           title: tv.original_name,
  //           imgUrl: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
  //         }),
  //       );
  //       setTvImages(tvList);
  //       setLoading(false);
  //     })
  //     .catch(e => {
  //       console.error(e);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    fetchTVData().then().catch();
  }, [fetchTVData]);
  return (
    <ScrollView>
      <SlideShow
        listImages={tvImages}
        loading={loading}
        setLoading={setLoading}
      />
      <SafeAreaView>
        <TypeSwitcher type={type} setType={setType} />
        <Text style={styles.textColor}>Now playing</Text>
        <SectionSlider loading={loading} movies={nowPlayingTV} />
        <Text style={styles.textColor}>Popular tv</Text>
        <SectionSlider loading={loading} movies={topRatedTV} />
        <Text style={styles.textColor}>Upcoming Tv</Text>
        <SectionSlider loading={loading} movies={latestTV} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Tvs;

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
