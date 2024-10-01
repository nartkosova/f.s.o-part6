import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    },
      updateAnecdote(state, action) {
        const id = action.payload.id
        return state.map(anecdote =>
          anecdote.id !== id ? anecdote : action.payload
        )
      }
  }
})

export const {  appendAnecdote, setAnecdote, updateAnecdote } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newAnnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnnecdote))
  }
}
export const vote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateVote(anecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer
