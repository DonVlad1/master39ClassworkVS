import cadia from "./images/CadianUniform.png"
import krieg from "./images/KriegUniform.png"
import steel from "./images/SteelLegionUniform.png"
import vostroya from "./images/VostroyanUniform.png"
import "./App.css"

const guardList = [cadia, krieg, steel, vostroya]

function App() 
{
    return (
    <div class="imperialGuardSpace">
    <AllPictures name = "Hans" unitList = {guardList}/>
    </div>
  );
  }

function AllPictures(props)
{
  return(
    <div class="guardImages">
      <Cadia unitList = {guardList[0]}/>
      <Krieg unitList = {guardList[1]}/>
      <Steel unitList = {guardList[2]}/>
      <Vostroya unitList = {guardList[3]}/>
    </div>
  )
}

function Cadia(props)
{
  return(
    <div>
          <p>Cadian Troops</p>
          <img id = "cadia" src={props.unitList} alt=""/>
          <p>Renowned for having the most elite units in the Imperium</p>
    </div>
  )
}

function Krieg(props)
{
  return(
    <div>
      <p>Death Korp of Krieg</p>
      <img id = "krieg" src={props.unitList} alt=""/>
      <p>Renowned for their disregard for personal safety</p>
    </div>
  )
}

function Steel(props)
{
  return(
    <div>
      <p>Armaghedon Steel Legion</p>
      <img id = "steel" src={props.unitList} alt=""/>
      <p>Renowned for thir extensive use of mechanised warfare</p>
    </div>

  )
}

function Vostroya(props)
{
  return(
    <div>
      <p>Vostroyan Firstborn</p>
      <img id = "vostroya" src={props.unitList} alt=""/>
      <p>Renowned for their bear cavalry</p>
    </div>
  )
}


export default App;

