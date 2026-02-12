import express from express
import { findSpecificUser, findUser } from "../Controllers/profile"

const router = express.router()

router.get('/', findUser)
router.get('/:id', findSpecificUser)

export default router