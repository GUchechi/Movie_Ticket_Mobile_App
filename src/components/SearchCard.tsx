import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/Theme';

interface SearchScreenProps {
    title: string;
    imagePath: any;
    shouldMarginatedAround: any,
    cardFunction: any;
    cardWidth: any,
    isFirst: any;
    isLast: any;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ title, imagePath, shouldMarginatedAround, cardFunction, cardWidth, isFirst, isLast }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => cardFunction()}>
                <View
                    style={[
                        styles.container,
                        shouldMarginatedAround
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
                    <Text numberOfLines={1} style={styles.textTitle}>
                        {title}
                    </Text>
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
        fontSize: FONTSIZE.size_16,
        color: COLORS.White,
        textAlign: 'center',
        paddingVertical: SPACING.space_10,
    },
});

export default SearchScreen