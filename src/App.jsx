import { useState } from 'react'
import './App.css'
import QuoteFetcher from './QuoteFetcher'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function App() {

  return (
    <div>
      <ProfileViewerWithSearch/>
      <QuoteFetcher/>
    </div>
  )
}

export default App
