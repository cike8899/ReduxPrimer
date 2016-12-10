import { createAction } from 'redux-actions';
import { getAllNotes as getAllNotesApi, getNotesExcerptByPage as getNotesExcerptByPageApi } from '../services/notesApi';

export const getAllNotes = createAction("get all notes", getAllNotesApi);
export const getNotesExcerptByPage = createAction("get notes excerpt by page", getNotesExcerptByPageApi);