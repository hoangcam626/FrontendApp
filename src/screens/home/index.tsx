import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput, Dimensions} from 'react-native';
import st from './styles'
import Carousel from 'react-native-reanimated-carousel';


const Home=() =>{
    const styles = st().st;
    const SLIDER_HEIGHT = st().SLIDER_HEIGHT;
    const SLIDER_WIDTH = st().SLIDER_WIDTH;
    const carouselRef = useRef(null);
    const images  = [
        // { id: 1, location: 'New York', image: require('../../../assets/VN.jpg') },
        { id: '1', image: require('../../../assets/TempleofliteratureVietnam.jpg') },
        { id: '2', image: require('../../../assets/hue.jpg') },
        { id: '3', image: require('../../../assets/Wandering.jpg') },
        { id: '4', image: require('../../../assets/WondersofVietnam.jpg') },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current.snapToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    const renderItem = ({ item }) => (
        <Image source={ item.url } style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    );
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Carousel
                    loop
                    defaultIndex={1}
                    autoPlay
                    mode='parallax'
                    scrollAnimationDuration={1400}
                    data={images}
                    renderItem={renderItem}
                    width={SLIDER_WIDTH}
                    height={SLIDER_HEIGHT}
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Tìm kiếm..."
                    placeholderTextColor="#666"
                />
            </View>

        </View>
    );
}
export default Home
