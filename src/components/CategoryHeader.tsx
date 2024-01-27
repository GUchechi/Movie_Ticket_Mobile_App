import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/Theme';

interface CategoryHeaderProp {
    title: string;
}

const CategoryHeader: React.FC<CategoryHeaderProp> = ({ title }) => {
    return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
    text: {
        // fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.Primary,
        paddingHorizontal: SPACING.space_36,
        paddingVertical: SPACING.space_28,
    },
});

export default CategoryHeader;