import { StyleSheet, TextStyle, ViewStyle, StatusBar } from "react-native";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  } as ViewStyle,
  topcontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    top: StatusBar?.currentHeight + 60 || 80,
  } as ViewStyle,
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  } as TextStyle,
  subheading: {
    fontSize: 14,
    fontWeight: "400",
  } as TextStyle,
  middlecontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    top: StatusBar?.currentHeight + 120 || 140,
  } as ViewStyle,
  bottomcontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    top: StatusBar?.currentHeight + 180 || 200,
  } as ViewStyle,
  input: {
    height: 40,
    width: 200,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  } as ViewStyle,
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#000",
    marginTop: 12,
    width: 150,
  } as ViewStyle,
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  } as TextStyle,
});

export default styles;
