import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Button, TextInput, ActivityIndicator } from 'react-native-paper'

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
           <ActivityIndicator size="large" color="blue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems:"center"

    },
});
