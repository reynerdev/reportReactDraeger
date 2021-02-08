import React, { useState, useEffect } from 'react';
import Device from './Device';

const ListDevices = ({
  equipos,
  setEquipos,
  setOpenTextEditor,
  setCurrentIndex,
  setValue,
  currentIndex
}) => {
  useEffect(() => {
    console.log(equipos, 'ListDevices');
  });

  return (
    <div className="mr-5">
      {!equipos.length ? (
        <h1 className="p-5">Lista de equipos vacios </h1>
      ) : (
        equipos.map((equipo, index) => (
          <Device
            key={index}
            index={index}
            equipo={equipo}
            setEquipos={setEquipos}
            equipos={equipos}
            setOpenTextEditor={setOpenTextEditor}
            setCurrentIndex={setCurrentIndex}
            setValue={setValue}
            currentIndex = {currentIndex}
          />
        ))
      )}
    </div>
  );
};

export default ListDevices;
