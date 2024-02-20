import { NavBar } from "../components/NavBar";
import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessages } from "../../helpers/getMessages";
import { useState } from "react";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { event } from "../../Redux/store/calendar/calendarSlice";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete } from "../components/FabDelete";



export const CalendarPage = () => {

  const {openDateModal} = useUiStore();

  const {events, setActiveEvent} = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const evenStyleGetter = (event:event) => {
        const style= {

          backgroundColor: '#124A41',
          bordeRadius: '0px',
          opacity: 1,
          color: 'white'
        }

      return {

      }

    }

    const onDoubleCLick = (event:any) => {

      // console.log({ doubleClick: event});
      openDateModal();
    }

    
    const onSelect = (event:any) => {

      setActiveEvent(event);
    }
    
    const onViewChanged = (event:any) => {

        localStorage.setItem('lastView', event);
        setLastView(event);
    }
    

  return (
    <>
      <NavBar/>
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView as any} 
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessages()}
        eventPropGetter={(event) => evenStyleGetter(event)}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={(event) => onDoubleCLick(event)}
        onSelectEvent={(event) => onSelect(event)}
        onView={onViewChanged}       
        />
        
      <CalendarModal/>
      
      <FabAddNew/>
      <FabDelete/>
    </>
  )
}
