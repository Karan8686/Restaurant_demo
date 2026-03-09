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
                    <View key={service.id} style={[styles.card, isMobile && { width: '45%', aspectRatio: 1.2 }]}>
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: Spacing.lg,
        maxWidth: 900,
    },
    card: {
        width: 160,
        aspectRatio: 1.1,
        backgroundColor: Colors.surface,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.md,
        borderWidth: 1,
        borderColor: 'rgba(224, 181, 77, 0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(224, 181, 77, 0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: 'rgba(224, 181, 77, 0.2)',
    },
    label: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.sm,
        textAlign: 'center',
        letterSpacing: 1,
    },
});
