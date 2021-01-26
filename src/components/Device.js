import React, { useEffect } from 'react';
import logo from '../img/close.svg';
const Device = ({
  devices,
  setDevices,
  equipo,
  index,
  setEquipos,
  equipos,
  setOpenTextEditor,
  setCurrentIndex,
}) => {
  useEffect(() => {
    console.log(equipo, 'Device', index);
  });

  const del = () => {
    console.log(equipos, 'vamos a ver los equipos');
    equipos.splice(index, 1);

    console.log(equipos, 'newArray');
    setEquipos([...equipos]);
  };

  const openTextEditor = () => {
    setOpenTextEditor(false);
    setOpenTextEditor((preval) => {
      return !preval;
    });
    setCurrentIndex(index);
  };

  return (
    <div
      className="border-2 cursor-pointer border-neutral-l-3  flex mb-5 "
      onClick={openTextEditor}
    >
      <div className="flex p-5 h-14">
        <span className="flex text-4xl font-bold">{index + 1}</span>
      </div>

      <div className="leftPart w-40 flex flex-col p-5">
        <div>{devices.nequipo}</div>
      </div>
      <div className="middlePart w-40 flex flex-col  p-5">
        <div>{devices.nparte}</div>
        <div>{devices.nserie}</div>
      </div>
      <div className="rightPart flex p-5 justify-start">
        <div>
          <img
            className="cursor-pointer"
            src={logo}
            alt="close"
            width="50%"
            onClick={del}
          />
        </div>
      </div>
    </div>
  );
};

export default Device;
