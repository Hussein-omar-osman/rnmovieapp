// import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apiKey = 'f608cba52f4269577862dc9dac1f6b35';

const getPopularMovies = async () => {
  const res = await fetch(`${url}/movie/popular?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

const getUpcomingMovies = async () => {
  const res = await fetch(`${url}/movie/upcoming?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

const getTopRatedMovies = async () => {
  const res = await fetch(`${url}/movie/top_rated?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};
const getNowPlayingMovies = async () => {
  const res = await fetch(`${url}/movie/now_playing?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

const getPopularTv = async () => {
  const res = await fetch(`${url}/tv/popular?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

export {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getTopRatedMovies,
  getNowPlayingMovies,
};
