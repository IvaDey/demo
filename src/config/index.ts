import { envs } from './envs';
import loggerConfig from './logger';

export const config: Partial<TsED.Configuration> = {
  envs,
  logger: loggerConfig,

  acceptMimes: ['application/json'],
  httpPort: process.env.PORT || 8083,
  disableComponentsScan: true,
  ajv: {
    returnsCoercedValues: true,
  },
  middlewares: [
    'cors',
    'cookie-parser',
    'compression',
    'method-override',
    'json-parser',
    { use: 'urlencoded-parser', options: { extended: true } },
  ],
  exclude: [
    '**/*.spec.ts',
  ],
};
