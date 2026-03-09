import { ScrollView, StyleSheet } from 'react-native';
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
    return (
        <>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.container}>
                <Hero />
                <About />
                <Menu />
                <Gallery />
                <Reviews />
                <Services />
                <Location />
                <Footer />
            </ScrollView>
            <Navbar />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
});
