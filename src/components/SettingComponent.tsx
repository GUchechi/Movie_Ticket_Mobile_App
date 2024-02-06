import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../theme/Theme';
import { Feather } from '@expo/vector-icons';

type FeatherIconName = "user" | "settings" | "dollar-sign" | "info"
interface SettingComponentProps {
    icon: FeatherIconName,
    heading: string,
    subheading: string,
    subtitle: string,
}

const SettingComponent: React.FC<SettingComponentProps> = ({ icon, heading, subheading, subtitle }) => {
    return (
        <View style={styles.container}>
            <View>
                <Feather name={icon} style={styles.iconStyle} />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>{heading}</Text>
                <Text style={styles.subtitle}>{subheading}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.iconBG}>
                <Feather name={'arrow-right'} style={styles.iconStyle} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SPACING.space_20,
    },
    settingContainer: {
        flex: 1,
    },
    iconStyle: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_24,
        paddingHorizontal: SPACING.space_20,
    },
    iconBG: {
        justifyContent: 'center',
    },
    title: {
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
    },
    subtitle: {
        fontSize: FONTSIZE.size_14,
        color: 'grey',
    },
});

export default SettingComponent