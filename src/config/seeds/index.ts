import UserSeed from './user';
import PostSeed from './post';

export default () =>
  Promise.all([
    // Returning and thus passing a Promise here
    // Independent seeds first
    UserSeed(),
    PostSeed(),
  ])
    .then(() => {
      // More seeds that require IDs from the seeds above
    })
    .then(() => {
      console.log('********** Successfully seeded db **********');
    });
