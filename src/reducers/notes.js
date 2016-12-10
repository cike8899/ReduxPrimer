import { handleActions } from 'redux-actions'

const initialState = {
    rows: [],
    pageObj: {}
}

export default handleActions({
    'get all notes'(state, action) {
        return action.payload;
    },
    'get notes excerpt by page'(state, action) {
        let data = {
            pageObj: action.payload.pageObj
        };
        let currentPage = action.payload.pageObj.currentPage;
        if (currentPage === 1) {
            data.rows = action.payload.rows
        } else {
            data.rows = [...state.rows, ...action.payload.rows];
        }
        return data;
    }
}, initialState);