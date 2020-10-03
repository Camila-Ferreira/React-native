import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    title: {
        marginTop: 20
    },

    login: {
        color: '#81259D',
        fontSize: 40,
        textAlign: "center"
    },

    area: {
        marginTop: 50
    },

    input: {
        color: '#CACACA',
        fontSize: 20,
        borderBottomWidth: 0.5,
        marginHorizontal: 25,
        borderColor: '#CACACA'
    },


    letter2: {
        color: '#81259D',
        fontSize: 20,
        fontWeight: "bold"
    },

    letter3: {
        color: '#81259D',
        fontSize: 15,
        fontWeight: "bold",
        padding: 12
    },

    letter4: {
        color: '#81259D',
        fontSize: 15,
        fontWeight: "bold",
        padding: 12
    },

    forget: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },

    areaButom: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 200
    },

    border: {
        borderWidth: 0.5,
        width: 138,
        marginHorizontal: 20,
        alignItems: "center",
        borderColor: '#CACACA',
        elevation: 2,
        borderRadius: 3
    }

});

export default styles;
