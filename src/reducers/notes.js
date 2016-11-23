import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
    'get all notes'(state, action) {
        return action.payload;
    }
}, initialState);