import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/AppTheme"

interface Props {
    text: string;
    color?: string;
    fatButton?: boolean;
    action: (textNumber: string) => void;
};

export const CalcButton = ({ text, color = '#2D2D2D', fatButton = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (fatButton ? 180 : 80)
            }}>
                <Text style={{
                    ...styles.textButton,
                    color: (color === '#9B9B9B' ? '#000' : '#FFF')
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
