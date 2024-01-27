import {
    upComingMovies,
    nowPlayingMovies,
    popularMovies,
} from '../api/ApiCalls';


//Get Now Playing Movies
export const getNowPlayingMoviesList = async () => {
    try {
        let response = await fetch(nowPlayingMovies)
        let json = await response.json();
        return json;
    } catch (error) {
        console.error('Something went wrong', error);
    }
}

// Get Upcoming Movies
export const getUpcomingMoviesList = async () => {
    try {
        let response = await fetch(upComingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(
            ' Something went wrong in getUpcomingMoviesList Function',
            error,
        );
    }
};

// Get Popular Movies
export const getPopularMoviesList = async () => {
    try {
        let response = await fetch(popularMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(
            ' Something went wrong in getPopularMoviesList Function',
            error,
        );
    }
};