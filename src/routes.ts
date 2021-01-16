import { Router } from 'express';

import { AppController } from './app/controller/app.controller';
import { dbHealthRoute } from './config/statusMonitor';

const router = Router();
const appController = new AppController();

router.post('/shorten', appController.shorten);

router.get('/:slug', appController.redirect);

router.get('/admin/health/database', dbHealthRoute);

export default router;
