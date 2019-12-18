import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

const styles = {
    container: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 16,
        color: 'grey'
    },
}

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Footer Component</Text>
        </View>
    )
}

export default Footer