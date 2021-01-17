import { Router } from 'express';

import { AppController } from './app/controller/app.controller';

const router = Router();
const appController = new AppController();

router.post('/shorten', appController.shorten);

router.get('/:slug', appController.redirect);

export default router;
