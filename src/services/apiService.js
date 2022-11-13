// import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apiKey = 'f608cba52f4269577862dc9dac1f6b35';

const getMovieTypeData = async type => {
  const res = await fetch(`${url}/movie/${type}?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};
const getTVTypeData = async type => {
  const res = await fetch(`${url}/movie/${type}?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

const getPopularTv = async () => {
  const res = await fetch(`${url}/tv/popular?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

export {getPopularTv, getMovieTypeData, getTVTypeData};
