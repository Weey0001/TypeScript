import {
  View,
  Image,
  Text,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";

// @ts-ignore
import Title from "../components/ui/TItle";

import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/ui/PrimaryButtons";

let GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }: any) => {
  let { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 450) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title> The game is over! </Title>

        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={[styles.image, imageStyle]}
          />
        </View>

        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150:300,
    // height: deviceWidth < 380 ? 150:300,
    // borderRadius: deviceWidth < 380 ? 75:150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
