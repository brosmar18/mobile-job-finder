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

const Welcome = () => {
    const router = useRouter();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Bryan</Text>
                <Text style={styles.welcomeMessage}>Find your dream job Today</Text>
            </View>
        </View>
    )
}

export default Welcome;
