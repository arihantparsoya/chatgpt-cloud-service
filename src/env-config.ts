import dotenv from 'dotenv';

export default () => {
  const env = process.env.NODE_ENV || 'development';
  if (env === 'production') {
    dotenv.config({ path: '.env.prod' });
  } else {
    dotenv.config({ path: '.env.dev' });
  }
};
