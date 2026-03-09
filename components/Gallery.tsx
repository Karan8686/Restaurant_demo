import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';
import HoverImage from './HoverImage';

const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop', // Restaurant Interior
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop', // Spring Rolls
    'https://images.unsplash.com/photo-1551881192-002ab5b497f6?q=80&w=1000&auto=format&fit=crop', // Paneer Dish
    'https://images.unsplash.com/photo-1597289124948-688c1a35cb48?q=80&w=1000&auto=format&fit=crop', // Tandoori Chicken
];

export default function Gallery() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Moments</Text>
            <Text style={styles.heading}>Our Gallery</Text>

            <View style={[styles.grid, isMobile && styles.gridMobile]}>
                <View style={[styles.column, isMobile && { width: '100%' }]}>
                    <HoverImage source={{ uri: GALLERY_IMAGES[0] }} containerStyle={[styles.image, { height: 400 }]} />
                    <HoverImage source={{ uri: GALLERY_IMAGES[1] }} containerStyle={[styles.image, { height: 250 }]} />
                </View>

                <View style={[styles.column, isMobile && { width: '100%' }]}>
                    <HoverImage source={{ uri: GALLERY_IMAGES[2] }} containerStyle={[styles.image, { height: 250 }]} />
                    <HoverImage source={{ uri: GALLERY_IMAGES[3] }} containerStyle={[styles.image, { height: 400 }]} />
                </View>
            </View>

            <Pressable style={styles.instagramBtn}>
                <Ionicons name="logo-instagram" size={20} color={Colors.primary} style={{ marginRight: 8 }} />
                <Text style={styles.instagramText}>Follow us on Instagram</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: Spacing.hero,
        paddingHorizontal: '10%',
        alignItems: 'center',
    },
    sectionTitle: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 3,
        marginBottom: Spacing.sm,
    },
    heading: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.xxl,
        marginBottom: Spacing.xl * 1.5,
    },
    grid: {
        flexDirection: 'row',
        width: '100%',
        gap: Spacing.lg,
    },
    gridMobile: {
        flexDirection: 'column',
    },
    column: {
        flex: 1,
        gap: Spacing.lg,
    },
    image: {
        width: '100%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(224, 181, 77, 0.1)',
    },
    instagramBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.xxl,
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
    },
    instagramText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.base,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
});
