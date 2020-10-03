import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';


const New = () => {

    const [status, setStatus] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image style={styles.image} source={require('../../Assets/Icons/nuOffwhite.png')} />
                <Text style={styles.nameTitle}>Camila</Text>
            </View>

            <View style={styles.container2}>
                <Image style={styles.iconCard} source={require('../../Assets/Icons/iconCard.png')} />
                <Text style={styles.fatura}>FATURA ATUAL</Text>
                <Text style={styles.valor}>R$ 3.459,60</Text>

                <View style={styles.areaSaldo}>
                    <Text style={styles.limite}>Limite disponível </Text>
                    <Text style={styles.saldo}>R$ 10.000,00</Text>
                </View >

                <View style={styles.container3}>
                    <Image style={styles.iconPet} source={require('../../Assets/Icons/pet.png')} />
                    <Text> Compra mais recente {"\n"}em Petshop R$ 100,00 </Text>
                    < Image style={styles.iconCont3} source={require('../../Assets/Icons/cont3.png')} />
                </View>
            </View >

            <Image style={styles.iconBall} source={require('../../Assets/Icons/ball.png')} />

            <ScrollView horizontal={true}>
                <View style={styles.container4}>
                    <TouchableHighlight style={styles.contMini} underlayColor={'#8a05be'} onPress={() => Alert.alert("Parabéns")}>
                        <View>
                            <Image style={styles.iconPerson} source={require('../../Assets/Icons/person.png')} />
                            <Text style={styles.persoName}>Indicar {"\n"}amigos</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.contMini} underlayColor={'#8a05be'} onPress={() => Alert.alert("Parabéns")}>
                        <View>
                            <Image style={styles.iconPerson} source={require('../../Assets/Icons/depositar.png')} />
                            <Text style={styles.persoName}>Depositar</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.contMini} underlayColor={'#8a05be'} onPress={() => Alert.alert("Parabéns")}>
                        <View>
                            <Image style={styles.iconPerson} source={require('../../Assets/Icons/transferir.png')} />
                            <Text style={styles.persoName}>Transferir</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.contMini} underlayColor={'#8a05be'} onPress={() => Alert.alert("Parabéns")}>
                        <View>
                            <Image style={styles.iconPerson} source={require('../../Assets/Icons/smartphone.png')} />
                            <Text style={styles.persoName}>Recarga de {'\n'}celular</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.contMini} underlayColor={'#8a05be'} onPress={() => setStatus(!status)}>
                        <View>

                            {status ?
                                <>
                                    <Image style={styles.iconPerson} source={require('../../Assets/Icons/cadOn.png')} />
                                    <Text style={styles.persoName}>Bloquear {'\n'}cartão </Text>
                                </>
                                :
                                <>
                                    <Image style={styles.iconPerson} source={require('../../Assets/Icons/cadOff.png')} />
                                    <Text style={styles.persoName}>Desbloquear {'\n'}cartão </Text>
                                </>
                            }
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        </View >
    );
};
export default New;