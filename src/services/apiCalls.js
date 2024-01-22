import axios from "axios";

export const searchMoviesApi = (query) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const movieDetailApi = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3a3b0d721bd3ebe2d05d199ce4eeba8e`)
  .then(function (response) {
    // console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
};

export const popularMovies = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc",
    },
  };

  return axios
  .request(options)
  .then(function (response) {
    // console.log(response.data.results);
    return response.data.results;
  })
  .catch(function (error) {
    console.error(error);
  });
};

export const nowPlaying = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc'
    }
  };
  
  return axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export const topRated = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc'
    }
  };
  
  return axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export const upComing = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTNiMGQ3MjFiZDNlYmUyZDA1ZDE5OWNlNGVlYmE4ZSIsInN1YiI6IjY1YWJiOGYwYmU2ZDg4MDBiYzkyODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDpjWQhIQVktrIiJu9Pz7-6JnAOQjqMmoiI3xWJRmbc'
    }
  };
  
  return axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
}