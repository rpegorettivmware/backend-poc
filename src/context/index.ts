import { Router } from 'express';
import userContext from './user';

const router = Router();

router.use('/users', userContext);


export default router;