import express from 'express';
import { test,UserUpdate } from '../Controllers/user.controller.js';
import { verifyToken } from '../UtilityCode/verifyUser.js';


const router = express.Router();

router.get('/test',test)
router.put('/update/:userId',verifyToken,UserUpdate)

export default router;