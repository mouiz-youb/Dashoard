import React, { useState } from "react";
import { Header } from "../components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {ScheduleComponent ,Day,Week,WorkWeek,Month,Agenda,Inject ,Resize,DragAndDrop } from "@syncfusion/ej2-react-schedule"
import { scheduleData } from "../data/dummy";
const Calendar = () => {

  return (
    <div className="m-2 mt-16 p-2  bg-white rounded-3xl">
      <Header category="Page" title="Calendar " />
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
          calendarWeekNumberHeaderText: "#",
          calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
      >
        <DateCalendar displayWeekNumber  className=" rounded-3xl w-400 h-72 " />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
{/* <ScheduleComponent height="650px" 
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2022, 0, 10)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda ,Resize,DragAndDrop ]}/>
      </ScheduleComponent> */}