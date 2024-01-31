import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { getMovieCastDetails, getMovieDetails } from '../components/MoviesFunction';
import { COLORS, SPACING } from '../theme/Theme';
import AppHeader from '../components/AppHeader';



const MovieDetailsScreen = ({ navigation, route }: any) => {
  const [movieData, setMovieData] = useState<any>(undefined)
  const [movieCastData, setmovieCastData] = useState<any>(undefined)

  useEffect(() => {
    (async () => {
      const tempMovieData = await getMovieDetails(route.params.movieid);
      setMovieData(tempMovieData);
    })();

    (async () => {
      const tempMovieCastData = await getMovieCastDetails(route.params.movieid);
      setmovieCastData(tempMovieCastData);
    })();
  }, []);

  if (
    movieData == undefined &&
    movieData == null &&
    movieCastData == undefined &&
    movieCastData == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            header={''}
            action={() => navigation.goBack()}
          />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Primary} />
        </View>
      </ScrollView>
    );
  }


  return (
    <ScrollView
    style={styles.container}
    contentContainerStyle={styles.scrollViewContainer}
    bounces={false}
    showsVerticalScrollIndicator={false}>
    <View style={styles.appHeaderContainer}>
      <AppHeader
        header={''}
        action={() => navigation.goBack()}
      />
    </View>
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color={COLORS.Primary} />
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
});

export default MovieDetailsScreen;


