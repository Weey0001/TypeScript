import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

let PrimaryButton = ({ children,onPress }: { children: any, onPress?: any}) =>
{
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={
          ({ pressed }) =>
            pressed ?
              [
                styles.buttonInnerContainer,
                styles.pressed
              ]
              : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

let styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4 
  },
  buttontext: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})