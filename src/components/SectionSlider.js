import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SectionSlider = ({
  movies,
  loading,
  openBottomSheet,
  setSelected,
  selected,
}) => {
  return (
    <>
      {/* <ScrollView horizontal style={styles.categorySlide}>
        <View style={styles.imgScroll}>
          {loading
            ? [1, 2, 3, 4].map((item, i) => (
                <ActivityIndicator key={i} style={styles.imageSize} />
              ))
            : movies.map(movie => (
                <Image
                  key={movie.id}
                  style={styles.imageSize}
                  loadingIndicatorSource={<ActivityIndicator />}
                  source={{
                    url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  }}
                />
              ))}
        </View>
      </ScrollView> */}
      {loading ? (
        <View style={styles.imgScroll}>
          <ActivityIndicator style={styles.imageSize} />
          <ActivityIndicator style={styles.imageSize} />
          <ActivityIndicator style={styles.imageSize} />
        </View>
      ) : (
        <FlatList
          horizontal
          style={styles.imgScroll}
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              {loading ? (
                <ActivityIndicator style={styles.imageSize} />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (selected.id === item.id) {
                      return;
                    }
                    openBottomSheet();
                    setSelected(item);
                  }}>
                  <Image
                    style={styles.imageSize}
                    loadingIndicatorSource={<ActivityIndicator />}
                    source={{
                      url: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    }}
                  />
                </TouchableOpacity>
              )}
            </>
          )}
        />
      )}
    </>
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
