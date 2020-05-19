import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Button, TextInput } from 'react-native-paper'

export default function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={{ fontSize: 35, marginLeft: 18, marginTop: 10, color: "#3b3b3b" }}>Welcome</Text>
                <View
                    style={{
                        borderBottomColor: "blue",
                        borderBottomWidth: 4,
                        borderRadius: 10,
                        marginLeft: 20,
                        marginRight: 150,
                        marginTop: 4
                    }}
                />
                <Text
                    style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}
                >Login with email</Text>
                <TextInput label='Email'
                    theme={{ colors: { primary: "blue" } }}
                    style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="outlined"
                />
                <TextInput label='Password'
                    theme={{ colors: { primary: "blue" } }}
                    style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="outlined"
                />
                <Button style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="contained" onPress={() => console.log('Pressed')}>Login</Button>
                <TouchableOpacity>
                    <Text onPress={() => props.navigation.navigate("signup")}
                        style={{ fontSize: 18, marginLeft: 18, marginTop: 20 }}
                    >Dont have an account?</Text>

                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
