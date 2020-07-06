// import axios from 'axios'

const ADD_CHANELL = 'ADD_CHANELL'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_STATUS = 'SET_STATUS'


const initialState = {
  chanells: {},
  status: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANELL:
      return {
        ...state,
        chanells: {
          ...state.chanells, [action.chanell]: []
        }
      }
    case ADD_MESSAGE:
      return {
        ...state,
        chanells: { ...state.chanells, [action.chanell]: [...state.chanells[action.chanell], ...{ user: action.user, message: action.message, date: action.date}] }
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.chanell
      }
    default:
      return state
  }
}


export function addChanell(chanell) {
  return ({ type: ADD_CHANELL, chanell })
}

export function addMessage(chanell, username, message, date) {
  return ({ type: ADD_MESSAGE, chanell, message, username, date })
}

export function setStatus(chanell) {
  return ({ type: SET_STATUS, chanell })
}


