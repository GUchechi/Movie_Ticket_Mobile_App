import Toast from 'react-native-root-toast'
import {
    upComingMovies,
    nowPlayingMovies,
    popularMovies,
    movieDetails,
    movieCastDetails,
} from '../api/ApiCalls';


//Get Now Playing Movies
export const getNowPlayingMoviesList = async () => {
    try {
        let response = await fetch(nowPlayingMovies)
        let json = await response.json();
        return json;
    } catch (error) {
        let toast = Toast.show('Request failed to send.', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
        });

        setTimeout(function hideToast() {
            Toast.hide(toast);
        }, 2000);
    }
}

// Get Upcoming Movies
export const getUpcomingMoviesList = async () => {
    try {
        let response = await fetch(upComingMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        let toast = Toast.show('Request failed to send.', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
        });

        setTimeout(function hideToast() {
            Toast.hide(toast);
        }, 2000);
    }
};

// Get Popular Movies
export const getPopularMoviesList = async () => {
    try {
        let response = await fetch(popularMovies);
        let json = await response.json();
        return json;
    } catch (error) {
        let toast = Toast.show('Request failed to send.', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
        });

        setTimeout(function hideToast() {
            Toast.hide(toast);
        }, 2000);
    }
};

// Get Movie Details
export const getMovieDetails = async (movieid: number) => {
    try {
        let response = await fetch(movieDetails(movieid));
        let json = await response.json();
        return json;
    } catch (error) {
        console.error('Something Went wrong in getMoviesDetails Function', error);
    }
}

// Get Movie Cast Details
export const getMovieCastDetails = async (movieid: number) => {
    try {
        let response = await fetch(movieCastDetails(movieid));
        let json = await response.json();
        return json;
    } catch (error) {
        console.error('Something Went wrong in getMovieCastDetails Function',
            error,)
    }
}