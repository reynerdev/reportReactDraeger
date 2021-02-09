import React, { useState, useEffect } from 'react';
import BodyTextEditor from './BodyTextEditor';
import ListDevices from './ListDevices';
import RichTextEditor from 'react-rte';
import html2pdf from 'html2pdf.js';
// recordar que el elemento se renderiza al cambiar el estado
const EnterDevice = ({ setEquipos, equipos, setIsOpenPreview }) => {
  const [numeroParte, setNumeroParte] = useState('');

  const [numeroSerie, setNumeroSerie] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(equipos, 'EnterDevice', openTextEditor);
  });

  const printPdf = () => {
    let element = document.getElementById('element-to-print');
    //     let text = document.querySelector('.firstContent').innerText;
    // console.log(text.length);
    var opt = {
      margin: [5, 5, 5, 5],
      filename: 'myfile.pdf',
      html2canvas: { scale: 4 },
      pagebreak: {
        mode: 'avoid-all',
      },
      jsPDF: {
        unit: 'px',
        format: 'a4',
        orientation: 'p',
        hotfixes: ['px_scaling'],
      },
    };

    html2pdf().set(opt).from(element).save();
  };
  const addDevice = () => {
    if (nombreEquipo && numeroParte && numeroSerie) {
      const equipoAdded = {
        nequipo: nombreEquipo,
        nparte: numeroParte,
        nserie: numeroSerie,
        textArea: ' ',
      };

      let newEquipos = [];

      // console.log('BeforeSetDevices');
      newEquipos.push(equipoAdded);
      // setEquipos(equipos);
      setEquipos([...equipos, equipoAdded]);
      // console.log(devices, 'printequipos');
    } else {
      alert('No puede quedar en blanco');
    }
  };
  return (
    <div className="flex items-start">
      <div className="flex flex-col mr-5 shadow-lg p-5">
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
          <span className="text-sm text-neutral4 font-bold">Número Parte</span>
          <input
            className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
            type="number"
            onChange={(e) => setNumeroParte(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <span className="text-sm text-neutral4 font-bold ">Número Serie</span>
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

        <div className="p-3 flex justify-center text-blue-l">
          <button
            className="bg-pallete-yellow rounded-md hover:bg-pallete-yellow-600 focus:outline-none focus:ring-2 focus:ring-pallete-yellow focus:ring-opacity-50 pt-3 pb-3 pl-5 pr-5"
            onClick={() => setIsOpenPreview(true)}
          >
            Preview
          </button>
        </div>

        <div className="p-3 flex justify-center text-blue-l">
          <button
            className="bg-pallete-yellow rounded-md hover:bg-pallete-yellow-600 focus:outline-none focus:ring-2 focus:ring-pallete-yellow focus:ring-opacity-50 pt-3 pb-3 pl-5 pr-5"
            onClick={printPdf}
          >
            Generar PDF
          </button>
        </div>
        <div className="p-3 flex justify-center text-blue-l">
          <button
            className="bg-pallete-yellow rounded-md hover:bg-pallete-yellow-600 focus:outline-none focus:ring-2 focus:ring-pallete-yellow focus:ring-opacity-50 pt-3 pb-3 pl-5 pr-5"
            onClick={addDevice}
          >
            Cargar Firma
          </button>
        </div>
      </div>

      <ListDevices
        equipos={equipos}
        setEquipos={setEquipos}
        setOpenTextEditor={setOpenTextEditor}
        setCurrentIndex={setCurrentIndex}
        setValue={setValue}
        currentIndex={currentIndex}
      />

      {openTextEditor && (
        <BodyTextEditor
          openTextEditor="openTextEditor"
          id="textEditor"
          setEquipos={setEquipos}
          equipos={equipos}
          currentIndex={currentIndex}
          value={value}
          setValue={setValue}
        />
      )}
    </div>
  );
};

export default EnterDevice;
