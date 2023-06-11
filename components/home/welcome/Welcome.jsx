import { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter();


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Bryan</Text>
                <Text style={styles.welcomeMessage}>Find your dream job Today</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='What are you looking for?'
                        value={searchTerm}
                        onChange={(text) => setSearchTerm(text)}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome;
