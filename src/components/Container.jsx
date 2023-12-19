// // import "../estilos/Container.sass"
// // import axios from "axios"
// // // import seta from "./images/img_seta.svg"
// // // import Navbar from "../Navbar/Navbar"
// // import React, { useState } from "react"
// // import pets from "../images/pets.png"

// // function Container() {

// //     const [pet, setPet] = useState({

// //         file:'',

// //         nome:'',
// //         especie:'',
// //         porte:'',
// //         idade:'',
// //         sexoDoBichinho:'',
// //         cidade:'',
// //         estado:'',
// //     })

// //     const [file, setFile] = useState("")
// //     const [preview, setPreview] = useState("")
// //     const [nome, setNome] = useState("")
// //     const [especie, setespecie] = useState("")
// //     const [porte, setporte] = useState("")
// //     const [idade, setidade] = useState("")
// //     const [sexoDoBichinho, setsexoDoBichinho] = useState("")
// //     const [cidade, setcidade] = useState("")
// //     const [estado, setestado] = useState("")


// //   function handleChange(nameInput, valueInput) {
// //     const { name, valor } = { name: nameInput, valor: valueInput }
// //     setPet({
// //       ...pet,
// //       [name]: valor,
// //         })
// //     }
// //     const loadImage = (e) =>{
// //         const image = e.target.files[0]
// //         setFile(image)
// //         setPreview(URL.createObjectURL(image))
// //     }


// //     const handleSubmit =  async (e) =>{
// //         e.preventDefault()
// //         const formData = new FormData()

// //         formData.append("file", pet.file)
// //         formData.append('nome', pet.nome)
// //         formData.append('especie', pet.especie)
// //         formData.append('porte', pet.porte)
// //         formData.append('idade', pet.idade)
// //         formData.append('sexoDoBichinho', pet.sexoDoBichinho)
// //         formData.append('cidade', pet.cidade)
// //         formData.append('estado', pet.estado)

// //         axios.post('http://localhost:3004/animais', formData, {
// //             headers:{
// //                 "Content-type": "multipart/form-data"
// //             }
// //         })
// //        .then((response) =>{
// //         console.log(response)
// //        })
// //        .catch(err => console.log(err))
// //     }

// //     return (


// //                              //enctype serve para fazer um forms receber valores

// //         <main>

// //             <div className="div_img_container">
// //                 <img src={pets} alt="Sweet Pets" className="img_pets" /> 
// //             </div>

// //             <div className="div_form">

// //                 <h1 className="h1_cadastrar_pets">
// //                     Cadastre um pet para adoção
// //                 </h1>

// //                 <form method="POST" className="form_cadastrar" onChange={(e) =>{handleSubmit(e)}}>

// //                     <div className="div_nome_pet">

// //                         <label className="label" for="input_nome_pet">
// //                             Nome do pet
// //                         </label>

// //                         <input type="text" id="input_nome_pet" name="nome" value={pet.nome}  onChange={(e) => handleChange('nome',e.target.value)}
// //                             required />
// //                     </div>

// //                     <div className="div_espécie_sexo_pet">

// //                         <section>
// //                             <label className="label" for="input_espécie_pet">
// //                                 Espécie:
// //                             </label>

// //                             <input type="text" id="input_espécie_pet"
// //                                 name="espécie" value={pet.especie}  onChange={(e) => handleChange('especie',e.target.value)}
// //                                 required />
// //                         </section>

// //                         <section>
// //                             <label className="label" for="input_sexo_pet">
// //                                 Sexo:
// //                             </label>

// //                             <input type="text" id="input_sexo_pet" name="sexoDoBichinho" value={pet.sexoDoBichinho}   onChange={(e) => handleChange('sexoDoBichinho',e.target.value)}
// //                                 required />
// //                         </section>
// //                     </div>

// //                     <div className="div_idade_porte_pet">

// //                         <section>
// //                             <label className="label" for="input_idade_pet">
// //                                 Idade:
// //                             </label>

// //                             <input type="text" id="input_idade_pet" name="idade" value={pet.idade}   onChange={(e) => handleChange('idade',e.target.value)}
// //                                 required />
// //                         </section>

