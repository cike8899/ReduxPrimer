import { createAction } from 'redux-actions';
import { getNoteById as getNoteByIdApi } from '../services/noteApi';

export const getNoteById = createAction("get note by id", getNoteByIdApi);