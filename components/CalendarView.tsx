import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  startDateStyle: ViewStyle;
  startDateRangeStyle: ViewStyle;
  startDateSundayStyle: ViewStyle;
  endDateStyle: ViewStyle;
  middleDateStyle: ViewStyle;
  middleDateSundayStyle: ViewStyle;
  middleDateMondayStyle: ViewStyle;
  textStyle: TextStyle;
  textMiddleStyle: TextStyle;
  textStartDateStyle: TextStyle;
  textStartDateSundayStyle: TextStyle;
  textEndDateStyle: TextStyle;
}>({
  startDateStyle: {
    borderRadius: 20,
    backgroundColor: "#33B1FF",
  },
  startDateRangeStyle: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#33D4FF",
  },
  startDateSundayStyle: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#33D4FF",
  },
  endDateStyle: {
    backgroundColor: "#33D4FF",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  middleDateStyle: {
    backgroundColor: "#33D4FF",
    width: "125%",
  },
  middleDateSundayStyle: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#33D4FF",
  },
  middleDateMondayStyle: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#33D4FF",
  },
  textStyle: {
    color: "white",
  },
  textMiddleStyle: {
    color: "white",
  },
  textStartDateStyle: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#33B1FF",
    color: "white",
    borderRadius: 20,
    width: "100%",
    padding: "16%",
  },
  textStartDateSundayStyle: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#33B1FF",
    color: "white",
    borderRadius: 20,
    width: "100%",
    padding: "16%",
  },
  textEndDateStyle: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#33B1FF",
    color: "white",
    borderRadius: 20,
    width: "100%",
    padding: "16%",
  },
});
