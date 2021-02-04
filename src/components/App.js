import React, { useState, useEffect } from 'react';
import DevicesContext from '../context/DevicesContext';
import EnterDevice from './EnterDevice';
// import { Preview, print } from 'react-html2pdf';
import ReportDetail from './ReportDetail';
import Pdf from './Pdf';
import html2pdf from 'html2pdf.js';

function App() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    console.log(equipos, 'App Component');
  });

  const printPdf = () => {
    let element = document.getElementById('element-to-print');
    //     let text = document.querySelector('.firstContent').innerText;
    // console.log(text.length);
    var opt = {
      // margin: [50, 50, 50, 50],
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
          <button
            className="w-full border-solid border-4 text-left	p-3"
            onClick={printPdf}
          >
            Generar PDF
          </button>

          <div className="enterDeviceBox flex p-8">
            <EnterDevice setEquipos={setEquipos} equipos={equipos} />
            {/* <ListDevices equipos={equipos} /> */}
          </div>

          <div className="flex justify-center">
            <Pdf />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
