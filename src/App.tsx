import React, {useState} from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { store } from './redux/store'

import { Test } from './components/Test';

export const App = hot(() => {
  const [title, setTitle] = useState('COOOOOL');

  return (
    <Provider store={store} >
      <div>
        <Test r={3} g={'aflsdj'} />
        <h1>{title}</h1>
        <h1>haei</h1>
        <h1>haei</h1>
      </div>
    </Provider>
  )
})
