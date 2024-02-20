import { EventProps } from "react-big-calendar";
import { event } from "../../Redux/store/calendar/calendarSlice";


export const CalendarEvent = (props:EventProps<event>) => {

 const {title, user} = props.event;
  return (
    <>
        <strong>{ title }</strong>
        <span> - { user.name}</span>
    </>
  )
}
