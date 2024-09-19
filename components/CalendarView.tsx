import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  startDateStyle: ViewStyle;
  endDateStyle: ViewStyle;
  middleDateStyle: ViewStyle;
  textStyle: TextStyle;
  textMiddleStyle: TextStyle;
  container: ViewStyle;
}>({
  startDateStyle: {
    backgroundColor: "#33B1FF",
    //width: "100%",
    borderRadius: 100,
    zIndex: 1,
  },
  endDateStyle: {
    backgroundColor: "#33B1FF",
    width: "100%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 3,
    zIndex: 1,
  },
  middleDateStyle: {
    backgroundColor: "#33D4FF",
    width: "100%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textStyle: {
    color: "white",
  },
  textMiddleStyle: {
    color: "white",
  },

  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    height: 450,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 5,
    borderWidth: 1,
  },
});
