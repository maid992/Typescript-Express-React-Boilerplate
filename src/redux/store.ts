import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const productReducer = () => {}

const rootReducer = () => combineReducers({
  products: productReducer
})

export const store = createStore(
  rootReducer(),
  composeWithDevTools()
)
