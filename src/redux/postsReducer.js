import {FETCH_POSTS, FILTER_POSTS, RESET_FILTER_POSTS} from './types'

const initialState = {
  filtered: false,
  fetchedPosts: [],
  filteredPosts: []
};

// Pure Functions
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_POSTS:
      return {
        ...state,
        filtered: true,
        filteredPosts: state.fetchedPosts.filter(
          function (post) {
            return post.userId === +action.payload
          }
        )
      };
    case RESET_FILTER_POSTS:
      return {...state, filtered: false};
    case FETCH_POSTS:
      return {...state, fetchedPosts: action.payload, filteredPosts: action.payload};
    default:
      return state
  }
};
