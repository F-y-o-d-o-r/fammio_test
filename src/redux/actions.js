import {
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
  FILTER_POSTS,
  RESET_FILTER_POSTS
} from './types'

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function filterPosts(user) {
  return {
    type: FILTER_POSTS,
    payload: user
  }
}

export function resetFilterPosts() {
  return {
    type: RESET_FILTER_POSTS,
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
}