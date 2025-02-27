import React, { useEffect, useRef, useState } from 'react'
import "./weather.css"


import searchImage from "../assets/search.png";
import clearImage from '../assets/clear.png'
import cloudImage from "../assets/cloud.png"
import drizzleImage from "../assets/drizzle.png"
import humidityImage from "../assets/humidity.png"
import rainImage from "../assets/rain.png"
import snowImage from "../assets/snow.png"
import windImage from "../assets/wind.png"

export const Weather = () => {

    const [city, setCity] = useState("CHENNAI");


    const inputRef = useRef()

    let api_key = "d7c951bab12351ada74a5af9da72abe9"
    const [weather_data,setweather_data]=useState(false);
    // const[icon,setIcon]=useState(clearImage)

    const allIcons={
        "01d" : clearImage,
        "01n" : clearImage,
        "02d" : cloudImage,
        "02n" : cloudImage,
        "03d" : cloudImage,
        "03n" : cloudImage,
        "04d" : drizzleImage,
        "04n" : drizzleImage,
        "09d" : rainImage,
        "09n" : rainImage,
        "10d" : rainImage,
        "10n" : rainImage,
        "13d" : snowImage,
        "13n" : snowImage,
    }
    
    const search = async (city)=>{
        if(city===""){
            alert("enter city name")
        }
        try {
         const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`; 
          
            const response = await fetch(url);
            const data = await response.json();


            // if(!response.ok){
            //     alert("incorrect city name")
            // }
            // console.log(data);
            const icon = allIcons[data.weather[0].icon] || clearImage ;
            // setIcon(icon)
            setweather_data({
                humidity :data.main.humidity,
                windspeed:data.wind.speed,
                tempereture:Math.floor(data.main.temp),
                location:data.name,
                icon:icon
            })
        } catch (error) {
            
        }
        
    }
    useEffect(()=>{
        search("chennai");
    },[]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          search(inputRef.current.value); 
        }
      };
  return (
    <div className='weather'>
        <div className="search-box">
            <input ref={inputRef} type="text" placeholder='search city' onKeyDown={handleKeyDown} />
            <img src={searchImage} alt="search" onClick={()=>search(inputRef.current.value)} 
    />
        </div>
        <img src={weather_data.icon} alt="" className='weatherimage'/>
        <p className='temp'>{weather_data.tempereture}℃</p>
        <p className='location'>{weather_data.location}</p>
        <div className="weatherdata">
            <div className="col">
                <img src={humidityImage} alt="" />
                <div>
                    <p>{weather_data.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={windImage} alt="" />
                <div>
                    <p>{weather_data.windspeed} km/h</p>
                    <span>wind speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Weather
