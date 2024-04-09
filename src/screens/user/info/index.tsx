import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import st from './styles'

const User=() =>{
    const styles = st();
    return (
        <View style={styles.container}>
            <Text>User Screen</Text>
        </View>
    );
}
export default User