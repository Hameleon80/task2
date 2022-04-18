import { createReducer } from "@reduxjs/toolkit";
import { AddNoteAction, ArchiveNoteAction, DeleteNoteAction, EditNoteAction, UnArchiveNoteAction } from "../actions/actions";
import {Notes, Archive} from '../initialState';

const initialState = {
    Notes, Archive
}

const reducers = createReducer(initialState, (builder)=>{
    builder
        .addCase(AddNoteAction, (state, action)=>{
            state.Notes.notes.push(action.payload);
        })
        .addCase(DeleteNoteAction, (state, action)=>{
            state.Notes.notes = state.Notes.notes.filter((value) => {return value !== action.payload});
        })
        .addCase(EditNoteAction, (state, action)=>{
            state.Notes.notes[action.payload.index] = action.payload.note;
        })
        .addCase(ArchiveNoteAction, (state, action)=>{
            state.Notes.notes = state.Notes.notes.filter((value) => {return value !== action.payload});
            state.Archive.notes.push(action.payload);
        })
        .addCase(UnArchiveNoteAction, (state, action)=>{
            state.Archive.notes = state.Archive.notes.filter((value) => {return value !== action.payload});
            state.Notes.notes.push(action.payload);
        })
});

export default reducers;