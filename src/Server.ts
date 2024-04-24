import * as fs from 'node:fs';

import '@tsed/platform-express'; // /!\ keep this import
import '@tsed/ajv';
import '@tsed/swagger';

import { Configuration } from '@tsed/di';
import * as rest from './controllers/v1';
import { config } from './config';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

@Configuration({
  ...config,
  version: pkg.version,
  httpsPort: false, // CHANGE
  mount: {
    '/v1': [...Object.values(rest)],
  },
  swagger: [
    {
      path: '/docs',
      specVersion: '3.0.1',
    },
  ],
})
export default class Server {}
