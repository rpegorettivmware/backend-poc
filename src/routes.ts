import { Router } from "express";
import context from "./context";

const router = Router();
router.use('/', context);

export default router;