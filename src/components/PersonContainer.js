import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../../styles'

const PersonContainer = (props) => {
    return (
    <View style={styles.personContainer}>
         {props.children}
    </View>
    )
}

export default PersonContainer;