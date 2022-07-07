import axios from 'axios';

const API_KEY = '105389e3cecb1095d9153413896fdc0a';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrendingMovies() {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${BASE_URL}/trending/movie/day?${params}`);
}

// export function searchMovies() {
//     const params = new URLSearchParams({
//         api_key: API_KEY,
//         query:
//     });
//   return axios.get(`${BASE_URL}//search/movie/?${params}`);
// }

export function filmDetails(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${BASE_URL}/movie/${id}?${params}`);
}

export function getImage(path) {
  return `https://image.tmdb.org/t/p/w500/${path}`;
}
