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

export function getImage(path, size) {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}

export function getCast(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${BASE_URL}/movie/${id}/credits?${params}`);
}

export function getReviews(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${BASE_URL}/movie/${id}/reviews?${params}`);
}
