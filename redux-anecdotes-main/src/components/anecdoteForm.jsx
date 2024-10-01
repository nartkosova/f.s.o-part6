import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { setNotificationTime } from '../reducers/notificationReducer'

const AddAnecdote = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotificationTime(`You created new anecdote "${content}"`, 5))        
  }
return (
    <div>
        <h2>create new</h2>
        <form onSubmit={newAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
        </form>
    </div>
    )
}
export default AddAnecdote