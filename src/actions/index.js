import request from 'superagent';

export const REQUEST_POSTS = "REQUEST_POSTS";
export const SAVE_TERM = "SAVE_TERM";

const API_URL = "http://hn.algolia.com/api/v1/search?query=";

export function requestPosts(term = null) {
    const data = request(`${API_URL}${term}`);

    return {
        type: REQUEST_POSTS,
        payload: data
    };
}

export function saveTerm(term = null) {
    return {
        type: SAVE_TERM,
        payload: term
    }
}


