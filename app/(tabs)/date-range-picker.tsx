//Will become a Gist

import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { styles } from "@/components/CalendarView";

interface DateRangePickerProps {
  onSuccess(s: any, e: any): void;
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const { onSuccess } = props;
  const [state, setState] = useState({
    isFromDatePicked: false,
    isToDatePicked: false,
    markedDates: {},
    fromDate: "",
    selectedDates: {},
  });

  const onDayPress = (day: any) => {
    if (
      !state.isFromDatePicked ||
      (state.isFromDatePicked && state.isToDatePicked)
    ) {
      setupStartMarker(day);
    } else if (!state.isToDatePicked) {
      let markedDates = { ...state.markedDates };
      let [mMarkedDates, range] = setupMarkedDates(
        state.fromDate,
        day.dateString,
        markedDates
      );
      if (range >= 0) {
        setState({
          ...state,
          isFromDatePicked: true,
          isToDatePicked: true,
          markedDates: mMarkedDates,
        });
        onSuccess(state.fromDate, day.dateString);
      } else {
        setupStartMarker(day);
      }
    }
  };

  const setupStartMarker = (day: any) => {
    let markedDates = {
      [day.dateString]: {
        startingDay: true,
        customStyles: {
          container: styles.startDateStyle,
          text: styles.textStyle,
        },
      },
    };
    let dateList = Object.keys(state.selectedDates);

    if (dateList.includes(day.dateString)) {
    } else {
      setState({
        ...state,
        isFromDatePicked: true,
        isToDatePicked: false,
        fromDate: day.dateString,
        markedDates: { ...markedDates, ...state.selectedDates },
      });
    }
  };

  const setupMarkedDates = (fromDate: any, toDate: any, markedDates: any) => {
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
      hideArrows={true}
      enableSwipeMonths={true}
      theme={{
        selectedDayBackgroundColor: "blue",
        selectedDayTextColor: "white",
      }}
      {...props}
      firstDay={1}
      markingType={"custom"}
      current={state.fromDate}
      markedDates={state.markedDates}
      onDayPress={(day: any) => onDayPress(day)}
      minDate={new Date().toString()}
    />
  );
};
