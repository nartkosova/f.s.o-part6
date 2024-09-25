import AddAnecdote from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AddAnecdote />
    </div>
  )
}

export default App