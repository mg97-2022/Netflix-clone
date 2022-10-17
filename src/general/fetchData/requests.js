const requests = {
    nowPlaying: `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    popularMovies: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    topRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    upcomingMovies: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    topRatedTv: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    popularTv: `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    NetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&networks=213`,
    actionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    horrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    comedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
}
export default requests