import { createReducer } from "@reduxjs/toolkit";
import { AddNoteAction, DeleteNoteAction } from "../actions/actions";
import {Notes, Archive} from '../initialState';

const initialState = {
    Notes, Archive
}

const reducers = createReducer(initialState, (builder)=>{
    builder
        .addCase(AddNoteAction, (state, action)=>{
            state.Notes.notes.push(action.payload);
        })
        .addCase(DeleteNoteAction, (state,action)=>{
            state.Notes.notes.pop();
            console.log(state.Notes.notes)
            alert("STOP")
        })
});

export default reducers;