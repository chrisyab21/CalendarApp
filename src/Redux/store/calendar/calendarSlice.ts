import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'


export type event = {
    _id?: number,
    title: string,
    notes: string,
    start: Date,
    end: Date,
    bgColor: string,
    user: {
      _id: string,
      name: string
    }
}

const tempEvent:event = {
    _id: new Date().getTime(),
    title: 'Cumpleaños',
    notes: 'Esta es mi primera nota',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123', 
      name: 'Christian'
    }       
}



 type calendarState = {
    events: event[],
    activeEvent: null | event
}

const initialState:calendarState = {    
    
    events: [tempEvent],
    activeEvent: null
}



export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialState,
  reducers: {
    onSetActiveEvent: (state, action: PayloadAction<event>) => {

        state.activeEvent = action.payload
    },
    onAddNewEvent: (state, action: PayloadAction<event>) => {

        state.events.push(action.payload);
        state.activeEvent = null;
    },
    onUpdateEvent: (state, action: PayloadAction<event>) => {

      state.events = state.events.map((event) => {
          if(event._id === action.payload._id){            
            return action.payload;
          }
          return event;
        });

        state.activeEvent = null;
    },
    
    onDeleteEvent: (state) => {

      if(state.activeEvent){
        state.events = state.events.filter((event) => event._id !== state.activeEvent?._id);
        state.activeEvent = null;
      }
    },


  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions