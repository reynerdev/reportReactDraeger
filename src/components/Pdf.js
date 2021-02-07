import React from 'react';

import './style.css';
import logoDraeger from '../img/draegerLogo.png';
import Device from './Device';
import { DescriptionItem } from './DescriptionItem';
import ReactHtmlParser from 'react-html-parser'

const Pdf = ({equipos,
reporteDetail
}) => {


  console.log('PDF')
  return (
    <div id="element-to-print" style={{ width: '790px' }}>
      <div className="row firstRow">
        <div className="left title">Reporte de Servicio Tecnico</div>
        <div className="right logo">
          <img src={logoDraeger} alt="DraegerLogo" width="150px" />
        </div>
      </div>
      <div className="row secondRow">
        <div className="left nCliente">
          <div className="uppertext">N° Cliente:</div>
          <p>{reporteDetail.rucCliente}</p>
        </div>
        <div className="right nReporte">
          <div className="uppertext">N° Reporte de servicio:</div>
          <p>{reporteDetail.numeroReporte}</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Cliente:</div>
          <p>{reporteDetail.nombreCliente}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">Ingeniero</div>
          <p>{reporteDetail.nombreIngeniero}</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Fecha solicitud/servicio:</div>
          <p>{reporteDetail.fechaServicio}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">Problema reportado:</div>
          <p>{reporteDetail.problemaReportado}</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Persona de Contacto:</div>
          <p>{reporteDetail.personaContacto}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">
            Certificado de pruebas del fabricante:
          </div>
          <p>{reporteDetail.certificadoPrueba}</p>
        </div>
      </div>
      <div className="mainContent">
        <div className="pages">
          Pagina <span>1</span>/<span>1</span>
        </div>
        <div className="column itemColumn">
          <div className="columnTitle">Item</div>
        </div>
        <div className="column quantityColumn">
          <div className="columnTitle">Cantidad</div>
        </div>
        <div className="column descriptionColumn">
          <div className="columnTitle">Descripcion</div>

          <div className="items">

            {equipos.map((equipo,index)=>{

              console.log(equipo,'PDF')

  return  (

                <>
                <div className="itemsNumber">{index}</div>

                <div className="content firstContent">{ReactHtmlParser(equipo.textArea)}</div>
                </>
              )
            })}
      
          </div>
        </div>
      </div>
      <div className="signaturePart">SIGNATURE</div>
    </div>
  );
};

export default Pdf;
