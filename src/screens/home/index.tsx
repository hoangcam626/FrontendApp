import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput, Dimensions} from 'react-native';
import st from './styles'
import Carousel from 'react-native-snap-carousel';


const Home = () => {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = WIDTH * 9 / 16
    const styles = st();
    const carouselRef = useRef(null);
    const images = [
        // { id: 1, location: 'New York', image: require('../../../assets/VN.jpg') },
        {id: '1', image: require('../../../assets/TempleofliteratureVietnam.jpg')},
        {id: '2', image: require('../../../assets/hue.jpg')},
        {id: '3', image: require('../../../assets/Wandering.jpg')},
        {id: '4', image: require('../../../assets/WondersofVietnam.jpg')},
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current.snapToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    const renderItem = ({item}) => (
        <Image source={item.image} style={styles.image}/>
    );
    return (
        <View style={styles.container}>
            {/* Header */}
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={renderItem}
                sliderWidth={WIDTH}
                itemWidth={WIDTH}
                loop
                autoplay
                autoplayInterval={10000}
            />
            <TextInput
                style={styles.searchBar}
                placeholder="Tìm kiếm"
                placeholderTextColor="#fff"
            />
        </View>
    );
}
export default Home
