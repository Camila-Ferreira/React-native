import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View style={styles.title}>
                <Text style={styles.login}> Login </Text>
            </View>

            <View style={styles.area}>
                <TextInput style={styles.input} placeholder='CPF' />
                <TextInput style={styles.input} placeholder='Senha' />
            </View>

            <View style={styles.forget}>
                <TouchableHighlight>
                    <Text style={styles.letter2}> Esqueci minha senha </Text>
                </TouchableHighlight>
            </View>

            <View style={styles.areaButom}>
                <View style={styles.cancel}>
                    <TouchableHighlight style={styles.border} underlayColor={'#81259D'} onPress={() => Alert.alert('Obrigada!')}>
                        <Text style={styles.letter3}> CANCELAR </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.start}>
                    <TouchableHighlight style={styles.border} underlayColor={'#81259D'} onPress={() => navigation.navigate('New')}>
                        <Text style={styles.letter4}> CONFIRMAR </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

export default Home;