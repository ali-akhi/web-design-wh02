import React from 'react'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import './../files/app.css'

const App = () => (
  <div>
    <AddPlayer />
    <VisiblePlayerList />
  </div>
)

export default App
