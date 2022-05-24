import Stay from '../../externals/models/stay';

export default () =>
  Stay.bulkCreate(
    [
      {
        idService: 1532,
        name: 'Hotel Rivadavia',
        amount: '2500',
        fromDate: '01/06/22',
        toDate: '31/06/22',
      },
      {
        idService: 1533,
        name: 'Hotel Washington',
        amount: '200',
        fromDate: '01/06/22',
        toDate: '31/06/22',
      },
      {
        idService: 1534,
        name: 'Hotel Plaza',
        amount: '3500',
        fromDate: '01/06/22',
        toDate: '31/06/22',
      },
    ],
    {
      fields: ['idService', 'name', 'amount', 'fromDate', 'toDate'],
      ignoreDuplicates: true,
    },
  );
