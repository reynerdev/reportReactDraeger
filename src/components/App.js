import React, { useState, useEffect } from 'react';
import DevicesContext from '../context/DevicesContext';
import EnterDevice from './EnterDevice';
// import { Preview, print } from 'react-html2pdf';
import ReportDetail from './ReportDetail';
import Pdf from './Pdf';
import 'animate.css'

import DetailReportState from './hooks/DetailReportState'
import logo from '../img/draegerLogo.png'

function App() {
  const [equipos, setEquipos] = useState([]);
  const [reporte,setNumeroReporte,setRucCliente,setNombreCliente,setNombreIngeniero,setFechaServicio,setProblemaReportado,setCertificadoPrueba,setPersonaContacto] = DetailReportState()
const [isOpenPreview,setIsOpenPreview] = useState(true)

  useEffect(() => {
    console.log(equipos, 'App Component');
  });

  return (
    <div className="pt-10">
                <div className= 'flex  px-36'>
            <img src={logo} width='10%' />
            <div className='flex-grow flex items-center ml-10 text-4xl font-bold font-mono'>
              
            </div>
          </div>
      <div
        className="
      mainContent
      container
      2xl
      mx-auto
      shadow-lg 
      "
      >
        <div className="infoReport flex m-5 ">



          {/* <h1>Crear Reporte</h1>
          <button className="w-full border-solid border-4 text-left	p-3">
            Ingrese Datos del Reporte:
          </button> */}
          <div className="reportBox ">
            <ReportDetail 
            setNumeroReporte = {setNumeroReporte}
            setRucCliente={setRucCliente}
            setNombreCliente={setNombreCliente}
            setFechaServicio={setFechaServicio}
            setProblemaReportado={setProblemaReportado}
            setCertificadoPrueba={setCertificadoPrueba} 
            setNombreIngeniero = {setNombreIngeniero}
            setPersonaContacto = {setPersonaContacto}
            />
          </div>
          {/* <button className="w-full border-solid border-4 text-left	p-3">
            Ingrese los equipos:
          </button> */}
          {/* <button
            className="w-full border-solid border-4 text-left	p-3"
            onClick={printPdf}  
          >
            Generar PDF
          </button> */}

          <div className="enterDeviceBox flex p-8">
            <EnterDevice setEquipos={setEquipos} 
            equipos={equipos}
            setIsOpenPreview={setIsOpenPreview}
             />
            {/* <ListDevices equipos={equipos} /> */}
          </div>

          <div className={`modal ${isOpenPreview && 'modalPdf-open'} justify-center modalPdf `} onClick={()=>setIsOpenPreview(false)}>
            <Pdf equipos = {equipos} reporteDetail = {reporte} setIsOpenPreview={setIsOpenPreview}/>
          </div>

          
    
        </div>
      </div>
    </div>
  );
}

export default App;
