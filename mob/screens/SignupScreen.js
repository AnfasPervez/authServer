import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView,StatusBar } from 'react-native';
import { Button, TextInput } from 'react-native-paper'

export default function SignupScreen(props) {
   
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const sendCred = async (props) => {
        console.log("function m hn")
        fetch("http://192.168.0.102:80/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => res.text())
            .then( (data) => {
                try {
                    console.log(data)
                
                } catch (e) {
                    console.log("error hai", e)
                }
            })
    }


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
                >create new account</Text>
                <TextInput label='Email'
                   value={email}
                    theme={{ colors: { primary: "blue" } }}
                    style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="outlined"
                    onChangeText={(text)=>setEmail(text)}
                />
                <TextInput label='Password'
                    theme={{ colors: { primary: "blue" } }}
                    style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="outlined"
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                />
                <Button style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                    mode="contained" onPress={() => sendCred()}>Signup</Button>
                <TouchableOpacity>
                    <Text onPress={()=>props.navigation.navigate("login")}
                        style={{ fontSize: 18, marginLeft: 18, marginTop: 20 }}
                    >Already have account?</Text>

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