// //                         <section>
// //                             <label className="label" for="input_porte_pet">
// //                                 Porte:
// //                             </label>

// //                             <input type="text" id="input_porte_pet" name="porte" value={pet.porte}  onChange={(e) => handleChange('porte',e.target.value)}
// //                                 required />
// //                         </section>
// //                     </div>

// //                     <div className="div_estado_cidade_pet">

// //                         <section>
// //                             <label className="label" for="input_estado_pet">
// //                                 Estado:
// //                             </label>

// //                             <input type="text" id="input_estado_pet" name="estado" value={pet.estado}  onChange={(e) => handleChange('estado',e.target.value)}
// //                                 required />
// //                         </section>

// //                         <section>
// //                             <label className="label" for="input_cidade_pet">
// //                                 Cidade:
// //                             </label>

// //                             <input type="text" id="input_cidade_pet" name="cidade" value={pet.cidade}  onChange={(e) => handleChange('cidade',e.target.value)}
// //                                 required />
// //                         </section>
// //                     </div>

// //                     <div className="div_file_comentar">

// //                         <section>

// //                             <span className="span_1">Adicione fotos:</span>
// //                             {/* <input type="file" accept="images/*" name="imagem"
// //                                 id="input_file_pet"
// //                                 onChange={loadImage}/>
// //                                 {preview ? (
// //                                     <figure className="imagembixo">
// //                                         <img src={preview} alt="" />
// //                                     </figure>
// //                                 ) :(
// //                                     ""
// //                                 )} */}
// //                         </section>

// //                         <section className="section">

// //                             <span className="span_2">Conte um pouco sobre o pet:</span>

// //                             <textarea name="desc" required></textarea>
// //                         </section>
// //                     </div>

// //                     <button type="submit" >Enviar</button>
// //                 </form>
// //             </div>
// //         </main>
// //     )
// // }


// // export default Container

// import "../estilos/Container.sass"
// import { useState } from 'react'
// import pets from "../images/pets.png"
// import axios from "axios"

// function Container() {
//   const [pet, setPet] = useState({
//     nome: '',
//     imagem: '',
//     file: '',
//     sexoDoBichinho: '',
//     idade: '',
//     porte: '',
//     estado: '',
//     cidade: '',
//     especie: '',
//     //descricao: '',
//   })

//   // re.body.

//   const handleChange = e => setPet({...pet, [e.target.name]: [e.target.value]})

//   // function handleChange(nameInput, valueInput) {
//   //   const { name, valor } = { name: nameInput, valor: valueInput }
//   //   setPet({...pet, [name]: valor,})
//   // }

//   async function handleSubmit(e) {
//     e.preventDefault()
//       const formData = new FormData()

//       formData.append('sexoDoBichinho', pet.sexoDoBichinho)
//       formData.append('imagem', pet.file)
//       formData.append('nome', pet.nome)
//       formData.append('porte', pet.porte)
//       formData.append('idade', pet.idade)
//       formData.append('cidade', pet.cidade)
//       formData.append('estado', pet.estado)
//       formData.append('especie', pet.especie)

//     await axios.post('/animais',formData)
//   }
                
                   

    
    
//     // try {
//     //   // formData.append('descricao', pet.descricao)

//     //   await axios.post('/animais', formData, {
       
//   function handleImage(e) {
//     if (e.target.files[0]) {
//       const [image] = e.target.files
//       const photo = URL.createObjectURL(image)
//       setPet({ ...pet, foto: photo })
//       setPet({ ...pet, file: e.target.files[0] })
//     }
//   }

//   return (
//     <main>
//       <div className="div_img_container">
//         <img src={pets} alt="Sweet Pets" className="img_pets" />
//       </div>

//       <div className="div_form">
//         <h1 className="h1_cadastrar_pets">Cadastre um pet para adoção</h1>

//         <form
//           method="post"
//           className="form_cadastrar"
//           onSubmit={(e) => handleSubmit(e)}
//         >
//           <div className="div_nome_pet">
//             <label className="label" htmlFor="input_nome_pet">
//               Nome do pet
//             </label>

