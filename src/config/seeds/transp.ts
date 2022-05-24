import Transp from '../../externals/models/transp';

export default () =>
  Transp.bulkCreate(
    [
      {
        idService: 1532,
        name: 'Latam',
        amount: '2500',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Plane',
      },
      {
        idService: 1533,
        name: 'Aerolineas Argentinas',
        amount: '200',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Train',
      },
      {
        idService: 1534,
        name: 'Qatar Airwairs',
        amount: '3500',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Bus',
      },
    ],
    {
      fields: ['idService', 'name', 'amount', 'fromDate', 'toDate', 'type'],
      ignoreDuplicates: true,
    },
  );
