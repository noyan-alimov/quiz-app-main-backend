import * as jwt from 'express-jwt';
import * as jwks from 'jwks-rsa';
import { config } from 'src/config';

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${config.AUTH0_ISSUER_URL}.well-known/jwks.json`
  }),
  audience: config.AUTH0_AUDIENCE,
  issuer: config.AUTH0_ISSUER_URL,
  algorithms: ['RS256']
});

export const unless = function (path, middleware) {
  return function (req, res, next) {
    if (path === req.path && req.method === 'GET') {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};
