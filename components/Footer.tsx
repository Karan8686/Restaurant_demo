import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function Footer() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <View style={[styles.grid, isMobile && styles.gridMobile]}>

                <View style={styles.column}>
                    <Text style={styles.logo}>Vrindavan</Text>
                    <Text style={styles.tagline}>Authentic Indian Flavors{'\n'}Elegant Dining Experience</Text>
                    <View style={styles.socials}>
                        <Pressable style={styles.socialIcon}><Ionicons name="logo-instagram" size={20} color={Colors.primary} /></Pressable>
                        <Pressable style={styles.socialIcon}><Ionicons name="logo-facebook" size={20} color={Colors.primary} /></Pressable>
                        <Pressable style={styles.socialIcon}><Ionicons name="logo-twitter" size={20} color={Colors.primary} /></Pressable>
                    </View>
                </View>

                <View style={styles.column}>
                    <Text style={styles.heading}>Quick Links</Text>
                    <Pressable><Text style={styles.link}>Our Menu</Text></Pressable>
                    <Pressable><Text style={styles.link}>Make a Reservation</Text></Pressable>
                    <Pressable><Text style={styles.link}>Private Dining</Text></Pressable>
                    <Pressable><Text style={styles.link}>About Us</Text></Pressable>
                    <Pressable><Text style={styles.link}>Contact</Text></Pressable>
                </View>

                <View style={styles.column}>
                    <Text style={styles.heading}>Newsletter</Text>
                    <Text style={styles.link}>Subscribe to receive updates, access to exclusive deals, and more.</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputPlaceholder}>Enter your email address</Text>
                        <Pressable style={styles.subscribeBtn}>
                            <Text style={styles.subscribeText}>Subscribe</Text>
                        </Pressable>
                    </View>
                </View>

            </View>

            <View style={styles.bottomBar}>
                <Text style={styles.copyright}>© {new Date().getFullYear()} Vrindavan Kitchen & Bar. All rights reserved.</Text>
                <View style={styles.bottomLinks}>
                    <Pressable><Text style={styles.bottomLink}>Privacy Policy</Text></Pressable>
                    <Pressable><Text style={styles.bottomLink}>Terms of Service</Text></Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingTop: Spacing.hero,
        paddingHorizontal: '10%',
        borderTopWidth: 1,
        borderTopColor: 'rgba(212, 175, 55, 0.1)',
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: Spacing.xl,
        paddingBottom: Spacing.hero,
    },
    gridMobile: {
        flexDirection: 'column',
        gap: Spacing.xxl,
    },
    column: {
        flex: 1,
        minWidth: 200,
    },
    logo: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.primary,
        fontSize: Typography.fontSize.xl,
        letterSpacing: 2,
        textTransform: 'uppercase',
        marginBottom: Spacing.md,
    },
    tagline: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.sm,
        lineHeight: 20,
        marginBottom: Spacing.lg,
    },
    socials: {
        flexDirection: 'row',
        gap: Spacing.md,
    },
    socialIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.lg,
        marginBottom: Spacing.lg,
    },
    link: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.sm,
        marginBottom: Spacing.md,
        lineHeight: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(212, 175, 55, 0.5)',
        paddingBottom: Spacing.xs,
        marginTop: Spacing.md,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputPlaceholder: {
        fontFamily: Typography.fontFamily.body,
        color: 'rgba(253, 251, 247, 0.3)',
        fontSize: Typography.fontSize.sm,
    },
    subscribeBtn: {
        padding: Spacing.xs,
    },
    subscribeText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.xs,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.lg,
        borderTopWidth: 1,
        borderTopColor: 'rgba(212, 175, 55, 0.1)',
        flexWrap: 'wrap',
        gap: Spacing.sm,
    },
    copyright: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.xs,
    },
    bottomLinks: {
        flexDirection: 'row',
        gap: Spacing.lg,
    },
    bottomLink: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.xs,
    },
});
