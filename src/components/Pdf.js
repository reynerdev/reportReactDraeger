import React from 'react';

import './style.css';
import logoDraeger from '../img/draegerLogo.png';

const Pdf = ({
  nCliente,
  nReporte,
  razonSocial,
  ingeniero,
  fecha,
  personaContacto,
}) => {
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
          <p>{nCliente}</p>
        </div>
        <div className="right nReporte">
          <div className="uppertext">N° Reporte de servicio:</div>
          <p>{nReporte}</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Cliente:</div>
          <p>{razonSocial}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">Ingeniero</div>
          <p>{ingeniero}</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Fecha solicitud/servicio:</div>
          <p>{fecha}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">Problema reportado:</div>
          <p>Result Time Sheet Instructions</p>
        </div>
      </div>
      <div className="row thirdRow">
        <div className="left fecha">
          <div className="uppertext">Persona de Contacto:</div>
          <p>{personaContacto}</p>
        </div>
        <div className="right problemaReportado">
          <div className="uppertext">
            Certificado de pruebas del fabricante:
          </div>
          <p>Result Time Sheet Instructions</p>
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
            <div className="itemsNumber">01</div>

            <div className="content firstContent">r r</div>
          </div>
        </div>
      </div>
      <div className="signaturePart">SIGNATURE</div>
    </div>
  );
};

export default Pdf;
