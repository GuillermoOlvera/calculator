import { SafeAreaView, StatusBar } from "react-native"
import { CalculatorScreen } from "./src/screens/CalculatorScreen"
import { styles } from "./src/theme/AppTheme"

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <CalculatorScreen />
    </SafeAreaView>
  )
}
