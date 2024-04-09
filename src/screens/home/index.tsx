import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import st from './styles'

const Home=() =>{
    const styles = st();
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}
export default Home
