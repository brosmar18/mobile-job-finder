import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './popularJobCard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handleCardPress(item)}
        >
            {item && item.employer_logo && item.job_title && (
                <TouchableOpacity
                    style={styles.logoContainer(selectedJob, item)}
                >
                    <Image
                        source={{ uri: item.employer_logo }}
                        resizeMode='contain'
                        style={styles.logoImage}
                    />
                </TouchableOpacity>
            )}
            <Text style={styles.companyName} numberOfLines={1}>
                {item ? item.employer_name : ''}
            </Text>

            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
                    {item ? item.job_title : ''}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


export default PopularJobCard;
