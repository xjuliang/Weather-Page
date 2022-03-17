import React, { useState } from "react";

import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

import About from "./components/About.jsx";
import City from "./components/City.jsx";

import { Route } from "react-router-dom";

function App() {
  const KEY = "7ffde956570e375ee78da00a698760d7";
  const [cities, setNewCity] = useState([]);

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setNewCity((prevCities) => [...prevCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  const onClose = (id) => {
    setNewCity((prevCities) => prevCities.filter((c) => c.id !== id));
  };

  const onFilter = (id) => {
    let city = cities.filter((c) => c.id === parseInt(id));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <Route path={"/"} render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path={"/"}
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route exact path={"/about"} render={() => <About />} />

      <Route
        exact
        path={"/city/:id"}
        render={({ match }) => <City city={onFilter(match.params.id)} />}
      />
    </div>
  );
}

export default App;
