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
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show All</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PopularJobs;
