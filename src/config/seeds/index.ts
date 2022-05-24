import ShowSeed from './shows';
import StaySeed from './stays';
import TranspSeed from './transp';
import UserSeed from './user';

//import PostSeed from './post';

export default () =>
  Promise.all([
    // Returning and thus passing a Promise here
    // Independent seeds first
    UserSeed(),
    ShowSeed(),
    StaySeed(),
    TranspSeed(),
  ])
    .then(() => {
      // More seeds that require IDs from the seeds above
    })
    .then(() => {
      console.log('********** Successfully seeded db **********');
    });
