import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions({
    'get note by id'(state, action) {
        return action.payload;
    }
}, initialState);