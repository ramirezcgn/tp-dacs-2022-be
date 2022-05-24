//import api_trucha_trivago

const buscarVuelos = () => {
  // vuelos = api_trucha_despegar.buscar({ lugar_desde:'Resistencia' , lugar_hasta:'Doha',
  // salida:'31/05/22' , precio_desde:'1000', 'precio_hasta:'5000', clase:'Pobre'}) ;
  const vuelos = [
    {
      idservicio: 1532,
      aerolinea: 'Latam',
      precio: '2500',
      salida: '01/06/22',
      clase: 'Pobre',
    },
    {
      idservicio: 1533,
      aerolinea: 'Aerolineas Argentinas',
      precio: '200',
      salida: '01/06/22',
      clase: 'Pobre',
    },
    {
      idservicio: 1534,
      aerolinea: 'Qatar Airwairs',
      precio: '3500',
      salida: '01/06/22',
      clase: 'Pobre',
    },
  ];

  return vuelos;
};

export default buscarVuelos;
