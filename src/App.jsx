import React from 'react'
import AppRoute from './Routes/AppRoute';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


function App() {
  AOS.init(); // Initialize AOS
  return (
    <div><AppRoute/></div>
  )
}

export default App