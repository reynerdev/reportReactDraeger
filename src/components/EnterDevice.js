import React, { useState, useEffect } from 'react';
import BodyTextEditor from './BodyTextEditor';
import ListDevices from './ListDevices';

const EnterDevice = ({ setEquipos, equipos }) => {
  const [numeroParte, setNumeroParte] = useState('');
  const [values, setValues] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [devices, setDevices] = useState([]);
  const [openTextEditor, setOpenTextEditor] = useState(false);
  // State para el estado que nos indica cual es el indice que se esta editando en el textbox
  const [currentIndex, setCurrentIndex] = useState('');
  // useEffect(() =>
  //   console.log(equipos, 'EnterDevice');
  // }, [equipos]);

  const addDevice = () => {
    if (nombreEquipo && numeroParte && numeroSerie) {
      const equipoAdded = {
        nequipo: nombreEquipo,
        nparte: numeroParte,
        nserie: numeroSerie,
        textArea: '',
      };

      console.log('BeforeSetDevices');
      equipos.push(equipoAdded);
      // setEquipos(equipos);
      setDevices([...equipos, equipoAdded]);
      console.log(devices, 'printequipos');
    } else {
      alert('No puede quedar en blanco');
    }
  };
  return (
    <div className="flex">
      <div className="flex flex-col mr-5">
        <div className="flex flex-col mb-8">
          <span className="text-sm text-neutral4 font-bold">
            Modelo de Equipo
          </span>
          <input
            className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
            type="text"
            onChange={(e) => setNombreEquipo(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-8">
          <span className="text-sm text-neutral4 font-bold">Nro Parte</span>
          <input
            className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
            type="number"
            onChange={(e) => setNumeroParte(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <span className="text-sm text-neutral4 font-bold ">Nro Serie</span>
          <input
            className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
            type="text"
            onChange={(e) => setNumeroSerie(e.target.value)}
          />
        </div>

        <div className="p-3 flex justify-center text-blue-l">
          <button
            className="bg-pallete-yellow rounded-md hover:bg-pallete-yellow-600 focus:outline-none focus:ring-2 focus:ring-pallete-yellow focus:ring-opacity-50 pt-3 pb-3 pl-5 pr-5"
            onClick={addDevice}
          >
            Ingresar Equipo
          </button>
        </div>
      </div>

      <ListDevices
        equipos={equipos}
        setEquipos={setEquipos}
        setOpenTextEditor={setOpenTextEditor}
        setCurrentIndex={setCurrentIndex}
      />

      {openTextEditor && (
        <BodyTextEditor
          setEquipos={setEquipos}
          equipos={equipos}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
};

export default EnterDevice;
