import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function Navbar() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={[styles.container, { paddingHorizontal: isMobile ? Spacing.md : Spacing.xxl }]}>
            <Text style={styles.logo}>Vrindavan</Text>

            {!isMobile ? (
                <View style={styles.links}>
                    <Pressable><Text style={styles.link}>Menu</Text></Pressable>
                    <Pressable><Text style={styles.link}>Gallery</Text></Pressable>
                    <Pressable><Text style={styles.link}>About</Text></Pressable>
                    <Pressable><Text style={styles.link}>Contact</Text></Pressable>
                </View>
            ) : null}

            <View style={styles.actions}>
                {!isMobile && (
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Book Table</Text>
                    </Pressable>
                )}
                {isMobile && (
                    <Pressable style={styles.menuIcon}>
                        <Ionicons name="menu" size={28} color={Colors.text} />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(26, 20, 18, 0.85)',
        backdropFilter: 'blur(10px)',
        position: 'absolute',
        top: 0,
        zIndex: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(212, 175, 55, 0.1)',
    },
    logo: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.primary,
        fontSize: Typography.fontSize.xl,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    links: {
        flexDirection: 'row',
        gap: Spacing.xl,
    },
    link: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.accent,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.lg,
        borderRadius: 4,
    },
    buttonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    menuIcon: {
        padding: Spacing.xs,
    },
});
