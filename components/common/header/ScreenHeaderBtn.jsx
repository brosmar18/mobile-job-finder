import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './screenHeader.style';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer}
        >
            <Image
                source={iconUrl}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn;
