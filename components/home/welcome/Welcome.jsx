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
            <View>
                <Text>Hello Bryan</Text>
            </View>
        </View>
    )
}

export default Welcome;
