import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercise from './components/pages/Exercise'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'

function App () {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Exercise} exact />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
