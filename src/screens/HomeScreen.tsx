import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    StatusBar,
    FlatList,
} from 'react-native';
import { COLORS, SPACING } from '../theme/Theme'
import {
    upComingMovies,
    nowPlayingMovies,
    popularMovies,
    baseImagePath,
} from '../api/ApiCalls';
import InputHeader from '../components/InputHeader';

const { width, height } = Dimensions.get('window');



const HomeScreen = ({ navigation }: any) => {
    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined)
    const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined)
    const [upComingMoviesList, setUpComingMoviesList] = useState<any>(undefined)

    // Search
    const searchMoviesFunction = () => {
        navigation.navigate('Search');
    };

    if (nowPlayingMoviesList == undefined &&
        nowPlayingMoviesList == null &&
        popularMoviesList == undefined &&
        popularMoviesList == null &&
        upComingMoviesList == undefined &&
        upComingMoviesList == null) {
        return (
            <ScrollView
                bounces={false}
                contentContainerStyle={styles.scrollViewContainer}
                style={styles.container}>
                <StatusBar hidden />

                <View style={styles.InputHeaderContainer}>
                    <InputHeader searchFunction={searchMoviesFunction} />
                </View>

                {/* Activity Indicator */}
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={COLORS.Primary} />
                </View>
            </ScrollView>
        )
    }



    return (
        <View>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: COLORS.Black,
    },
    scrollViewContainer: {
        flex: 1,
    },

    loadingContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    InputHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28,
    },
    containerGap36: {
        gap: SPACING.space_36,
    },
});
