import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

interface NavbarProps {
    scrollToSection?: (section: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isBtnHovered, setIsBtnHovered] = useState(false);

    return (
        <View style={[styles.container, { paddingHorizontal: isMobile ? Spacing.md : Spacing.xxl }]}>
            <Text style={styles.logo}>Vrindavan</Text>

            {!isMobile ? (
                <View style={styles.links}>
                    {['Menu', 'Gallery', 'About', 'Contact'].map((link) => (
                        <Pressable
                            key={link.toLowerCase()}
                            onPress={() => scrollToSection?.(link.toLowerCase())}
                            onHoverIn={() => setHoveredLink(link)}
                            onHoverOut={() => setHoveredLink(null)}
                        >
                            <Text style={[styles.link, hoveredLink === link && styles.linkHovered]}>{link}</Text>
                        </Pressable>
                    ))}
                </View>
            ) : null}

            <View style={styles.actions}>
                {!isMobile && (
                    <Pressable
                        style={[styles.button, isBtnHovered && styles.buttonHovered]}
                        onPress={() => scrollToSection?.('contact')}
                        onHoverIn={() => setIsBtnHovered(true)}
                        onHoverOut={() => setIsBtnHovered(false)}
                    >
                        <Text style={[styles.buttonText, isBtnHovered && styles.buttonTextHovered]}>Book Table</Text>
                    </Pressable>
                )}
                {isMobile && (
                    <Pressable style={styles.menuIcon}>
                        <Ionicons name="menu" size={28} color={Colors.primary} />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 90, // Taller for elegance
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(18, 14, 13, 0.90)', // Deeper background
        backdropFilter: 'blur(15px)',
        position: 'absolute',
        top: 0,
        zIndex: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(224, 181, 77, 0.15)', // Richer gold alpha
    },
    logo: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.primary,
        fontSize: Typography.fontSize.xxl,
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
    links: {
        flexDirection: 'row',
        gap: Spacing.xl * 1.5,
    },
    link: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.text,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 2,
        transitionDuration: '0.2s',
    },
    linkHovered: {
        color: Colors.primary,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 2,
        transitionDuration: '0.2s',
    },
    buttonHovered: {
        backgroundColor: Colors.primary,
    },
    buttonText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    buttonTextHovered: {
        color: Colors.background,
    },
    menuIcon: {
        padding: Spacing.xs,
    },
});
