import Show from '../../externals/models/show';

export default () =>
  Show.bulkCreate(
    [
      {
        idService: 1,
        name: 'Cine',
        description: 'Ver peliculas',
        amount: 250,
        date: '01/06/22',
      },
      {
        idService: 2,
        name: 'Teatro',
        description: 'Ver obras de teatro',
        amount: 300,
        date: '02/06/22',
      },
      {
        idService: 3,
        name: 'Zoologico',
        description: 'Ver animales',
        amount: 150,
        date: '03/06/22',
      },
    ],
    {
      fields: ['idService', 'name', 'description', 'amount', 'date'],
      ignoreDuplicates: true,
    },
  );
