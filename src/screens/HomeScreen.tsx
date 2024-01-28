import React, { useEffect, useState } from 'react';
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
import InputHeader from '../components/InputHeader';
import { getNowPlayingMoviesList, getUpcomingMoviesList, getPopularMoviesList } from '../components/MoviesFunction';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import { baseImagePath } from '../api/ApiCalls';
import MovieCard from '../components/MovieCard';

const { width, height } = Dimensions.get('window');



const HomeScreen = ({ navigation }: any) => {
    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined)
    const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined)
    const [upComingMoviesList, setUpComingMoviesList] = useState<any>(undefined)

    useEffect(() => {
        (async () => {
            let tempNowPlaying = await getNowPlayingMoviesList();
            setNowPlayingMoviesList([
                { id: 'dummy1' },
                ...tempNowPlaying.results,
                { id: 'dummy2' },
            ]);

            let tempPopular = await getPopularMoviesList();
            setPopularMoviesList(tempPopular.results);

            let tempUpComing = await getUpcomingMoviesList();
            setUpComingMoviesList(tempUpComing.results);
        })();
    }, []);


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

                {/* Search Input */}
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
        <ScrollView
            bounces={false}
            style={styles.container}>
            <StatusBar hidden />

            {/* Search Input */}
            <View style={styles.InputHeaderContainer}>
                <InputHeader searchFunction={searchMoviesFunction} />
            </View>

            {/* Now Playing */}
            <CategoryHeader title={'Now Playing'} />
            <FlatList
                data={nowPlayingMoviesList}
                keyExtractor={(item: any) => item.id}
                bounces={false}
                snapToInterval={width * 0.7 + SPACING.space_36}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                contentContainerStyle={styles.containerGap36}
                renderItem={({ item, index }) => {
                    if (!item.original_title) {
                        return (
                            <View
                                style={{
                                    width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2,
                                }}></View>
                        );
                    }
                    return (
                        <MovieCard
                            shouldlMarginatedAtEnd={true}
                            cardFunction={() => {
                                navigation.push('Details', { movieid: item.id });
                            }}
                            cardWidth={width * 0.7}
                            isFirst={index == 0 ? true : false}
                            isLast={index == nowPlayingMoviesList?.length - 1 ? true : false}
                            title={item.original_title}
                            imagePath={baseImagePath('w780', item.poster_path)}
                            genre={item.genre_ids.slice(1, 4)}
                            vote_average={item.vote_average}
                            vote_count={item.vote_count}
                        />
                    );
                }}
            />

            {/* Popular */}
            <CategoryHeader title={'Popular'} />
            <FlatList
                data={popularMoviesList}
                keyExtractor={(item: any) => item.id}
                bounces={false}
                contentContainerStyle={styles.containerGap36}
                horizontal
                renderItem={({ item, index }) => (
                    <SubMovieCard
                        shouldlMarginatedAtEnd={true}
                        title={item.original_title}
                        imagePath={baseImagePath('w342', item.poster_path)}
                        cardFunction={() => {
                            navigation.navigate('Details', { movieId: item.id })
                        }}
                        cardWidth={width / 3}
                        isFirst={index == 0 ? true : false}
                        isLast={index == upComingMoviesList?.length - 1 ? true : false}
                    />
                )}
            />

            {/* Upcoming */}
            <CategoryHeader title={'Upcoming'} />
            <FlatList
                data={upComingMoviesList}
                keyExtractor={(item: any) => item.id}
                bounces={false}
                contentContainerStyle={styles.containerGap36}
                horizontal
                renderItem={({ item, index }) => (
                    <SubMovieCard
                        shouldlMarginatedAtEnd={true}
                        title={item.original_title}
                        imagePath={baseImagePath('w342', item.poster_path)}
                        cardFunction={() => {
                            navigation.navigate('Details', { movieId: item.id })
                        }}
                        cardWidth={width / 3}
                        isFirst={index == 0 ? true : false}
                        isLast={index == upComingMoviesList?.length - 1 ? true : false}
                    />
                )}
            />
        </ScrollView>
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
