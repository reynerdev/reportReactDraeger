import React from 'react'

const Prueba3 = ({setPrueba1,prueba1,prueba2,setPrueba2}) => {
    console.log('Prueba3')

    const up = () => {

        setPrueba2(prueba2+1)
        setPrueba1(prueba1+1)

    }
    return (
        <div>
            Prueba3
            <button onClick={up}>
                Up prueba3
            </button>
        </div>
    )
}

export default Prueba3
