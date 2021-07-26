import gomycode from'./imageInSrc.png';

import maVideo from './rethinking-education-le-modèle-gomycode-présenté-par-le-ceo-yahya-bouhlel.mp4';

import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black" , maxWidth:"100vw"}}>

<h1 className="title red">Mariam Ghiloufi</h1>

<br/>
<img src={gomycode} alt="gomycode"/>

<br/>
<img src="/imageInPublic.jpg" alt="imageInPublic"/>

</div>
     
<video width="320" height="240"  controls >
          <source src={maVideo} type="video/mp4"/>
         </video>
  
    </div>
  );
}

export default App;
