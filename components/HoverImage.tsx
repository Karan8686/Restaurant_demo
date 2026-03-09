import React from 'react';
import { ImageProps, Platform, Pressable, StyleSheet, ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface HoverImageProps extends ImageProps {
    containerStyle?: ViewStyle | ViewStyle[];
}

export default function HoverImage({ containerStyle, style, ...props }: HoverImageProps) {
    const glareTranslateX = useSharedValue(-100);
    const scale = useSharedValue(1);

    const animatedGlareStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { skewX: '-20deg' },
                { translateX: `${glareTranslateX.value}%` as any }
            ],
        };
    });

    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handleHoverIn = () => {
        if (Platform.OS === 'web') {
            scale.value = withTiming(1.05, { duration: 400, easing: Easing.out(Easing.exp) });
            glareTranslateX.value = -100;
            glareTranslateX.value = withTiming(200, { duration: 800, easing: Easing.inOut(Easing.ease) });
        }
    };

    const handleHoverOut = () => {
        if (Platform.OS === 'web') {
            scale.value = withTiming(1, { duration: 400, easing: Easing.out(Easing.exp) });
        }
    };

    return (
        <Pressable
            style={[styles.container, containerStyle, Platform.OS === 'web' && { cursor: 'default' } as any]}
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
        >
            <Animated.Image style={[styles.image, style, animatedImageStyle]} {...props} />
            {Platform.OS === 'web' && (
                <Animated.View style={[styles.glare, animatedGlareStyle]} pointerEvents="none" />
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    glare: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    }
});
