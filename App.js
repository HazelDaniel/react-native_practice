import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>What's the watchword?</Text>
      <Text style={styles.bottomText}>No gree for anybody.</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/20240104_115744.jpg")}
          style={imageStyles.heroImage}
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
  headerText: {
    fontSize: 30,
    marginTop: -30,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
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
    backgroundColor: "#3e333e3e",
  },
  buttonTextStyle: {
    color: "#333333",
    textTransform: "uppercase",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 400,
    width: "90%",
    height: 400,
    position: "absolute",
    overflow: "hidden",
    borderWidth: 1,
    zIndex: -1,
  },
});

const imageStyles = StyleSheet.create({
  heroImage: {
    width: 400,
    minHeight: "auto",
    height: 300,
    borderRadius: 200,
    borderTopLeftRadius: 0,
    transform: [{ translateY: -10 }, { scale: 0.8 }],
  },
});
