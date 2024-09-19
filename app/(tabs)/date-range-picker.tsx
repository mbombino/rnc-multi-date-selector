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

  const { onSuccess } = props;
  const [state, setState] = useState({
    isFromDatePicked: false,
    isToDatePicked: false,
    markedDates: {},
    fromDate: "",
    selectedDates: {},
  });
  const onDayPress = (day: any) => {
    //if start date is selected
    if (!state.isFromDatePicked || state.isToDatePicked) {
      markStartDay(day);
    }
  };

  const markStartDay = (day: any) => {
    const newMarkedDate = {
      [day.dateString]: {
        startingDay: true,
        customStyles: {
          container: styles.startDateStyle,
          text: styles.textStyle,
        },
      },
    };
    if (!(day.dateString in state.selectedDates)) {
      setState({
        ...state,
        isFromDatePicked: true,
        isToDatePicked: false,
        fromDate: day.dateString,
        markedDates: { ...newMarkedDate, ...state.selectedDates },
      });
    }
  };
  const markMarkedDates = (fromDate: any, toDate: any, markedDates: any) => {
    let _fromDate = new Date(fromDate);
    let _toDate = new Date(toDate);

    let timeDiff = _toDate.getTime() - _fromDate.getTime();
    let dayDiff = timeDiff / (1000 * 60 * 60 * 24);

    let range = dayDiff;

    if (range > 0) {
      if (range == 0) {
      } else {
        let tempDate: any;
        for (var i = 1; i <= range; i++) {
          tempDate = addDays(_fromDate, i);

          let dateList = Object.keys(state.selectedDates);

          let filterList = dateList.filter((d) => d == tempDate);

          if (filterList[0] == tempDate) {
            break;
          } else {
            if (i < range) {
              markedDates[tempDate] = {
                customStyles: {
                  container: styles.middleDateStyle,
                  text: styles.textMiddleStyle,
                },
              };
            } else {
              markedDates[tempDate] = {
                endingDay: true,
                customStyles: {
                  container: styles.endDateStyle,
                  text: styles.textStyle,
                },
              };
            }
          }
        }
      }
    }
    return [markedDates, range];
  };
  function addDays(date: any, nextDay: any) {
    var result = new Date(date);
    result.setDate(result.getDate() + nextDay);

    var year = result.getFullYear();
    var month = result.getMonth() + 1;
    var _month = month.toString();
    var day = result.getDate();
    var _day = day.toString();

    if (day < 10) {
      _day = `0${day}`;
    }
    if (month < 10) {
      _month = `0${month}`;
    }

    let format = `${year}-${_month}-${_day}`;

    return format;
  }

  return (
    <Calendar
      {...props}
      firstDay={1}
      markingType={"custom"}
      minDate={new Date().toString()}
      onMonthChange={handleMonthChange}
      markedDates={state.markedDates}
      onDayPress={(day: any) => onDayPress(day)}
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
  );
};
