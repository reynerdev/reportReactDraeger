import React, { useState, useEffect } from 'react';
import RichTextEditor from 'react-rte';

const BodyTextEditor = ({ setEquipos, equipos, currentIndex }) => {

  //   const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [value, setValue] = useState(
    RichTextEditor.createValueFromString(equipos[currentIndex].textArea, 'html')
  );

  useEffect(() => {
    setValue(RichTextEditor.createEmptyValue())
    
    console.log('BodyTextEditor');
    
  },[]);
  const onChange = (value) => {
    setValue(value);
    if (setEquipos) {
      equipos[currentIndex].textArea = value.toString('html');
      setEquipos([...equipos]);
    }
  };

  return <RichTextEditor value={value} onChange={onChange} />;
};

export default BodyTextEditor;
