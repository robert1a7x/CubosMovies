import axios from "axios";

export const searchMoviesApi = (query) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc'
    }
  };

  return axios.request(options)
  .then(function (response) {
    // console.log(response.data.results);
    return response.data.results;
  })
  .catch(function (error) {
    console.error(error);
  });
}