import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const heroImageStyled = {
  width: 400,
  minHeight: "auto",
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>What's the watchword?</Text>
      <Text style={styles.bottomText}>No gree for anybody.</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/20240104_115744.jpg')}
          style={heroImageStyled}
        ></Image>
      </View>
      <AppButton
        onPress={() => {
          console.log("working...");
        }}
        title={"No gree!"}
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  bottomText: {
    flex: 1,
    backgroundColor: "#d9d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    maxHeight: 30,
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    minWidth: 250,
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "dotted",
  },
  buttonStyle: {
    borderRadius: 5,
    width: 100,
    height: 10,
    maxHeight: 30,
    flex: 1,
    marginTop: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  buttonTextStyle: {
    color: "#f3f3f3f3",
    textTransform: "uppercase",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 400,
    backgroundColor: "red",
    width: "100%",
    height: 400,
    position: "absolute",
    zIndex: 1,
  },
});
