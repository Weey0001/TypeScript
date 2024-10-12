import { View, StyleSheet,Dimensions} from "react-native";
import Colors from "../../constants/colors";
let Card = ({children}:any) =>
{
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth<380?18:24,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 24,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})