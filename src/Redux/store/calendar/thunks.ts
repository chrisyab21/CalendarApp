import { createAsyncThunk } from "@reduxjs/toolkit";
import { event, onAddNewEvent, onUpdateEvent } from "./calendarSlice";


export const startSavingEvent =  createAsyncThunk('', 
    async(calendarEvent:event, thunkApi) => {

        if(calendarEvent._id){
            
            thunkApi.dispatch(onUpdateEvent({...calendarEvent}));

        }else{

            thunkApi.dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() } ));

        }

});


