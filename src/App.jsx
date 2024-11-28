import React from 'react'
import Ourgroup from './Components/Ourgroup/Ourgroup'
import Contact from './Components/Contact/Contact'
import Teams from './Components/Teams/Teams'
import Navbar from './Components/Navbar/Navbar'
import Video from './Components/Video/Video'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import Demo from './Components/Demo/Demo'
// import Popup from './Components/Popup/Popup'
const App = () => {
  return (
    <div>
       <Popup/>  
   <Navbar/> 
  <Video/> 
{/* <Demo/> */}
  <Ourgroup/> 
 <Teams/>
<Contact/>
<Footer/> 
    </div>
  )
}

export default App
