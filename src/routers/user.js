import { Router } from 'express';
import { validationBody } from '../middlewares/validationBody.js';
import { loginUserSchema, registerUserSchema } from '../validation/user.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/user.js';

const router = Router();

router.post(
  '/register',
  validationBody(registerUserSchema),
  registerUserController,
);

router.post('/login', validationBody(loginUserSchema), loginUserController);

router.post('/logout', logoutUserController);

router.post('/refresh', refreshUserSessionController);

export default router;
