import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Button, TextInput, ActivityIndicator } from 'react-native-paper'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
        <Text style={{fontSize:18}}>your email is </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"

    },
});
