import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { AppState } from '../state/AppState'
import { Observer } from 'mobx-react'

export type AppProps = {
  state: AppState
}

export const App = hot(({ state }: AppProps) => (
  <Observer>
    {() => (
      <div>
        <AppState.Context.Provider value={state}>
          {state.ui.isActive}
          <h1>haei</h1>
          <h1>haei</h1>
          <h1>haei</h1>
          <h1>haei</h1>
        </AppState.Context.Provider>
      </div>
    )}
  </Observer>
))
