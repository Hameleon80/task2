import { createAction } from "@reduxjs/toolkit";

export const addNoteAction = createAction<string>('ADD_NOTE');
export const deleteNoteAction = createAction('DELETE_NOTE');
export const editNoteAction = createAction('EDIT_NOTE');
export const archiveNoteAction = createAction('ARCHIVE_NOTE');
export const unArchiveNoteAction = createAction('UNARCHIVE_NOTE');