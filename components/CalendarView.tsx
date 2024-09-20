import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  startDateStyle: ViewStyle;
  startDateRangeStyle: ViewStyle;
  endDateStyle: ViewStyle;
  middleDateStyle: ViewStyle;
  textStyle: TextStyle;
  textMiddleStyle: TextStyle;
  container: ViewStyle;
}>({
  startDateStyle: {
    borderRadius: 50,
    backgroundColor: "#33D4FF",
  },
  startDateRangeStyle: {
    position: "absolute",
    left: "40%",
    borderRadius: 50,
    backgroundColor: "#33D4FF",
    width: "100%",
  },
  endDateStyle: {
    backgroundColor: "#33B1FF",
    //width: "100%",
    borderRadius: 50,
    zIndex: 1,
  },
  middleDateStyle: {
    backgroundColor: "#33D4FF",
    width: "100%",
    position: "absolute",
    zIndex: 0,
  },
  textStyle: {
    position: "absolute",
    left: 0,
    bottom: 0,
    justifyContent: "center",
    backgroundColor: "#33B1FF",
    padding: 7,
    color: "white",
    borderRadius: 50,
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
