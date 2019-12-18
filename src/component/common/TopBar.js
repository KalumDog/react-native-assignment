import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
  } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    container: {
        height: 44,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: 22,
        height: 22
    },
}

const TopBar = ({ title, nextPage, previousPage }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { 
                    if(typeof previousPage == 'function') {
                        previousPage() 
                    }
                }}>
                {previousPage && <Image style={styles.img} source={{ uri: 'https://img.icons8.com/android/30/000000/long-arrow-left.png'}}/>}
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                onPress={() => { 
                    if(typeof nextPage == 'function') {
                        nextPage()
                    }
                }}>
                {nextPage && <Image style={styles.img} source={{ uri: 'https://img.icons8.com/android/30/000000/long-arrow-right.png'}}/>}
            </TouchableOpacity>
        </View>
    )
}

TopBar.propTypes = {
    title: PropTypes.string,
    nextPage: PropTypes.func,
    previousPage: PropTypes.func,
}

export default TopBar