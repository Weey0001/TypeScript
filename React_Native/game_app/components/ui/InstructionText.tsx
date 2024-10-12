import { Text, StyleSheet } from "react-native";

let InstructionText = ({children, style}: {children: any, style?: any}) =>
{
  return (
    <Text style={[styles.instructionText, style]}> {children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: "#ffffff91",
    fontSize: 24,
    textShadowColor: "#8f8f8f4a",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
})