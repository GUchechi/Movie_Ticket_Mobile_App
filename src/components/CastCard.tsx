import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
    BORDERRADIUS,
    COLORS,
    FONTSIZE,
    SPACING,
} from '../theme/Theme';



const CastCard = ({ shouldMarginatedAtEnd, cardWidth, isFirst, isLast, imagePath, title, subtitle }: any) => {
    return (
        <View
            style={[
                styles.container,
                shouldMarginatedAtEnd
                    ? isFirst
                        ? { marginLeft: SPACING.space_24 }
                        : isLast
                            ? { marginRight: SPACING.space_24 }
                            : {}
                    : {},
                { maxWidth: cardWidth },
            ]}>
            <Image
                source={{ uri: imagePath }}
                style={[styles.cardImage, { width: cardWidth }]}
            />
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1}>
                {subtitle}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    cardImage: {
        aspectRatio: 1920 / 2000,
        borderRadius: BORDERRADIUS.radius_25 * 4,
    },
    title: {
        alignSelf: 'center',
        // fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        fontWeight: 'bold',
        color: COLORS.White,
        marginTop: 5,
    },
    subtitle: {
        alignSelf: 'center',
        // fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLORS.Primary,
    },
});

export default CastCard;