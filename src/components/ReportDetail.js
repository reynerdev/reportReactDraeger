import React, { useState } from 'react';

const CERTIFICADOPRUEBA = 'Result Time Sheet Instrr';

const ReportDetail = ({
  setNumeroReporte,
  setRucCliente,
  setNombreCliente,
  setNombreIngeniero,
  setFechaServicio,
  setProblemaReportado,
  setCertificadoPrueba,
}) => {
  return (
    <div className="flex flex-col items-center p-8 shadow-lg font-ui">
      <div className="flex flex-col mb-10">
        <span className="text-sm font-bold text-neutral4">
          Número de Reporte
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setNumeroReporte(e.target.value)}
        />
      </div>

      <div className="flex flex-col  mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Número Ruc del Cliente
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setRucCliente(e.target.value)}
        />
      </div>

      <div className="flex flex-col  mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Nombre del Cliente
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setNombreCliente(e.target.value)}
        />
      </div>

      <div className="flex flex-col  mb-10">
        <span className=" text-sm font-bold text-neutral4">Ingeniero</span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setNombreIngeniero(e.target.value)}
        />
      </div>

      <div className="flex flex-col  mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Fecha Solicitud de Servicio
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="date"
          min="01-01-1997"
          max="31-12-2100"
          onChange={(e) => setFechaServicio(e.target.value)}
        />
      </div>

      <div className="flex flex-col mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Problema Reportado
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          onChange={(e) => setProblemaReportado(e.target.value)}
        />
      </div>

      <div className="flex flex-col ">
        <span className=" text-sm font-bold text-neutral4">
          Certificado de Prueba
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
          placeholder="Result Time Sheet Instructions"
          onChange={(e) => setCertificadoPrueba(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReportDetail;
