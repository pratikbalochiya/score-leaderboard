import React from 'react'

// UI
import { GlobalStyle } from './ui/components/Style'

// Pages
import LeaderBoard from './pages/leader-board'

const App = () => {
  return (
    <>
      <h1>{process.env.REACT_APP_TEST_KEY}</h1>
      <GlobalStyle />
      <LeaderBoard />
    </>
  )
}

export default App
