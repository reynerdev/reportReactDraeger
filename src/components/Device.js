import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import RichTextEditor from 'react-rte';
import logo from '../img/close.svg';

const Device = ({
  equipo,
  index,
  setEquipos,
  equipos,
  setOpenTextEditor,
  setCurrentIndex,
  setValue,
  currentIndex
}) => {
  useEffect(() => {
    console.log(equipo, 'Device', index);
  });

  const del = (e) => {

    e.stopPropagation();
    setOpenTextEditor(false);
    const eq = equipos;
    eq.splice(index, 1);
    setEquipos([...eq]);

    
  };

  const openTextEditor = () => {
    console.log('OpenTextEditor Clicked')
    setValue(
      RichTextEditor.createValueFromString(equipos[index].textArea, 'html')
    );
    setCurrentIndex(index);
    setOpenTextEditor(false);
    setOpenTextEditor((preval) => {
      return !preval;
    });

    console.log('BTW');
  };

  return (
    <div
      className="border-2 cursor-pointer shadow-lg flex mb-5 animate__animated animate__slideInUp"
      onClick={openTextEditor}
    >
      <div className="flex p-5 h-14">
        <span className="flex text-4xl font-bold">{index + 1}</span>
      </div>

      <div className="leftPart w-40 flex flex-col p-5">
        <div>{equipo.nequipo}</div>
      </div>
      <div className="middlePart w-40 flex flex-col  p-5">
        <div>{equipo.nparte}</div>
        <div>{equipo.nserie}</div>
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
