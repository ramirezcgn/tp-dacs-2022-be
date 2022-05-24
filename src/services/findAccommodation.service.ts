//import api_trucha_trivago

const buscarReserva = () => {
  // reservaciones = api_trucha_trivago.buscar({ desde:'01/06/22' , hasta:'31/06/22', city:'Acapulco',
  // precio_desde:'1000', 'precio_hasta:'5000'}) ;
  const reservaciones = [
    {
      idservicio: 1532,
      hotel: 'Hotel Rivadavia',
      precio: '2500',
      desde: '01/06/22',
      hasta: '31/06/22',
    },
    {
      idservicio: 1533,
      hotel: 'Hotel Washington',
      precio: '200',
      desde: '01/06/22',
      hasta: '31/06/22',
    },
    {
      idservicio: 1534,
      hotel: 'Hotel Plaza',
      precio: '3500',
      desde: '01/06/22',
      hasta: '31/06/22',
    },
  ];

  return reservaciones;
};

export default buscarReserva;
