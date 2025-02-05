import React from 'react'
import Popup from './Components/Popup/Popup'
import Navbar from './Components/Navbar/Navbar'
import Video from './Components/Video/Video'
import Teams from './Components/Teams/Teams'
import Ourgroup from './Components/Ourgroup/Ourgroup'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Gallery from "./Components/Gallery/Gallery"
const App = () => {
  return (
    <div>
       <Popup/>  
   <Navbar/> 
  <Video/> 
  <Teams/> 
<Gallery/>
 <Ourgroup/> 
<Contact/>
<Footer/> 
    </div>
  )
}

export default App
