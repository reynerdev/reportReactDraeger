import React, { useState, useEffect } from 'react';
import Device from './Device';

const ListDevices = ({
  devices,
  setDevices,
  equipos,
  setEquipos,
  setOpenTextEditor,
  setCurrentIndex,
}) => {
  useEffect(() => {
    console.log(devices, 'ListDevices');
  });

  return (
    <div className="">
      {!devices.length ? (
        <h1 className="p-5">Lista de equipos vacios </h1>
      ) : (
        devices.map((equipo, index) => (
          <Device
            key={index}
            index={index}
            equipo={equipo}
            setEquipos={setEquipos}
            devices={devices}
            setDevices={setDevices}
            equipos={equipos}
            setOpenTextEditor={setOpenTextEditor}
            setCurrentIndex={setCurrentIndex}
          />
        ))
      )}
    </div>
  );
};

export default ListDevices;