//             <input
//               //required
//               type="text"
//               name="nome"
//               id="input_nome_pet"
//              value={pet.nome}
//               onChange={
//                 handleChange
//               }
//             />
//           </div>

//           <div className="div_espécie_sexo_pet">
//             <section>
//               <label className="label" htmlFor="input_espécie_pet">
//                 Espécie:
//               </label>

//               <input
//                 //required
//                 type="text"
//                 name="especie"
//                 id="input_espécie_pet"
//                 value={pet.especie}
//                 // onChange={(e) => {
//                 //   handleChange('especie', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>

//             <section>
//               <label className="label" htmlFor="input_sexo_pet">
//                 Sexo:
//               </label>

//               <input
//                // required
//                 type="text"
//                 name="sexoDoBichinho"
//                 id="input_sexo_pet"
//                 value={pet.sexoDoBichinho}
//                 // onChange={(e) => {
//                 //   handleChange('sexoDoBichinho', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>
//           </div>

//           <div className="div_idade_porte_pet">
//             <section>
//               <label className="label" htmlFor="input_idade_pet">
//                 Idade:
//               </label>

//               <input
//              //   required
//                 type="text"
//                 name="idade"
//                 id="input_idade_pet"
//                 value={pet.idade}
//                 // onChange={(e) => {
//                 //   handleChange('idade_pet', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>

//             <section>
//               <label className="label" htmlFor="input_porte_pet">
//                 Porte:
//               </label>

//               <input
//              //   required
//                 type="text"
//                 name="porte"
//                 id="input_porte_pet"
//                 value={pet.porte}
//                 // onChange={(e) => {
//                 //   handleChange('porte_pet', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>
//           </div>

//           <div className="div_estado_cidade_pet">
//             <section>
//               <label className="label" htmlFor="input_estado_pet">
//                 Estado:
//               </label>

//               <input
//               //  required
//                 type="text"
//                 name="estado"
//                 id="input_estado_pet"
//                 value={pet.estado}
//                 // onChange={(e) => {
//                 //   handleChange('estado_pet', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>

//             <section>
//               <label className="label" htmlFor="input_cidade_pet">
//                 Cidade:
//               </label>

//               <input
//              //   required
//                 type="text"
//                 name="cidade"
//                 id="input_cidade_pet"
//                 value={pet.cidade}
//                 // onChange={(e) => {
//                 //   handleChange('cidade_pet', e.target.value)
//                 // }}
//                 onChange={
//                   handleChange
//                 }
//               />
//             </section>
//           </div>

//           <div className="div_file_comentar">
//             <section>
//               <span className="span_1">Adicione fotos:</span>

//               <label
//                 tabIndex="0"
//                 className="label_file"
//                 htmlFor="input_file_pet"
//               >
//                 <img
//                   className="img_file"
//                   src={pet.foto}
//                   alt="Clique aqui"
//                 />
//               </label>

//               <input
//               //  required
//                 type="file"
//                 name="imagem"
//                 accept="images/*"
//                 id="input_file_pet"
//                 onChange={(e) => {
//                   handleImage(e)
//                 }}
//               />
//             </section>

//             <section className="section">
//               <span className="span_2">Conte um pouco sobre o pet:</span>

//               <textarea
//                // required
//                // name="descricao"
//                 // value={pet.descricao_pet}
//                 // onChange={(e) => {
//                 //   handleChange('descricao_pet', e.target.value)
//                 // }}
//               ></textarea>
//             </section>
//           </div>

//           <button type="submit">Enviar</button>
//         </form>
//       </div>
//     </main>
//   )
// }

// export default Container
import '../estilos/Container.sass'
import { useState } from 'react'
import pets from '../images/pets.png'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'
import Textarea from './Inputs/Textarea.jsx'
import axios from "axios"
//import url_fixa from '../../Axios/UrlFixa.js'
import toastError from './Toasts/ToastError.js'
import toastSucess from './Toasts/ToastSucess.js'

