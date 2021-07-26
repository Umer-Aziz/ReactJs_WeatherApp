import React ,{useState, useEffect}from 'react'

const WeatherInfo = ({tempInfo}) => {

    const [Weatherstate, setWeatherstate] = useState("");
    
    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunrise,
        sunset,
      }=tempInfo;

      useEffect(() => {
          if(weatherMood){
              switch (weatherMood) {
                  case "Clouds":
                      setWeatherstate("wi-day-cloudy");
                      break;
                  case "Haze":
                      setWeatherstate("wi-fog");
                      break;
                  case "Clear":
                      setWeatherstate("wi-day-sunny");
                      break;
                  case "Smoke":
                      setWeatherstate("wi-smoke");
                      break;
                  case "Rain":
                      setWeatherstate("wi-rain");
                      break;
                  case "Mist":
                      setWeatherstate("wi-dust");
                      break;
                  case "Thunderstorm":
                      setWeatherstate("wi-thunderstorm");
                      break;
              
                  default:
                    setWeatherstate("wi-day-sunny");
                      break;
              }
          }
          
      }, [weatherMood]);

      let secRise=sunrise;
      let secSet=sunset;
      let dateRise=new Date(secRise * 1000);
      let dateSet=new Date(secSet * 1000);
      let timeRise = dateRise.toLocaleTimeString();
      let timeSet = dateSet.toLocaleTimeString();

    return (
        <>
         <article className="widget">
    <div className="weatherIcon">
    <i className={`wi ${Weatherstate}`}></i>
    </div>
    <div className="weatherInfo">
      <div className="temperature">
        <span>{temp}&deg;</span>
      </div>
      <div className="description">
        <div className="weatherCondition">{weatherMood}</div>
        <div className="place">{name}, {country}</div>
      </div>
    </div>
  
  <div className="date">{new Date().toLocaleString()}</div>

  {/* {conditions in current city } */}
  <div className="extra-temp">
    <div className="temp-info-minmax">
      <div className="two-sided-section">
        <p><i className={"wi wi-sunset"}></i></p>
        <p className="extra-info-leftside">
           {timeRise} sunrise<br/>
           {timeSet} sunset 
        </p>
      </div>
      <div className="two-sided-section">
        <p><i className={"wi wi-humidity"}></i></p>
        <p className="extra-info-leftside">
          {humidity} <br/>
          humidity
        </p>
      </div>
    </div>

    <div className="weather-extra-info">
    <div className="two-sided-section">
        <p><i className={"wi wi-rain"}></i></p>
        <p className="extra-info-leftside">
          {pressure} <br/>
          pressure
        </p>
      </div>
      <div className="two-sided-section">
        <p><i className={"wi wi-strong-wind"}></i></p>
        <p className="extra-info-leftside">
          {speed}<br/>
          speed
        </p>
      </div>
    </div>

  </div>
    </article>
    
            
        </>
    )
}

export default WeatherInfo
