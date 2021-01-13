import React from 'react';

const ReportDetail = () => {
  return (
    <div className="flex flex-wrap p-8 border-solid border-4 font-ui">
      <div className="flex flex-col mr-10 mb-10">
        <span className="text-sm font-bold text-neutral4">Nro Reporte</span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>

      <div className="flex flex-col mr-10 mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Nro Ruc del Cliente
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>

      <div className="flex flex-col mr-10 mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Nombre del Cliente
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>

      <div className="flex flex-col mr-10 mb-10">
        <span className=" text-sm font-bold text-neutral4">Ingeniero</span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>

      <div className="flex flex-col mr-10 mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Fecha Solicitud de Servicio
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="date"
          min="1997-01-01"
          max="2030-12-31"
        />
      </div>

      <div className="flex flex-col mr-10 mb-10">
        <span className=" text-sm font-bold text-neutral4">
          Problema Reportado
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>

      <div className="flex flex-col mr-10">
        <span className=" text-sm font-bold text-neutral4">
          Certificado de Prueba
        </span>
        <input
          className="rounded-lg focus:outline-none border-2 border-neutral-l-3 pl-5 pr-5 pt-1 pb-1 mt-2 text-neutral3"
          type="text"
        />
      </div>
    </div>
  );
};

export default ReportDetail;
