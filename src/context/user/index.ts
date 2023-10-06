import { Router } from 'express';
import * as userContext from './controller';

const router = Router();

router.route('/')
  .get(userContext.getAllUsers)
  .post(userContext.createUser);

router.route('/:id')
  .get(userContext.getUserById)
  .put(userContext.editUser)
  .delete(userContext.deleteUser);

export default router;