import { createAction } from "@reduxjs/toolkit";

export const AddNoteAction = createAction<string>('ADD_NOTE');
export const DeleteNoteAction = createAction<string>('DELETE_NOTE');
export const EditNoteAction = createAction<{index: number, note: string}>('EDIT_NOTE');
export const ArchiveNoteAction = createAction<string>('ARCHIVE_NOTE');
export const UnArchiveNoteAction = createAction<string>('UNARCHIVE_NOTE');