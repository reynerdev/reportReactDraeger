import React, { useState, useEffect } from 'react';
import DevicesContext from '../context/DevicesContext';
import EnterDevice from './EnterDevice';
import ListDevices from './ListDevices';
import ReportDetail from './ReportDetail';

function App() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    console.log(equipos, 'App Component');
  });

  return (
    <div className="">
      <div
        className="
    mainContent container mx-auto 2xl border-solid border-4 border-light-blue-500 flex flex-col mt-32 "
      >
        <div className="infoReport ">
          <h1>Crear Reporte</h1>
          <button className="w-full border-solid border-4 text-left	p-3">
            Ingrese Datos del Reporte:
          </button>
          <div className="reportBox  w-full">
            <ReportDetail />
          </div>
          <button className="w-full border-solid border-4 text-left	p-3">
            Ingrese los equipos:
          </button>
          <div className="enterDeviceBox flex p-8">
            <EnterDevice setEquipos={setEquipos} equipos={equipos} />
            <ListDevices equipos={equipos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
