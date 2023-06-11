import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import styles from './nearbyJobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
    return (
        <View>
            <Text>Nearby Jobs</Text>
        </View>
    )
}

export default NearbyJobs;
