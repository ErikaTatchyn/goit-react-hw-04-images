import axios from 'axios';

const API_KEY = '33063582-bd88d5aaf715a71a39133f1fd';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (searchQuery, currentPage) => {
  const perPage = 12;
  const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&per_page=${perPage}`;

  return axios
    .get(url)
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error('No results found');
      }
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        throw new Error(
          `API Error: ${error.response.status} - ${error.response.statusText}`
        );
      } else if (error.request) {
        throw new Error(
          'Network error - please check your internet connection'
        );
      } else {
        throw new Error('An error occurred while processing your request');
      }
    });
};
