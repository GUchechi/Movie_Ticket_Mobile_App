import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/Theme';
import { Feather } from '@expo/vector-icons';

const InputHeader = ({searchFunction}: any) => {
    const [searchText, setSearchText] = useState<string>('');
    return (
        <View style={styles.inputBox}>
            <TextInput
                style={styles.textInput}
                onChangeText={textInput => setSearchText(textInput)}
                value={searchText}
                placeholder="Search Your Movies..."
                placeholderTextColor={COLORS.WhiteRGBA32}
            />
            <TouchableOpacity
                style={styles.searchIcon}
                onPress={() => searchFunction(searchText)}>
                <Feather
                    name="search"
                    color={COLORS.Primary}
                    size={FONTSIZE.size_20}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_24,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_25,
        flexDirection: 'row',
    },
    textInput: {
        width: '90%',
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
    },
    searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.space_10,
    },
});

export default InputHeader;
