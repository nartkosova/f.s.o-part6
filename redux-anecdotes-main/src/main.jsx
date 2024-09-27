import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import filterReducer from './reducers/filterReducer'
import anecdoteReducer, { setAnecdote } from './reducers/anecdoteReducer'
import anecdoteServices from './services/anecdotes'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,  
    filter: filterReducer
  }
})

anecdoteServices.getAll().then(anecdotes =>
  store.dispatch(setAnecdote(anecdotes))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
