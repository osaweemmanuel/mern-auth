import express from 'express'

const router=express.Router();

import {authUser,registerUser,getUserProfile,updateUser,logoutUser}  from '../Controllers/userControllers.js';
import { protect} from '../middleware/authMiddle.js';


router.post('/auth',authUser)
router.post('/', registerUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUser)



export default router;