import { createReducer } from "@reduxjs/toolkit";
import { addNoteAction, archiveNoteAction, deleteNoteAction, editNoteAction, unArchiveNoteAction } from "../actions/actions";
import {Notes, Archive} from '../initialState';

const initialState = {
    Notes, Archive
}

const reducers = createReducer(initialState, (builder)=>{
    builder
        .addCase(addNoteAction, (state, action)=>{
            state.Notes.notes.push(action.payload);
        })
        .addCase(deleteNoteAction, (state,action)=>{

        })
        .addCase(editNoteAction, (state, action)=>{

        })
        .addCase(archiveNoteAction, (state, action)=>{

        })
        .addCase(unArchiveNoteAction, (state, action)=>{

        })
});

export default reducers;