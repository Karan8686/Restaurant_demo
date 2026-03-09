import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Colors, Spacing, Typography } from '../constants/theme';

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
                        <Image key={index} source={{ uri: img }} style={styles.reviewImage} />
                    ))}
                </ScrollView>
            )}

            <View style={styles.reviewerInfo}>
                <Image source={{ uri: review.avatar }} style={styles.avatar} />
                <View>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    <View style={styles.googleVerified}>
                        <Ionicons name="checkmark-circle" size={12} color="#4285F4" style={{ marginRight: 4 }} />
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

            <Pressable style={styles.viewMoreButton} onPress={handleViewOnGoogle}>
                <Text style={styles.viewMoreText}>View All Reviews on Google</Text>
                <Ionicons name="arrow-forward" size={16} color={Colors.background} style={{ marginLeft: Spacing.sm }} />
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
        width: '100%',
        gap: Spacing.lg,
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
        padding: Spacing.xl,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(212, 175, 55, 0.1)',
        flex: 1,
    },
    stars: {
        flexDirection: 'row',
        marginBottom: Spacing.md,
        gap: 2,
    },
    reviewText: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.base,
        lineHeight: 24,
        marginBottom: Spacing.md,
    },
    imageScroll: {
        marginBottom: Spacing.xl,
    },
    imageScrollContent: {
        gap: Spacing.sm,
    },
    reviewImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: Spacing.md,
    },
    reviewerName: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.base,
        marginBottom: 4,
    },
    googleVerified: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleText: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.xs,
    },
    viewMoreButton: {
        marginTop: Spacing.xxl,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        borderRadius: 4,
    },
    viewMoreText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.background,
        fontSize: Typography.fontSize.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
