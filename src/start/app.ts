import cors from 'cors';
import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import hateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { resolve } from 'path';
import swaggerUi from 'swagger-ui-express';
import YML from 'yamljs';

import { errorHandler } from '../app/middlewares/error.handler';
import { logger } from '../config/logger';
import router from '../routes';

config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
const swaggerDoc = YML.load(resolve('src/config/swagger.yml'));

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(hateLimit({ max: 20 }));
}
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(logger);
app.use(router);
app.use(errorHandler);

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    message: 'not found',
    errors: ['route not found'],
  });
});

export default app;
