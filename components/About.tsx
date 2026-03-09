import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function About() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={[styles.container, isMobile ? styles.containerMobile : styles.containerDesktop]}>
            <View style={[styles.imageContainer, isMobile && { width: '100%', aspectRatio: 1.5 }]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop' }}
                    style={styles.image}
                />
                <View style={styles.goldBox} />
            </View>

            <View style={[styles.textContainer, isMobile && { width: '100%', paddingLeft: 0, marginTop: Spacing.xl }]}>
                <Text style={styles.sectionTitle}>The Experience</Text>
                <Text style={styles.heading}>A Journey of Flavors</Text>
                <Text style={styles.description}>
                    Step into a world where traditional Indian culinary arts meet modern elegance.
                    Vrindavan Kitchen & Bar offers a cozy yet trendy atmosphere, perfect for everything
                    from intimate dinners to lively gatherings.
                </Text>
                <Text style={styles.description}>
                    Our expert chefs craft authentic dishes using the finest ingredients,
                    while our mixologists serve up signature cocktails and fine spirits at our premium bar.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: Spacing.hero,
        paddingHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDesktop: {
        flexDirection: 'row',
    },
    containerMobile: {
        flexDirection: 'column',
    },
    imageContainer: {
        width: '50%',
        aspectRatio: 1,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: 2,
    },
    goldBox: {
        position: 'absolute',
        top: -20,
        left: -20,
        width: '50%',
        height: '50%',
        borderWidth: 2,
        borderColor: Colors.primary,
        zIndex: 1,
    },
    textContainer: {
        width: '50%',
        paddingLeft: Spacing.xxl,
        justifyContent: 'center',
    },
    sectionTitle: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: Spacing.sm,
    },
    heading: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.xxl,
        marginBottom: Spacing.lg,
    },
    description: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.base,
        lineHeight: 28,
        marginBottom: Spacing.md,
    },
});
