import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./AnimaisList.css"


const AnimalList = () => {

  const [animais, setAnimais] = useState([])

  useEffect(() => {
    getAnimais()
  }, []);


  const getAnimais = async () => {
    const response = await axios.get("http://localhost:3004/animais");
    setAnimais(response.data);
  }


  return (
    <div className="container mt-5">
      <div className="columns is-multiline">
        {animais.map((animal) => (
          <div className="column is-one-quarter" key={animal.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={animal.url} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">

                  </div>
                  <div className="media-content">
                    <p className="title is-4">{animal.nome}</p>
                    <p className="subtitle is-6">{animal.cidade}-{animal.estado}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      
      </div>
    </div>



  )
}
export default AnimalList
