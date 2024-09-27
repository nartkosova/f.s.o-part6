import AddAnecdote from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { setAnecdote } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdote(anecdotes)))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AddAnecdote />
    </div>
  )
}

export default App