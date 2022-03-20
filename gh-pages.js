import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/JoaquinBeltran1/joaquinbeltran1.github.io.git', // Update to point to your repository
  user: {
   name: 'Joaquin Beltran', // update to use your name
   email: 'j.beltranbaldy@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);