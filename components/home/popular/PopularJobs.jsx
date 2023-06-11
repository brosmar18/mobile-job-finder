import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';

import styles from './popularJobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';


const PopularJobs = () => {
    return (
        <View>
            <Text>Popular Jobs</Text>
        </View>
    )
}

export default PopularJobs;
