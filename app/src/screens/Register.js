import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable } from 'react-native';
import { AlertNotificationRoot, ALERT_TYPE, Toast } from 'react-native-alert-notification';
import colors from '../design-system/colors';
import { handleRegister } from '../services/userService';

const Resgister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    
    const handleRegisterUser = async () => {
        setLoading(true);

        try {
            await handleRegister(name, email, password);
            
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Success",
                textBody: "User registered successfully",
            });
            
            setTimeout(() => {
                navigation.navigate('Login');
            }, 1000);

        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.ERROR,
                title: "Error",
                textBody: error.message || "Error registering user",
            });
        }

        setLoading(false);
    };

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    autoCapitalize='none'
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    secureTextEntry
                />

                <Pressable style={styles.button} onPress={handleRegisterUser}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                <Pressable style={{marginBottom: 10}} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: colors.primary}}>
                        Already have a registration? Access here
                    </Text>
                </Pressable>

                {loading && <ActivityIndicator size="large" color="#0000ff" />}
            </View>
        </AlertNotificationRoot>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    button: {
        marginBottom: 16,
        backgroundColor: colors.primary,
        color: colors.white,
        width: 200,
        padding: 8,
    },

    buttonText: {
        color: colors.white,
        textAlign: 'center',
    },
});

export default Resgister;