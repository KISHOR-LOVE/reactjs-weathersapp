import { useState } from 'react'
import './App.css'


// import clearImage from './assets/clear.png'

// import searchImage from "./assets/search.png"
// import cloud from "./assets/cloud.png"
// import drizzle from "./assets/drizzle.png"
// import humidity from "./assets/humidity.png"
// import rain from "./assets/rain.png"
// import snow from "./assets/snow.png"
// import wind from "./assets/wind.png"

// function App() {
  

//   return (
//     <>
//       <div className='container'>
//         <div className='input-container'>
//           <input type="text"  className='cityinput'
//           placeholder=' saerch city'/>
//           <div className='search-icon'>
//             <img src={searchImage} alt="search" />
//           </div>
//         </div>
//       </div>
       
//     </>
//   )
// }
import React from 'react'
import Weather from './components/weather'


export const App = () => {
  return (
    <div className='container'>
    <Weather/>
    </div>
  )
}



export default App
