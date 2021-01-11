import React, { useEffect } from 'react';
import Device from './Device';

const ListDevices = ({ equipos }) => {
  return (
    <div>
      {equipos}
      <Device />
    </div>
  );
};

export default ListDevices;
