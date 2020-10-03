import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8a05be',
        alignItems: "center"
    },

    title: {
        flexDirection: "row",
        alignItems: "center"
    },

    image: {
        width: 100,
        height: 100
    },

    nameTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    },

    container2: {
        backgroundColor: '#fff',
        minWidth: 300,
        borderRadius: 3
    },

    iconCard: {
        width: 25,
        height: 25,
        marginTop: 15,
        marginLeft: 20
    },

    fatura: {
        marginTop: 35,
        marginLeft: 20,
        color: '#00c4e6',
        fontWeight: 'bold'
    },

    valor: {
        marginLeft: 20,
        color: '#00c4e6',
        fontWeight: 'bold',
        fontSize: 35
    },

    areaSaldo: {
        flexDirection: 'row',
        marginLeft: 20
    },

    limite: {
        color: 'black',
    },

    saldo: {
        fontWeight: 'bold',
        color: '#55c400'
    },

    container3: {
        backgroundColor: '#c3c5c9',
        marginTop: 55,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        flexDirection: 'row',
        maxWidth: 300,
        height: 80,
        alignItems: 'center',
        justifyContent: "space-between"
    },

    iconPet: {
        width: 30,
        height: 30,
        marginLeft: 20
    },

    iconCont3: {
        width: 15,
        height: 15,
        marginRight: 20
    },

    container4: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    contMini: {
        backgroundColor: '#8a40be',
        width: 95,
        height: 110,
        borderRadius: 3,
        elevation: 1,
        marginHorizontal: 5
    },

    iconPerson: {
        width: 30,
        height: 30,
        marginLeft: 5,
        marginTop: 5
    },

    persoName: {
        color: '#fff',
        marginLeft: 6.5,
        marginTop: 33
    }

});

export default styles;