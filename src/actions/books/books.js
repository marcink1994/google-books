
import axios from 'axios';
import { isEmpty } from 'lodash'
import { FETCH_BOOKS } from 'constants/actionType';
import { BOOKS_API, API_KEY, MAX_BOOKS_RESULT } from 'constants/common';


export const apiGetBooks = (page = 0, query = '') => (dispatch) => {
    const startIndex = page * MAX_BOOKS_RESULT;
    const trimmedQuery = isEmpty(query.trim()) ? "' '" : query;
    dispatch({
        type: FETCH_BOOKS,
        payload: axios.get(`${BOOKS_API}/volumes?q=${trimmedQuery}&maxResults=` +
            `${MAX_BOOKS_RESULT}&startIndex=${startIndex}&key=${API_KEY}`),
        meta: {
            page,
        }
    });
};