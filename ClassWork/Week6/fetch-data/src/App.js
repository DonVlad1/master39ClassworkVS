import React, { useState, useEffect } from "react";
// import Modal from 'react-modal';
import modalModule from './Modal'
import './App.css';
import Modal from "./Modal";

const App = () => {

const [show, setShow] = useState(false)

return(
  <div className='App'>
    <button onClick={() => setShow(true)}>Show Modal</button>
    <Modal onClose={() => setShow(false)} show = {show}/>
  </div>
)

//   const [errorMsg, setErrorMsg] = useState('')
//   const [anime, setAnime] = useState([])



//   function testFunction()
//   {
//     console.log("testMe")
//   }


//   useEffect (() => {
//     const fetchData = async () => {

//       try {
//         setErrorMsg('')
//         const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
//         if(!response.ok){
//           throw new Error(response.statusText)
//         }
//         const data = await response.json();
//         console.log(response)
//         console.log(data)
//         setAnime(data.data)
//       } catch (error) {
//         setErrorMsg("Oops, something went wrong...")
//         console.log(error.message)
//       }
//     }
//     fetchData()
// },[]);

//   if(errorMsg !== ''){
//     return <h1>{errorMsg}</h1>
//   }

//   return (
//     <div class='imageContainer'>
//       {anime.map((animeList, index) => {
//         return (
//           <div class='animeImages' key={index}>
//             <img onClick= {testFunction} src={animeList.anime_img} alt="movie poster"/>
//             <p>{animeList.anime_name}</p>
//           </div>
//         )
//       })}
//     </div>
//   );
// }




}
export default App;