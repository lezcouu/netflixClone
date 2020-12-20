const API_KEY = "6866f555031d19b36e41e9613004d799";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchACtionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
}

export default requests;