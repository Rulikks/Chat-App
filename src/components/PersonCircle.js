import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { styles } from '../../styles'

const PersonCircle = ({
    data
}) => {
    return (
    <View style={styles.personcircle}>
            <Text>{data.username}</Text>
        <View style={styles.bluecircle} />
    </View>
    )
}

export default PersonCircle
