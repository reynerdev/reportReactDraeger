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
  //   const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  // const [value, setValue] = useState(
  //   RichTextEditor.createValueFromString(equipos[currentIndex].textArea, 'html')
  // );

  useEffect(() => {
    console.log('Body Text Editor', currentIndex);
  });

  // useEffect(() => {
  //   setValue(RichTextEditor.createEmptyValue())

  //   // console.log('BodyTextEditor');

  // });
  const onChange = (value) => {
    console.log(value, 'Onchange BodyTextEditor');
    setValue(value);
    equipos[currentIndex].textArea = value.toString('html');
    setEquipos([...equipos]);
    // if (setEquipos) {
    //   equipos[currentIndex].textArea = value.toString('html');
    //   setEquipos([...equipos]);
    // }
  };

  return <RichTextEditor value={value} onChange={onChange} />;
};

export default BodyTextEditor;
