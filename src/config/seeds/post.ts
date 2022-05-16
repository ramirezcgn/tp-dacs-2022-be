import Post from '../../models/Post';

export default () =>
  Post.bulkCreate(
    [
      {
        title: 'Post Title',
        body: 'Post body',
        date: Date.now(),
        UserId: 1,
      },
    ],
    {
      fields: ['title', 'body', 'date', 'UserId'],
      ignoreDuplicates: true,
    },
  );
