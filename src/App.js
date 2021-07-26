import React,{useState,useEffect} from 'react'
import WeatherInfo from "./WeatherInfo"
import "./App.css"

const App = () => {
  
  const [searchValue, setsearchValue] = useState("Islamabad");
  const [tempInfo, settempInfo] = useState({});

  const getWeatherInfo = async ()=> {
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3b77b4bb1ea7395c2fb8f52810d03d4b`;
      const res=await fetch(url);
      const data=await res.json();

     const {temp ,pressure, humidity} = data.main;
     const {main:weatherMood} = data.weather[0];
     const {name} = data;
     const {speed} = data.wind;
     const {country,sunrise,sunset}=data.sys;
     

     const weatherDetail={
       temp,
       pressure,
       humidity,
       weatherMood,
       name,
       speed,
       country,
       sunrise,
       sunset,
     };
     settempInfo(weatherDetail);
      
    } catch (error) {
      console.log(error);
    }

   };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  
  return (
    <>
    <div className="wrap">
      <div className="search">
        <input 
          type="search"
          placeholder="search.."
          autoFocus
          id="search"
          value={searchValue}
          onChange={(e)=> setsearchValue(e.target.value)}
          className="searchTerm"
        />
        <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
      </div>
    </div>

    {/* creating card for output data*/}
   <WeatherInfo tempInfo={tempInfo}/>
    </>
  )
}

export default App
