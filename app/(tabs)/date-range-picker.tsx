import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { styles } from "@/components/CalendarView";
import { LinearGradient } from "expo-linear-gradient";
import CalendarHeader from "react-native-calendars/src/calendar/header";
import { View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";

/*const getMarked=()=>{
  let marked={}
  for(let i=1;i<=10;i++){
    let day = i.toString().padStart(2,'0');
    marked[`2024-09-${day}`]={
      startingDay:1==1,
      endingDay:1==10,
      color:'yellow',
      textColor:'#aaa',
      disabled:true
    }
  }
}*/

interface DateRangePickerProps {
  onSuccess(startDate: String, endDate: String): void;
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  useEffect(() => {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    setCurrentMonth(month);
  }, []);

  // Change Month in Calendar
  const handleMonthChange = (month: { dateString: string | number | Date }) => {
    const date = new Date(month.dateString);
    const monthName = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(monthName);
  };

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <Calendar
        theme={{
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "white",
        }}
        {...props}
        firstDay={1}
        markingType={"custom"}
        minDate={new Date().toString()}
        onMonthChange={handleMonthChange}
        renderHeader={() => (
          <LinearGradient
            colors={["#004aad", "#5de0e6"]}
            style={{
              padding: 15,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <ThemedText type="defaultSemiBold">{currentMonth}</ThemedText>
          </LinearGradient>
        )}
      />
    </LinearGradient>
  );
};
