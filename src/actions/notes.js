import { createAction } from 'redux-actions';
import { getAllNotes as getAllNotesApi } from '../services/notesApi';

export const getAllNotes = createAction("get all notes", getAllNotesApi);