require('dotenv').config();

export const config = {
  DB_PATH: process.env.DB_PATH,
  AUTH0_ISSUER_URL: process.env.AUTH0_ISSUER_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  GET_SIGNED_URL_PATH: process.env.GET_SIGNED_URL_PATH
};
