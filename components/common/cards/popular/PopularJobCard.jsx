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

        </TouchableOpacity>
    )
}

export default PopularJobCard;
