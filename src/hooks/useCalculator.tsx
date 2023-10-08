import { useRef, useState } from "react";

enum Operators {
    add, subtract, multiply, divide
}

export const useCalculator = () => {

    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const handleClean = () => {
        setNumber('0');
        setPreviousNumber('0');
    };

    const setNewNumber = (textNumber: string) => {
        // No aceptar doble punto
        if (number.includes('.') && textNumber === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            // Punto decimal
            if (textNumber === '.') {
                setNumber(number + textNumber);
                // Evaluar si es otro 0 y hay un punto
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
                // Evaluar si es diferente de 0 y no tiene punto
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
                // Evitar 0000.0
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number)
            }
        } else {
            setNumber(number + textNumber);
        }
    }

    const handlePositiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number)
        }
    }

    const handleDelButton = () => {

        let negative = '';
        let tempNumber = number;
        if (number.includes('-')) {
            negative = '-';
            tempNumber = number.substring(1);
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1))
        } else {
            setNumber('0');
        }
    }

    const handleChangeNumberToPreviousNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const handleDivide = () => {
        handleChangeNumberToPreviousNumber();
        lastOperation.current = Operators.divide;
    }
    const handleMultiply = () => {
        handleChangeNumberToPreviousNumber();
        lastOperation.current = Operators.multiply;
    }
    const handleSubtract = () => {
        handleChangeNumberToPreviousNumber();
        lastOperation.current = Operators.subtract;
    }
    const handleAdd = () => {
        handleChangeNumberToPreviousNumber();
        lastOperation.current = Operators.add;
    }

    const handleCalculation = () => {
        const firstNumber = Number(number);
        const secondNumber = Number(previousNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${firstNumber + secondNumber}`);
                break;
            case Operators.subtract:
                setNumber(`${secondNumber - firstNumber}`);
                break;
            case Operators.multiply:
                setNumber(`${firstNumber * secondNumber}`);
                break;
            case Operators.divide:
                setNumber(`${secondNumber / firstNumber}`);
                break;
        }
        setPreviousNumber('0');
    }

    return {
        handleClean,
        setNewNumber,
        handlePositiveNegative,
        handleDelButton,
        handleDivide,
        handleAdd,
        handleMultiply,
        handleSubtract,
        handleCalculation,
        previousNumber,
        number,
    }
}
