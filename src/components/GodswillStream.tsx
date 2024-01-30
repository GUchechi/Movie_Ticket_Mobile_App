import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../theme/Theme'
import { Feather } from '@expo/vector-icons'

interface GodswillStream {
    searchMoviesFunction: () => void;
}

const GodswillStream: React.FC<GodswillStream> = ({ searchMoviesFunction }) => {

    return (
        <View style={styles.InputHeaderContainer}>
            <View style={styles.GodswillStream}>
                <View style={styles.GodswillStreamBG}>
                    <Text style={{ color: COLORS.DarkGrey, fontWeight: 'bold', fontSize: 17 }}>Godswill</Text>
                </View>
                <Text style={{ color: COLORS.Primary, fontWeight: 'bold', fontSize: 25 }}>stream</Text>
            </View>

            {/* Search Icon */}
            <TouchableOpacity
                style={styles.searchIcon}
                onPress={searchMoviesFunction}>
                <Feather
                    name="search"
                    color={COLORS.Primary}
                    size={FONTSIZE.size_20}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    InputHeaderContainer: {
        marginHorizontal: SPACING.space_24,
        marginTop: SPACING.space_28,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    GodswillStream: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 5,
    },
    GodswillStreamBG: {
        backgroundColor: COLORS.Primary,
        padding: 11,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.space_10,
    },
})

export default GodswillStream
