import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/Theme';

interface ActionHeaderProps {
    action: any;
    header: string;
}

const AppHeader: React.FC<ActionHeaderProps> = ({ action, header }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBG} onPress={() => action()}>
                <AntDesign name={'closecircleo'} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{header}</Text>
            <View style={styles.emptyContainer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: COLORS.Grey,
        fontSize: FONTSIZE.size_24,
    },
    headerText: {
        flex: 1,
        // fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        color: COLORS.White,
    },
    emptyContainer: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
    },
    iconBG: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.Primary,
    },
});

export default AppHeader;
