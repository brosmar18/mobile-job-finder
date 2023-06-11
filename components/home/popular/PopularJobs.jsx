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
import useFetch from '../../../hook/useFetch';


const PopularJobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={() => (
                            <PopularJobCard

                            />
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium}}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default PopularJobs;
