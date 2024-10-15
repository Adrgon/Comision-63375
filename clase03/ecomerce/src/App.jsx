// Esta parte del codigo se utiliza para importar librerias

// Lo que esta antes de la funcion (Javascript)
//import { Fragment } from "react";
//import React from 'react';

function App() {
  // Lo que esta antes del return (Javascript)
  // codigo javascript programatico sin restricciones
  let alumnos = ['Mario', 'Diego', 'Eduardo', 'Jose', 'Javier'];


   return (
     <>
       <h1>Alumnos</h1>
       <ul>
         {alumnos.map((alumno, index) => (
           <li key={index}>{alumno}</li>
         ))}
       </ul>
     </>
   );
    
}

export default App
