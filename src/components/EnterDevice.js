import React, { useState } from 'react';

const EnterDevice = ({ setEquipos, equipos }) => {
  const [numeroParte, setNumeroParte] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');

  const addDevice = () => {
    console.log(equipos);
    const equipoAdded = {
      nparte: numeroParte,
      nserie: numeroSerie,
    };

    equipos.push(equipoAdded);
    setEquipos(equipos);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-8">
        <span className="text-xs text-neutral4">Nro Parte</span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setNumeroParte(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-neutral4">Nro Serie</span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setNumeroSerie(e.target.value)}
        />
      </div>

      <button onClick={addDevice}>Ingresa Equipo</button>
    </div>
  );
};

export default EnterDevice;
