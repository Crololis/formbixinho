// import "./index.css";
// import { useState } from "react";
// import To_Do from "./components/To_Do"
// import Search from "./components/Search"
// import Filter from "./components/Filter"

// function App() {

//   const [to_dos, setTodos] = useState([

//     {
//       id: 1,
//       title: "Ana",
//       category: "Padrão",
//       category_1: "Limpeza",
//     },
//     {
//       id: 2,
//       title: "Carolina",
//       category: "Padrão",
//       category_1: "Limpeza",
//     },
//     {
//       id: 3,
//       title: "Moreira",
//       category: "Padrão",
//       category_2: "Remédio",
//     },
//     {
//       id: 4,
//       title: "Tavares",
//       category: "Padrão",
//       category_2: "Remédio",
//     },
//     {
//       id: 5,
//       title: "Luna",
//       category: "Padrão",
//       category_3: "Vestimenta",
//     },
//     {
//       id: 6,
//       title: "Sousa",
//       category: "Padrão",
//       category_3: "Vestimenta",
//     },
//   ])

//   const [search, setSearch] = useState("")

//   const [filter, setFilter] = useState("Todos")
  
//   return (

//     <div className="app">

//       <h1>Lista de Produtos</h1>
      
//       <Search search={search} setSearch={setSearch} />

//       <Filter filter={filter} setFilter={setFilter} />

//       <div className="to_do_list">

//         {to_dos

//         .filter((to_do) => 
//         filter === "Todos" ? to_do.category : 
//         filter === "Limpeza" ? to_do.category_1: 
//         filter === "Remédio" ? to_do.category_2 :
//         filter === "Vestimenta" ? to_do.category_3 :
//         to_do.category)

//         .filter((to_do) => to_do.title.toLowerCase().includes(search.toLowerCase()))
        
//         .map((to_do) => (

//           <To_Do key={to_do.id} to_do={to_do} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App;

import "bulma/css/bulma.css"
import "./index.sass"
import "./index.sass"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AnimaisList from "./components/AnimaisList.jsx"
import Container from "./components/Container.jsx"
import Navbar from "./components/Navbar"


function App() {

    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AnimaisList/>}/>
            <Route path="/add" element={<><Navbar/><Container/></>}/>
        </Routes>
        </BrowserRouter>
        // <div className="app">

        //     {/* <Navbar /> */}
            
        // <AnimaisList />
        //     {/* <Container /> */}
        // </div>
    )
}

export default App