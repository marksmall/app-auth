import { NextFunction, Request, Response } from 'express';

import { INTERNAL_SERVER_ERROR } from '~/utils/http';

import { logEvent } from './logger';

/**
 * Log an error to the errors file and return an error message.
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 */
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('ERROR HANDLER:', error);
  console.log('REQUEST:', req);
  console.log('RESPONSE:', res);
  logEvent(`${error.name}: ${error.message}`, 'error.log');

  console.error(error.stack);
  console.log('WTF:', typeof res.status);
  res.status(500).send(error.message);
  // res.status(INTERNAL_SERVER_ERROR).send(error.message);
};
