import React, { useEffect, useState } from 'react'
import Prueba2  from './Prueba2'
import Prueba3 from './Prueba3'
const Learning = () => {

    const [prueba1, setPrueba1] = useState(0)
    const [prueba2,setPrueba2] = useState(0)

    useEffect(()=>{

        console.log('Learning')
    })

    return (
        <div>
            <h1>prueba1</h1>
            <h1>{prueba1}</h1>
            <button onClick={()=>setPrueba1(prueba1 + 1)}>
                Aumenta prueba1
            </button>
            <h1>prueba2</h1>
            <h1>{prueba2}</h1>
            <button onClick={()=>setPrueba2(prueba2 + 1)}>
                Aumenta Prueba2
            </button>
            <Prueba2 prueba2={prueba2} setPrueba2={setPrueba2}/>
            {/* <prueba3 prueba3={} */}
            <Prueba3 setPrueba1 ={setPrueba1} setPrueba2={setPrueba2} prueba1={prueba1} prueba2 ={prueba2}/>
        </div>
    )
}

export default Learning
