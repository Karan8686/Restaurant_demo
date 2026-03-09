import React, { useEffect } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function Hero() {
    const { width, height } = useWindowDimensions();
    const isMobile = width < 768;

    const opacity = useSharedValue(0);
    const translateY = useSharedValue(30);

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
                <View style={styles.overlay} />

                <Animated.View style={[styles.content, animatedStyles, { width: isMobile ? '90%' : '70%' }]}>
                    <Text style={styles.title}>Vrindavan{"\n"}Kitchen & Bar</Text>
                    <Text style={styles.subtitle}>Authentic Indian Flavors • Elegant Dining Experience</Text>

                    <View style={[styles.buttonGroup, isMobile && styles.buttonGroupMobile]}>
                        <Pressable style={[styles.button, styles.primaryButton]}>
                            <Text style={styles.primaryButtonText}>View Menu</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.secondaryButton]}>
                            <Text style={styles.secondaryButtonText}>Reserve Table</Text>
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
        backgroundColor: 'rgba(26, 20, 18, 0.7)',
    },
    content: {
        alignItems: 'center',
        marginTop: 80, // Offset for navbar
    },
    title: {
        fontFamily: Typography.fontFamily.heading,
        fontSize: Typography.fontSize.hero,
        color: Colors.primary,
        textAlign: 'center',
        lineHeight: 70,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
        marginBottom: Spacing.md,
    },
    subtitle: {
        fontFamily: Typography.fontFamily.body,
        fontSize: Typography.fontSize.lg,
        color: Colors.text,
        textAlign: 'center',
        letterSpacing: 2,
        marginBottom: Spacing.xl,
        textTransform: 'uppercase',
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
        borderRadius: 4,
        minWidth: 180,
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: Colors.accent,
    },
    primaryButtonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.base,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    secondaryButtonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.base,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
