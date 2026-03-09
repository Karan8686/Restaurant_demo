import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors, Spacing, Typography } from '../constants/theme';

const MENU_CATEGORIES = ['South Indian Special', 'Veg Special', 'Paneer Dishes', 'Starters', 'Tandoori Dishes'];

const MENU_ITEMS = [
    // South Indian Special
    { id: '1', category: 'South Indian Special', name: 'Neer Dosa (3 Pcs)', desc: 'Thin, soft, lacy crepes made from rice batter.', price: '₹100', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=150&auto=format&fit=crop' },
    { id: '2', category: 'South Indian Special', name: 'Chicken Sukka', desc: 'Mangalorean special dry chicken curry with fresh coconut.', price: '₹385', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=150&auto=format&fit=crop' },
    { id: '3', category: 'South Indian Special', name: 'Mutton Sukka', desc: 'Tender mutton cooked in aromatic roasted spices and coconut.', price: '₹495', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=150&auto=format&fit=crop' },
    { id: '4', category: 'South Indian Special', name: 'Chicken Rotti', desc: 'Crispy rice wafers served with flavorful chicken curry.', price: '₹355', img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=150&auto=format&fit=crop' },

    // Veg Special
    { id: '5', category: 'Veg Special', name: 'Paneer Butter Garlic', desc: 'Soft paneer cubes tossed in a rich buttery garlic sauce.', price: '₹325', img: 'https://images.unsplash.com/photo-1551881192-002ab5b497f6?q=80&w=150&auto=format&fit=crop' },
    { id: '6', category: 'Veg Special', name: 'Mushroom Butter Garlic', desc: 'Fresh mushrooms pan-fried with butter and garlic.', price: '₹325', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=150&auto=format&fit=crop' },
    { id: '7', category: 'Veg Special', name: 'Baby Corn Butter Garlic', desc: 'Crispy baby corn in a buttery savory sauce.', price: '₹325', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=150&auto=format&fit=crop' },
    { id: '8', category: 'Veg Special', name: 'Dal Tadka', desc: 'Yellow lentils tempered with cumin, garlic and chilies.', price: '₹200', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=150&auto=format&fit=crop' },

    // Paneer Dishes
    { id: '9', category: 'Paneer Dishes', name: 'Paneer Tikka Masala', desc: 'Grilled paneer cubes in a spicy, rich tomato gravy.', price: '₹285', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=150&auto=format&fit=crop' },
    { id: '10', category: 'Paneer Dishes', name: 'Paneer Palak', desc: 'Paneer cooked in a smooth, mildly spiced spinach puree.', price: '₹270', img: 'https://images.unsplash.com/photo-1601050690597-df0568a70950?q=80&w=150&auto=format&fit=crop' },
    { id: '11', category: 'Paneer Dishes', name: 'Paneer Kadai', desc: 'Paneer cooked with bell peppers, tomatoes, and freshly ground spices.', price: '₹290', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=150&auto=format&fit=crop' },
    { id: '12', category: 'Paneer Dishes', name: 'Paneer Bhurji', desc: 'Scrambled paneer tossed with onions, tomatoes, and spices.', price: '₹305', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=150&auto=format&fit=crop' },

    // Starters
    { id: '13', category: 'Starters', name: 'Schezwan Samosa', desc: 'Crispy pastry filled with spicy Schezwan flavored filling.', price: '₹90', img: 'https://images.unsplash.com/photo-1601050690597-df0568a70950?q=80&w=150&auto=format&fit=crop' },
    { id: '14', category: 'Starters', name: 'Cheese Pakoda', desc: 'Deep-fried cheese fritters coated in gram flour.', price: '₹220', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=150&auto=format&fit=crop' },
    { id: '15', category: 'Starters', name: 'Cheese Cherry Pineapple', desc: 'A classic party snack with cheese and fruits.', price: '₹250', img: 'https://images.unsplash.com/photo-1625398407796-a29b0aa94161?q=80&w=150&auto=format&fit=crop' },
    { id: '16', category: 'Starters', name: 'Kanda Bhajiya', desc: 'Crispy onion fritters served with chutney.', price: '₹190', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=150&auto=format&fit=crop' },

    // Tandoori Dishes
    { id: '17', category: 'Tandoori Dishes', name: 'Chicken Tandoori (Full)', desc: 'Whole chicken marinated in yogurt and spices, roasted in tandoor.', price: '₹480', img: 'https://images.unsplash.com/photo-1597289124948-688c1a35cb48?q=80&w=150&auto=format&fit=crop' },
    { id: '18', category: 'Tandoori Dishes', name: 'Chicken Tikka', desc: 'Boneless chicken chunks marinated in spices and grilled.', price: '₹305', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=150&auto=format&fit=crop' },
    { id: '19', category: 'Tandoori Dishes', name: 'Chicken Seekh Kebab', desc: 'Minced chicken skewers seasoned with spices and grilled.', price: '₹310', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=150&auto=format&fit=crop' },
    { id: '20', category: 'Tandoori Dishes', name: 'Chicken Reshmi Kebab', desc: 'Silky textured chicken kebabs marinated in cream and cashew paste.', price: '₹320', img: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=150&auto=format&fit=crop' },
];

function MenuCard({ item }: { item: any }) {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Pressable
            onHoverIn={() => { scale.value = withSpring(1.03); }}
            onHoverOut={() => { scale.value = withSpring(1); }}
        >
            <Animated.View style={[styles.card, animatedStyle]}>
                <Image source={{ uri: item.img }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <View style={styles.dottedLine} />
                        <Text style={styles.cardPrice}>{item.price}</Text>
                    </View>
                    <Text style={styles.cardDesc}>{item.desc}</Text>
                </View>
            </Animated.View>
        </Pressable>
    );
}

export default function Menu() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

    const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Discover</Text>
            <Text style={styles.heading}>Our Featured Menu</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryScroll}
            >
                {MENU_CATEGORIES.map((cat) => (
                    <Pressable key={cat} onPress={() => setActiveCategory(cat)}>
                        <Text style={[styles.categoryText, activeCategory === cat && styles.activeCategoryText]}>
                            {cat}
                        </Text>
                        {activeCategory === cat && <View style={styles.activeIndicator} />}
                    </Pressable>
                ))}
            </ScrollView>

            <View style={[styles.grid, isMobile && { flexDirection: 'column' }]}>
                {filteredItems.map(item => (
                    <View key={item.id} style={[styles.gridItem, isMobile && { width: '100%' }]}>
                        <MenuCard item={item} />
                    </View>
                ))}
            </View>

            <Pressable style={styles.viewAllBtn}>
                <Text style={styles.viewAllText}>View Full Menu</Text>
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
    categoryScroll: {
        paddingBottom: Spacing.md,
        gap: Spacing.xl,
        marginBottom: Spacing.xl,
    },
    categoryText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.base,
        letterSpacing: 1,
    },
    activeCategoryText: {
        color: Colors.primary,
    },
    activeIndicator: {
        height: 2,
        backgroundColor: Colors.primary,
        marginTop: 4,
        width: '100%',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        gap: Spacing.xl,
    },
    gridItem: {
        width: '47%',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.lg,
        backgroundColor: Colors.background,
        borderRadius: 8,
        padding: Spacing.sm,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: Spacing.md,
    },
    cardContent: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    cardTitle: {
        fontFamily: Typography.fontFamily.heading,
        color: Colors.text,
        fontSize: Typography.fontSize.lg,
    },
    dottedLine: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(212, 175, 55, 0.3)',
        borderStyle: 'dashed',
        marginHorizontal: Spacing.sm,
        marginBottom: 6,
    },
    cardPrice: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        fontSize: Typography.fontSize.lg,
    },
    cardDesc: {
        fontFamily: Typography.fontFamily.body,
        color: Colors.textMuted,
        fontSize: Typography.fontSize.sm,
        lineHeight: 20,
    },
    viewAllBtn: {
        marginTop: Spacing.xl,
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.xl,
        borderRadius: 4,
    },
    viewAllText: {
        fontFamily: Typography.fontFamily.bodyMedium,
        color: Colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
