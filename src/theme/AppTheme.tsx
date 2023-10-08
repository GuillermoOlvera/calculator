import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    tinyResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#FFF',
        fontWeight: '300'
    }
});