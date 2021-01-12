import { Router } from 'express';

import { UsersController } from './app/controller/users.controller';
import { dbHealthRoute } from './config/statusMonitor';

const router = Router();
const usersController = new UsersController();

router.get('/users', usersController.get);

router.get('/admin/health/database', dbHealthRoute);

export default router;
