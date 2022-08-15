import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './App.css';


const App = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [anime, setAnime] = useState([])

  useEffect (() => {
    const fetchData = async () => {

      try {
        setErrorMsg('')
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        console.log(response)
        console.log(data)
        setAnime(data.data)
      } catch (error) {
        setErrorMsg("Oops, something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
},[]);

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div class='imageContainer'>
      <h1>Fetch API</h1>
      {anime.map((animeList, index) => {
        return (
          <div class='animeImages' key={index}>
            <img src={animeList.anime_img} alt="movie poster"/>
            <p>{animeList.anime_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;