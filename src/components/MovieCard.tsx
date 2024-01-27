import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/Theme';

interface MovieCardProps {
    title: string;
    imagePath: any;
    shouldlMarginatedAtEnd: boolean,
    cardFunction: any;
    cardWidth: any,
    isFirst: any;
    isLast: any;
    vote_average: number;
    vote_count: number;
    genre: any;
}

const genres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentry',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystry',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

const MovieCard: React.FC<MovieCardProps> = ({ title, imagePath, shouldlMarginatedAtEnd, cardFunction, cardWidth, isFirst, isLast, vote_average, vote_count, genre }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => cardFunction()}>
                <View
                    style={[
                        styles.container,
                        shouldlMarginatedAtEnd
                            ? isFirst
                                ? { marginLeft: SPACING.space_36 }
                                : isLast
                                    ? { marginRight: SPACING.space_36 }
                                    : {}
                            : {},
                        // shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
                        { maxWidth: cardWidth },
                    ]}
                >
                    <Image
                        style={[styles.cardImage, { width: cardWidth }]}
                        source={{ uri: imagePath }}
                    />

                    {/* Rating */}
                    <View>
                        <View style={styles.rateContainer}>
                            <AntDesign name="star" style={styles.starIcon} />
                            <Text style={styles.voteText}>
                                {vote_average} ({vote_count})
                            </Text>
                        </View>

                        {/* Title */}
                        <Text numberOfLines={1} style={styles.textTitle}>
                            {title}
                        </Text>

                        {/* Genres */}
                        <View style={styles.genreContainer}>
                            {genre.map((item: any) => {
                                return (
                                    <View key={item} style={styles.genreBox}>
                                        <Text style={styles.genreText}>{genres[item]}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20,
    },
    textTitle: {
        // fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
        textAlign: 'center',
        paddingVertical: SPACING.space_10,
    },
    rateContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_10,
    },
    starIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.Yellow,
    },
    voteText: {
        // fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING.space_20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    genreBox: {
        borderColor: COLORS.WhiteRGBA50,
        borderWidth: 1,
        paddingVertical: SPACING.space_4,
        paddingHorizontal: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_25,
    },
    genreText: {
        // fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: COLORS.WhiteRGBA75,
    },
});


export default MovieCard