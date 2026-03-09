import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

const SERVICES = [
    { id: '1', icon: 'restaurant', label: 'Dine-In' },
    { id: '2', icon: 'bag-handle', label: 'Takeaway' },
    { id: '3', icon: 'bicycle', label: 'Delivery' },
    { id: '4', icon: 'calendar', label: 'Reservations' },
    { id: '5', icon: 'wine', label: 'Bar on Site' },
    { id: '6', icon: 'car', label: 'Free Parking' },
    { id: '7', icon: 'people', label: 'Good for Groups' },
    { id: '8', icon: 'accessibility', label: 'Wheelchair Accessible' },
];

export default function Services() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Amenities</Text>
            <Text style={styles.heading}>What We Offer</Text>

            <View style={styles.grid}>
                {SERVICES.map((service) => (
                    <View key={service.id} style={[styles.card, isMobile && { width: '45%' }]}>
                        <View style={styles.iconContainer}>
                            <Ionicons name={service.icon as any} size={28} color={Colors.primary} />
                        </View>
                        <Text style={styles.label}>{service.label}</Text>
                    </View>
                ))}
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
        marginBottom: Spacing.xl,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: Spacing.md,
        maxWidth: 900,
    },
    card: {
        width: 150,
        aspectRatio: 1,
        backgroundColor: Colors.surface,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.md,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.05)',
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.md,
    },
    label: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.sm,
        textAlign: 'center',
    },
});
