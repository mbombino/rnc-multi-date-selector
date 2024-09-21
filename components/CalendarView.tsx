import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  startDateStyle: ViewStyle;
  startDateRangeStyle: ViewStyle;
  endDateStyle: ViewStyle;
  middleDateStyle: ViewStyle;
  textStyle: TextStyle;
  textMiddleStyle: TextStyle;
  textDateRangeStyle: TextStyle;
  container: ViewStyle;
}>({
  startDateStyle: {
    borderRadius: 50,
    backgroundColor: "#33B1FF",
    zIndex: 1,
  },
  startDateRangeStyle: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#33D4FF",
    width: "100%",
    marginStart: 10,
  },
  endDateStyle: {
    backgroundColor: "#33B1FF",
    borderRadius: 50,
    zIndex: 1,
  },
  middleDateStyle: {
    backgroundColor: "#33D4FF",
    width: "100%",
  },
  textStyle: {
    color: "white",
  },
  textMiddleStyle: {
    color: "white",
  },
  textDateRangeStyle: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#33B1FF",
    color: "white",
    borderRadius: 20,
    width: "80%",
    padding: 5,
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
