import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { styles } from "@/components/CalendarView";
import { ThemedText } from "@/components/ThemedText";

interface DateRangePickerProps {
  onSuccess(startDate: String, endDate: String): void;
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
    if (!state.isFromDatePicked || state.isToDatePicked) {
      markStartDay(day);
    } else {
      const [markedDates, range] = markMarkedDates(
        state.fromDate,
        day.dateString,
        { ...state.markedDates }
      );

      if (typeof range === "number" && range >= 0) {
        setState({
          ...state,
          isFromDatePicked: true,
          isToDatePicked: true,
          markedDates: markedDates,
        });
        onSuccess(state.fromDate, day.dateString);
      } else {
        markStartDay(day);
      }
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

  const markMarkedDates = (
    fromDate: string,
    toDate: string,
    markedDates: Record<string, any>
  ) => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const dayDiff = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    for (let i = 1; i <= dayDiff; i++) {
      const tempDate = addDays(startDate, i);

      if (i < dayDiff) {
        const dayOfWeek = new Date(tempDate).getDay();
        const styleKey =
          dayOfWeek === 0
            ? "middleDateSundayStyle"
            : dayOfWeek === 1
            ? "middleDateMondayStyle"
            : "middleDateStyle";
        markedDates[tempDate] = {
          customStyles: {
            container: styles[styleKey],
            text: styles.textMiddleStyle,
          },
        };
      } else {
        const dayOfWeek = new Date(tempDate).getDay();
        const styleKey =
          dayOfWeek === 1
            ? "endDateMondayStyle"
            : dayOfWeek === 2
            ? "endDateTuesdayStyle"
            : "endDateStyle";
        const textKey =
          dayOfWeek === 1
            ? "textEndDateStyle"
            : dayOfWeek === 2
            ? "textEndDateTuesdayStyle"
            : "textEndDateStyle";
        markedDates[tempDate] = {
          customStyles: {
            container: styles[styleKey],
            text: styles[textKey],
          },
        };
      }
    }

    const formattedDate = startDate.toISOString().split("T")[0];
    markedDates[formattedDate].customStyles.container =
      startDate.getDay() === 0
        ? styles.startDateSundayStyle
        : styles.startDateRangeStyle;
    markedDates[formattedDate].customStyles.text =
      startDate.getDay() === 0
        ? styles.textStartDateSundayStyle
        : styles.textStartDateStyle;

    return [markedDates, dayDiff];
  };
  function addDays(date: Date | string, daysToAdd: number): string {
    const result = new Date(date);
    result.setDate(result.getDate() + daysToAdd);
    return result.toISOString().split("T")[0];
  }

  return (
    <Calendar
      {...props}
      firstDay={1}
      markingType={"custom"}
      minDate={new Date().toString()}
      markedDates={state.markedDates}
      onDayPress={(day: any) => onDayPress(day)}
    />
  );
};
