import { Router } from "express";
import { createSubscription,getSubscription } from "../Controller/Subscription.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router=Router()
router.use(verifyJWT)
router.get("/get",getSubscription)
router.post('/',createSubscription)

export default router