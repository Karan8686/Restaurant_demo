import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';
import HoverImage from './HoverImage';

const REVIEWS = [
    {
        id: '1',
        name: 'Sarah Williams',
        rating: 5,
        text: 'Absolutely phenomenal dining experience. The Butter Chicken was the best I have ever had. The ambiance is beautifully designed with a perfect blend of modern and traditional.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=300&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=300&auto=format&fit=crop'
        ]
    },
    {
        id: '2',
        name: 'James Peterson',
        rating: 5,
        text: 'Outstanding service and extremely authentic flavors. Must try the special dosas! Will definitely be coming back with family.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop'
        ]
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        rating: 4,
        text: 'Lovely interior and great cocktails at the bar. The Starters were fantastic, highly recommend the Paneer Tikka. Make sure to reserve in advance.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
        images: []
    },
];

function ReviewCard({ review }: { review: any }) {
    return (
        <View style={styles.card}>
            <View style={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                    <Ionicons key={i} name="star" size={16} color={Colors.primary} />
                ))}
            </View>
            <Text style={styles.reviewText}>"{review.text}"</Text>

            {review.images && review.images.length > 0 && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.imageScroll}
                    contentContainerStyle={styles.imageScrollContent}
                >
                    {review.images.map((img: string, index: number) => (
                        <HoverImage key={index} source={{ uri: img }} containerStyle={styles.reviewImage as any} />
                    ))}
                </ScrollView>
            )}

            <View style={styles.reviewerInfo}>
                <Image source={{ uri: review.avatar }} style={styles.avatar} />
                <View>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    <View style={styles.googleVerified}>
                        <Ionicons name="checkmark-circle" size={14} color="#4285F4" style={{ marginRight: 6 }} />
                        <Text style={styles.googleText}>Google Review</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default function Reviews() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const [isBtnHovered, setIsBtnHovered] = useState(false);

    const handleViewOnGoogle = () => {
        Linking.openURL('https://maps.app.goo.gl/LH1oMthLH3NRsj4f9');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Testimonials</Text>
            <Text style={styles.heading}>What Our Guests Say</Text>

            <View style={[styles.grid, isMobile && styles.gridMobile]}>
                {REVIEWS.map(review => (
                    <View key={review.id} style={[styles.gridItem, isMobile && { width: '100%' }]}>
                        <ReviewCard review={review} />
                    </View>
                ))}
            </View>

            <Pressable
                style={[styles.viewMoreButton, isBtnHovered && { backgroundColor: Colors.primary }]}
                onPress={handleViewOnGoogle}
                onHoverIn={() => setIsBtnHovered(true)}
                onHoverOut={() => setIsBtnHovered(false)}
            >
                <Text style={[styles.viewMoreText, isBtnHovered && { color: Colors.background }]}>View All Reviews on Google</Text>
                <Ionicons name="arrow-forward" size={16} color={isBtnHovered ? Colors.background : Colors.primary} style={{ marginLeft: Spacing.md }} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface,
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
        gap: Spacing.xl,
        justifyContent: 'center',
    },
    gridMobile: {
        flexDirection: 'column',
    },
    gridItem: {
        flex: 1,
        minWidth: 300,
    },
    card: {
        backgroundColor: Colors.background,
        padding: Spacing.xxl,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(224, 181, 77, 0.1)',
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
    },
    stars: {
        flexDirection: 'row',
        marginBottom: Spacing.lg,
        gap: 4,
    },
    reviewText: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.base,
        lineHeight: 28,
        marginBottom: Spacing.xl,
        fontStyle: 'italic',
    },
    imageScroll: {
        marginBottom: Spacing.xl,
    },
    imageScrollContent: {
        gap: Spacing.md,
    },
    reviewImage: {
        width: 120,
        height: 120,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(224, 181, 77, 0.2)',
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        borderTopWidth: 1,
        borderTopColor: 'rgba(224, 181, 77, 0.1)',
        paddingTop: Spacing.lg,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: Spacing.lg,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    reviewerName: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.lg,
        marginBottom: 4,
    },
    googleVerified: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.xs,
        letterSpacing: 0.5,
    },
    viewMoreButton: {
        marginTop: Spacing.xxl * 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    viewMoreText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.base,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});
