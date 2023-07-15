import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../../styles'

const PersonCircle = ({
    data
}) => {
    return (
    <View style={styles.personcircle}>
        { data.username }
        <View style={styles.bluecircle} />
    </View>
    )
}

export default PersonCircle
