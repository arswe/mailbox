import express from 'express';
import AuthController from '../controllers/AuthController';
import MessageController from '../controllers/MessageController';
import UserController from '../controllers/UserController';
import { validateUser } from '../middleware/authenticate';

const router = express.Router();
// Auth Routes
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);
router.get('/auth/me', validateUser, AuthController.me);
router.get('/auth/logout', validateUser, AuthController.logout);

// User Routes
router.get('/users', validateUser, UserController.getAllUsers);

// Message Routes
router.get('/message', validateUser, MessageController.getAllMessage);
router.get('/message/:id', validateUser, MessageController.getMessage);
router.get('/message/:id/read', validateUser, MessageController.readMessage);
router.get(
  '/message/:id/delete',
  validateUser,
  MessageController.deleteMessage
);
router.post('/message', validateUser, MessageController.createMessage);

export default router;
