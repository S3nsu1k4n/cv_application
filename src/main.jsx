import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import General from './components/General.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Education from './components/Education.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <WorkExperience />
    <Education />
  </React.StrictMode>
)
