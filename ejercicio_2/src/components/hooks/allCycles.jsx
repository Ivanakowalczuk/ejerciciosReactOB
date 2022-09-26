import React, {useState, useEffect} from 'react';
import '../../styles/clock.scss';


const AllCycles = () => {
const [estado, setEstado] = useState(
    {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
    }
);

function Tick() {
       setEstado((prevEstado) => {
           let edad = prevEstado.edad +1;
           return {
              ...prevEstado,
              fecha: new Date(),
              edad
           }
        });
     
    
}
    useEffect(() => {
    const timerID = setInterval (

        () => Tick(), 1000

         );
        return () => {
            clearInterval (timerID);
        };
    }, );


    return (
        <div className='fondo'>
         <h2>
         Hora Actual: {estado.fecha.toLocaleTimeString()}
         </h2> 
         <h3>{estado.nombre} {estado.apellidos}</h3>
         <h1>Edad: {estado.edad}</h1>
         </div>
    );
}

export default AllCycles;
