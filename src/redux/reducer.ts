import { ActionTypes } from './actionTypes'
import { CounterState } from './types'
import { Action } from 'redux'

const initialState = {
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        count: state.count + 1
      }
    case ActionTypes.DECREMENT:
      return {
        count: state.count - 1
      }
    case ActionTypes.RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}

export default counterReducer
