import express from 'express'
import { findSpecificUser, findUser } from "../Controllers/profile.js"

const router = express.Router()

router.get('/', findUser)
router.get('/:id', findSpecificUser)

export default router