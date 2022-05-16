import Post from '../../models/Post';

export default () =>
  Post.bulkCreate(
    [
      {
        title: 'admin',
        body: 'John',
        date: 'Doe',
        UserId: 1,
      },
    ],
    {
      fields: ['title', 'body', 'date'],
      ignoreDuplicates: true,
    },
  );