function Container() {
  const [img, setImg] = useState()

  const [pet, setPet] = useState({
    nome: '',
    file: '',
    sexoDoBichinho: '',
    idade: '',
    porte: '',
    estado: '',
    cidade: '',
    especie: '',
    descricao: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('sexoDoBichinho', pet.sexoDoBichinho)
      formData.append('foto', pet.file)
      formData.append('nome', pet.nome)
      formData.append('porte', pet.porte)
      formData.append('idade', pet.idade)
      formData.append('cidade', pet.cidade)
      formData.append('estado', pet.estado)
      formData.append('especie', pet.especie)
      formData.append('descricao', pet.descricao)

      await axios.post('http://localhost:3004/animais', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      toastSucess()
      console.log(pet)
    } catch (e) {
      toastError()
      console.log(e)
      console.log(pet)
    }
  }

  function handleChange(nameInput, valueInput) {
    const { name, valor } = { name: nameInput, valor: valueInput }
    setPet({
      ...pet,
      [name]: valor,
    })
  }

  function handleImage(e) {
    if (e.target.files[0]) {
      const [image] = e.target.files
      const photo = URL.createObjectURL(image)
      setImg(photo)
      setPet({ ...pet, file: e.target.files[0] })
    }
  }

  return (
    <main>
      <div className="div_img_container">
        <img src={pets} alt="Sweet Pets" className="img_pets" />
      </div>

      <div className="div_form">
        <h1 className="h1_cadastrar_pets">Cadastre um pet para adoção</h1>

        <form method="post" className="form_cadastrar">
          <div className="div_nome_pet">
            <label className="label" htmlFor="input_nome_pet">
              Nome do pet
            </label>

            <Input
              type="text"
              name="nome"
              id="input_nome_pet"
              value={pet.nome}
              onChange={(e) => {
                handleChange('nome', e.target.value)
              }}
            />
          </div>

          <div className="div_espécie_sexo_pet">
            <section>
              <label className="label" htmlFor="input_espécie_pet">
                Espécie:
              </label>

              <Input
                type="text"
                name="especie"
                id="input_espécie_pet"
                value={pet.especie}
                onChange={(e) => {
                  handleChange('especie', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_sexo_pet">
                Sexo:
              </label>

              <Input
                type="text"
                name="sexoDoBichinho"
                id="input_sexo_pet"
                value={pet.sexoDoBichinho}
                onChange={(e) => {
                  handleChange('sexoDoBichinho', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_idade_porte_pet">
            <section>
              <label className="label" htmlFor="input_idade_pet">
                Idade:
              </label>

              <Input
                type="text"
                name="idade"
                id="input_idade_pet"
                value={pet.idade}
                onChange={(e) => {
                  handleChange('idade', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_porte_pet">
                Porte:
              </label>

              <Input
                type="text"
                name="porte"
                id="input_porte_pet"
                value={pet.porte}
                onChange={(e) => {
                  handleChange('porte', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_estado_cidade_pet">
            <section>
              <label className="label" htmlFor="input_estado_pet">
                Estado:
              </label>

              <Input
                type="text"
                name="estado"
                id="input_estado_pet"
                value={pet.estado}
                onChange={(e) => {
                  handleChange('estado', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_cidade_pet">
                Cidade:
              </label>

              <Input
                type="text"
                name="cidade"
                id="input_cidade_pet"
                value={pet.cidade}
                onChange={(e) => {
                  handleChange('cidade', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_file_comentar">
            <section>
              <span className="span_1">Adicione fotos:</span>

              <label
                tabIndex="0"
                className="label_file"
                htmlFor="input_file_pet"
              >
                <img className="img_file" src={img} alt="Clique aqui" />
              </label>

              <Input2
                type="file"
                name="foto_pet"
                accept="images/*"
                id="input_file_pet"
                value={pet.foto}
                onChange={(e) => {
                  handleImage(e)
                }}
              />
            </section>

            <section className="section">
              <span className="span_2">Conte um pouco sobre o pet:</span>

              <Textarea
                name="descricao"
                value={pet.descricao}
                onChange={(e) => {
                  handleChange('descricao', e.target.value)
                }}
              />
            </section>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Container