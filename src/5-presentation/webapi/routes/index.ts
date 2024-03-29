import { Router } from 'express';
import userRouter from './user';
const express = require('express');

const router: Router = express.Router()

router
  .post('/users/signup', userRouter.signIn)
  .get('/users', userRouter.getUsers)
  .get('/users/:id', userRouter.getUserById)

export default router;
