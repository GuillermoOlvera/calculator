import { Text, View } from "react-native"
import { styles } from "../theme/AppTheme"
import { CalcButton } from "../components/CalcButton"
import { useCalculator } from "../hooks/useCalculator"

export const CalculatorScreen = () => {

    const {
        previousNumber,
        number,
        handleClean,
        handlePositiveNegative,
        handleDelButton,
        handleDivide,
        handleSubtract,
        handleMultiply,
        handleAdd,
        handleCalculation,
        setNewNumber
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                previousNumber === '0'
                && <Text style={styles.tinyResult}>{previousNumber}</Text>
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            {/* Buttons Row */}
            <View style={styles.row}>
                <CalcButton text='C' color='#9B9B9B' action={handleClean} />
                <CalcButton text='+/-' color='#9B9B9B' action={handlePositiveNegative} />
                <CalcButton text='del' color='#9B9B9B' action={handleDelButton} />
                <CalcButton text='/' color='#FF9427' action={handleDivide} />
            </View>

            {/* Buttons Row */}
            <View style={styles.row}>
                <CalcButton text='7' action={setNewNumber} />
                <CalcButton text='8' action={setNewNumber} />
                <CalcButton text='9' action={setNewNumber} />
                <CalcButton text='X' color='#FF9427' action={handleMultiply} />
            </View>

            {/* Buttons Row */}
            <View style={styles.row}>
                <CalcButton text='4' action={setNewNumber} />
                <CalcButton text='5' action={setNewNumber} />
                <CalcButton text='6' action={setNewNumber} />
                <CalcButton text='-' color='#FF9427' action={handleSubtract} />
            </View>

            {/* Buttons Row */}
            <View style={styles.row}>
                <CalcButton text='1' action={setNewNumber} />
                <CalcButton text='2' action={setNewNumber} />
                <CalcButton text='3' action={setNewNumber} />
                <CalcButton text='+' color='#FF9427' action={handleAdd} />
            </View>

            {/* Buttons Row */}
            <View style={styles.row}>
                <CalcButton text='0' fatButton action={setNewNumber} />
                <CalcButton text='.' action={setNewNumber} />
                <CalcButton text='=' color='#FF9427' action={handleCalculation} />
            </View>
        </View>
    )
}
