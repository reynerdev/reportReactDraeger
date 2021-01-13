import React, { useEffect } from 'react';

const Devices = ({ equipos }) => {
  useEffect(() => {
    console.log(equipos, 'Devices');
  }, []);

  return <div>{[1, 2, 3, 4, 5]}</div>;
};

export default Devices;
