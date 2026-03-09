import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function Location() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    const handleDirections = () => {
        Linking.openURL('https://maps.app.goo.gl/jHv6X7gGCJHWKaL9A');
    };

    return (
        <View style={[styles.container, isMobile ? styles.containerMobile : styles.containerDesktop]}>
            <View style={[styles.infoContainer, isMobile && { width: '100%', marginBottom: Spacing.xl }]}>
                <Text style={styles.sectionTitle}>Visit Us</Text>
                <Text style={styles.heading}>Location & Hours</Text>

                <View style={styles.detailRow}>
                    <Ionicons name="location" size={24} color={Colors.primary} style={styles.icon} />
                    <View>
                        <Text style={styles.detailTitle}>Address</Text>
                        <Text style={styles.detailText}>123 Culinary Boulevard,{'\n'}Downtown District, CA 90210</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Ionicons name="time" size={24} color={Colors.primary} style={styles.icon} />
                    <View>
                        <Text style={styles.detailTitle}>Opening Hours</Text>
                        <Text style={styles.detailText}>Mon - Thu: 11:30 AM - 10:00 PM{'\n'}Fri - Sun: 11:30 AM - 11:00 PM</Text>
                    </View>
                </View>

                <View style={styles.detailRow}>
                    <Ionicons name="call" size={24} color={Colors.primary} style={styles.icon} />
                    <View>
                        <Text style={styles.detailTitle}>Contact</Text>
                        <Text style={styles.detailText}>+1 (555) 123-4567{'\n'}reservations@vrindavankitchen.com</Text>
                    </View>
                </View>

                <Pressable style={styles.button} onPress={handleDirections}>
                    <Text style={styles.buttonText}>Get Directions</Text>
                </Pressable>
            </View>

            <Pressable
                style={[styles.mapContainer, isMobile && { width: '100%', aspectRatio: 1 }]}
                onPress={handleDirections}
            >
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop' }}
                    style={styles.mapImage}
                />
                <View style={styles.mapOverlay}>
                    <View style={styles.mapPin}>
                        <Ionicons name="location" size={32} color={Colors.accent} />
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface,
        paddingVertical: Spacing.hero,
        paddingHorizontal: '10%',
    },
    containerDesktop: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerMobile: {
        flexDirection: 'column',
    },
    infoContainer: {
        width: '40%',
        paddingRight: Spacing.xl,
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
    detailRow: {
        flexDirection: 'row',
        marginBottom: Spacing.lg,
    },
    icon: {
        marginRight: Spacing.md,
        marginTop: 2,
    },
    detailTitle: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.lg,
        marginBottom: 4,
    },
    detailText: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.base,
        lineHeight: 24,
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.xl,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop: Spacing.sm,
    },
    buttonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    mapContainer: {
        width: '60%',
        aspectRatio: 1.5,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    mapImage: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    mapOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(26, 20, 18, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapPin: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
});
