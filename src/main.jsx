import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignIn from './view/signIn/index.jsx'
import SignUp from './view/signUp/index.jsx'
import Dashboard from './view/dashbord/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/helpHubAI/" element={<App />} />
      <Route path="/helpHubAI/auth" element={<SignIn />} />
      <Route path="/helpHubAI/auth/signup" element={<SignUp />} />
      <Route path="/helpHubAI/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
