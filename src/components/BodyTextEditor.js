import React, { useState, useEffect } from 'react';
import RichTextEditor from 'react-rte';

const BodyTextEditor = ({
  setEquipos,
  equipos,
  currentIndex,
  openTextEditor,
  value,
  setValue,
}) => {


  useEffect(() => {
    console.log('Body Text Editor', currentIndex);
  });


  const onChange = (value) => {
    console.log(value, 'Onchange BodyTextEditor');
    setValue(value);
    equipos[currentIndex].textArea = value.toString('html');
    setEquipos([...equipos]);

  };

  return (
  <div className='animate__animated animate__pulse'>
  <RichTextEditor value={value} onChange={onChange} />
  
  </div>
  );
};

export default BodyTextEditor;
