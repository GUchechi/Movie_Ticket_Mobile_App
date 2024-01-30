import React, { useState } from 'react';
import Toast from 'react-native-root-toast'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SPACING } from '../theme/Theme';
import { baseImagePath, searchMovies } from '../api/ApiCalls';
import InputHeader from '../components/InputHeader';
import SearchCard from '../components/SearchCard';


const { width, height } = Dimensions.get('screen');



const SearchScreen = ({ navigation }: any) => {
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search  Function

  const searchMoviesFunction = async (name: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(searchMovies(name))
      const json = await response.json();
      setSearchList(json.results);
      setIsLoading(false);
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

  if (isLoading) {
    return (
      <View
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
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.centerContainer}
          renderItem={({ item, index }) => (
            <SearchCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('Details', { movieid: item.id });
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },

  scrollViewContainer: {
    flex: 1,
    alignItems: 'center',
  },

  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    display: 'flex',
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
  centerContainer: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },

});
