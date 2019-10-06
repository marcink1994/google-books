import typeToReducer from 'type-to-reducer';
import {
    FETCH_BOOKS,
} from 'constants/actionType';


const initialState = {
    isFetching: false,
    books: {},
    currentPage: 1,
};
const Books = typeToReducer({
    [FETCH_BOOKS]: {
        PENDING: state => ({
            ...state,
            isFetching: true
        }),
        REJECTED: (state, action) =>
            ({
                ...state,
                isFetching: false,
                error: action.payload
            }),
        FULFILLED: (state, action) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            currentPage: action.meta.page + 1,
            books: action.payload.data,
        }),
    },
}, initialState);

export default Books;
