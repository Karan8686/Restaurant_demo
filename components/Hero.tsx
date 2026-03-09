import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function Hero() {
    const { width, height } = useWindowDimensions();
    const isMobile = width < 768;

    const opacity = useSharedValue(0);
    const translateY = useSharedValue(30);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const [isReserveHovered, setIsReserveHovered] = useState(false);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
        translateY.value = withTiming(0, { duration: 1000, easing: Easing.out(Easing.exp) });
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={[styles.container, { height }]}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' }}
                style={styles.background}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(18, 14, 13, 0.4)', 'rgba(18, 14, 13, 0.8)', Colors.background]}
                    style={styles.overlay}
                />

                <Animated.View style={[styles.content, animatedStyles, { width: isMobile ? '90%' : '70%' }]}>
                    <Text style={[styles.title, isMobile && { fontSize: 48, lineHeight: 56 }]}>Vrindavan{"\n"}Kitchen & Bar</Text>
                    <View style={styles.divider} />
                    <Text style={styles.subtitle}>Authentic Indian Flavors • Elegant Dining Experience</Text>

                    <View style={[styles.buttonGroup, isMobile && styles.buttonGroupMobile]}>
                        <Pressable
                            style={[styles.button, styles.primaryButton, isMenuHovered && styles.primaryButtonHovered]}
                            onHoverIn={() => setIsMenuHovered(true)}
                            onHoverOut={() => setIsMenuHovered(false)}
                        >
                            <Text style={styles.primaryButtonText}>View Menu</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.secondaryButton, isReserveHovered && styles.secondaryButtonHovered]}
                            onHoverIn={() => setIsReserveHovered(true)}
                            onHoverOut={() => setIsReserveHovered(false)}
                        >
                            <Text style={[styles.secondaryButtonText, isReserveHovered && styles.secondaryButtonTextHovered]}>Reserve Table</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        alignItems: 'center',
        marginTop: 80, // Offset for navbar
    },
    title: {
        fontFamily: Typography.fontFamily.heading,
        fontSize: Typography.fontSize.hero * 1.2,
        color: Colors.primary,
        textAlign: 'center',
        lineHeight: 80,
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 15,
        marginBottom: Spacing.md,
    },
    divider: {
        width: 80,
        height: 2,
        backgroundColor: Colors.primary,
        marginBottom: Spacing.lg,
        opacity: 0.8,
    },
    subtitle: {
        fontFamily: Typography.fontFamily.body,
        fontSize: Typography.fontSize.lg,
        color: Colors.text,
        textAlign: 'center',
        letterSpacing: 3,
        marginBottom: Spacing.xl,
        textTransform: 'uppercase',
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: Spacing.md,
    },
    buttonGroupMobile: {
        flexDirection: 'column',
        width: '100%',
    },
    button: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        borderRadius: 2,
        minWidth: 180,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    primaryButtonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.background,
        fontSize: Typography.fontSize.base,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    primaryButtonHovered: {
        backgroundColor: '#f5d172',
        transform: [{ scale: 1.02 }],
    },
    secondaryButton: {
        backgroundColor: 'rgba(18, 14, 13, 0.5)',
        borderWidth: 1,
        borderColor: Colors.primary,
        transitionDuration: '0.2s',
    },
    secondaryButtonHovered: {
        backgroundColor: Colors.primary,
        transform: [{ scale: 1.02 }],
    },
    secondaryButtonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.base,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    secondaryButtonTextHovered: {
        color: Colors.background,
    },
});
