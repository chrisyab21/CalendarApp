

import { useAppDispatch, useAppSelector } from '../Redux/Hooks/TypedHooks'
import { event, onDeleteEvent, onSetActiveEvent } from '../Redux/store/calendar/calendarSlice';


export const useCalendarStore = () => {
  
    const dispatch = useAppDispatch();

    const {events, activeEvent} = useAppSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent:event) => {

            dispatch(onSetActiveEvent(calendarEvent));
    }

    const startDeleteEvent = () => {
        //Todo llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        //Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startDeleteEvent
    }
}
