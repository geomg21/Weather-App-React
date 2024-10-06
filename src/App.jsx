import { useState } from 'react';
import './App.css';
import useFetch from './useFetch';

function App() {
  const [cityName, setCityName] = useState("");
  const [name, setName] = useState("");

  const allWeather = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);

  const getWeatherData = () => {
    if (cityName === "") {
      alert("Please Enter City Name!!!!");
    } else {
      setName(cityName);
    }
  };

  const handleSearchAgain = () => {
    setCityName(""); // Clear the input field
    setName("");
  };

  return (
    <>
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-gradient'>
        <div className='weather-container bg-light rounded p-5 shadow-lg'>
          <div className='text-center'>
            <h1 className='mb-4'>WEATHER FORECAST APP</h1>
            <img width={'100px'} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="Weather Icon" />
          </div>
          <div className='d-flex justify-content-between my-4'>
            <input 
              onChange={e => setCityName(e.target.value)} 
              value={cityName} // Bind the input value to cityName state
              style={{ width: '85%' }} 
              type="text" 
              placeholder='Enter city name' 
              className='form-control' 
            />
            <button onClick={getWeatherData} className='btn btn-primary ml-2'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {allWeather.name && (
            <div className='weather-info p-4 border rounded shadow'>
              <h3 className='text-uppercase'>Location: <span className='text-primary'>{allWeather.name}</span></h3>
              <h3 className='text-uppercase'>Temperature: <span className='text-primary'>{allWeather.main?.temp}°C</span></h3>
              <h3 className='text-uppercase'>Weather Condition: <span className='text-primary'>{allWeather.weather?.[0].description}</span></h3>
              <h3 className='text-uppercase'>Feels Like: <span className='text-primary'>{allWeather.main?.feels_like}°C</span></h3>
              <h3 className='text-uppercase'>Humidity: <span className='text-primary'>{allWeather.main?.humidity}%</span></h3>
              
              <button onClick={handleSearchAgain} className='btn btn-secondary mt-3'>
                FINISH
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;





