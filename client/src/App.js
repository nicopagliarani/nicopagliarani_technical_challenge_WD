import './App.css';
import getApiData from './services/api';
import React, { useEffect, useState } from 'react';

function App() {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    getApiData().then((data) => setPhones(data));
  }, []);
  return (
    <div>
      <h1 className="Title">Phones Catalogue</h1>
      {phones.map((element) => {
        return (
          <div key={element._id} className="ContainerPhones">
            
            <h1>{element.name}</h1>
            <h2>Manufacturer: {element.manufacturer}</h2>
            <div className="phoneImage">
            <img width={350} height={350} src={require(`../public/assets/${element.imageFileName}`)} alt={`${element.name} Pic`} />
            <div className="TechFeatures">
                <h2>Description:</h2>
                <p>{element.description}</p>
                <h3>Tech Features:</h3>
                 <p><b>Color - </b>{element.color}</p>
                 <p><b>Screen - </b>{element.screen}</p>
                 <p><b>Processor - </b>{element.processor}</p>
                 <p><b>RAM - </b>{element.ram}</p>
                </div>
            </div>
            <div>
              <h3>Price: {element.price} $</h3>
              </div>
             
          </div>
        );
      })}
      {console.log(phones)}
    </div>
  )
}
export default App;
