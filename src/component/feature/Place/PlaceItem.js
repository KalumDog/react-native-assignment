import React from 'react';
import {
    View,
    Text,
  } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 16,
        color: '#000',
    },
    ratingContainer: {
        paddingVertical: 5,
        flexDirection: 'row'
    },
    rating: {
        color: '#e7711b'
    },
    userReview: {
        color: '#bbb'
    },
    vicinity: {
        fontSize: 13,
        color: '#70757A'
    }
}

const PlaceItem = ({ name, rating = 0, user_ratings_total = 0, vicinity = '' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{`Rating: ${rating} `}</Text>
                <Text style={styles.userReview}>{`(${user_ratings_total})`}</Text>
            </View>
            <Text style={styles.vicinity}>{vicinity}</Text>
        </View>
    )
}

PlaceItem.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    user_ratings_total: PropTypes.number,
    vicinity: PropTypes.string,
}

export default PlaceItem