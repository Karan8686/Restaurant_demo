import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import About from '../components/About';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

export default function App() {
    const scrollViewRef = useRef<ScrollView>(null);
    const [sectionLayouts, setSectionLayouts] = useState<Record<string, number>>({});

    const handleLayout = (section: string) => (event: any) => {
        const { y } = event.nativeEvent.layout;
        setSectionLayouts((prev) => ({ ...prev, [section]: y }));
    };

    const scrollToSection = (section: string) => {
        const yOffset = sectionLayouts[section];
        if (yOffset !== undefined && scrollViewRef.current) {
            // Subtracting header height (approx 80px) so it doesn't overlap the section title
            scrollViewRef.current.scrollTo({ y: Math.max(0, yOffset - 80), animated: true });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <Hero />

                <View onLayout={handleLayout('about')}>
                    <About />
                </View>

                <View onLayout={handleLayout('menu')}>
                    <Menu />
                </View>

                <View onLayout={handleLayout('gallery')}>
                    <Gallery />
                </View>

                <Reviews />
                <Services />

                <View onLayout={handleLayout('contact')}>
                    <Location />
                </View>

                <Footer />
            </ScrollView>
            <Navbar scrollToSection={scrollToSection} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    scrollView: {
        flex: 1,
    },
});
